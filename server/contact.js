const TOPIC_LABELS = {
	"Option 1": "Persona Health Advisory (₹5 Cr to ₹100 Cr)",
	"Option 2": "Family Office Advisory (₹ 100 Cr & Above)",
	"Option 3": "HERitage - Wealth Advisory for Women (₹10 Cr & Above)",
};

function resolveTopic(value) {
	if (!value) return "";
	const trimmed = String(value).trim();
	return TOPIC_LABELS[trimmed] ?? trimmed;
}

function getAirtableConfig(env = process.env) {
	const apiKey = env.AIRTABLE_API_KEY || env.VITE_AIRTABLE_API_KEY;
	const baseId = env.AIRTABLE_BASE_ID || env.VITE_AIRTABLE_BASE_ID;
	const tableName = (
		env.AIRTABLE_TABLE_NAME ||
		env.VITE_AIRTABLE_TABLE_NAME ||
		"Contact Us Table"
	).replace(/^"|"$/g, "");

	if (!apiKey || !baseId || !tableName) {
		const missing = [
			!apiKey && "AIRTABLE_API_KEY",
			!baseId && "AIRTABLE_BASE_ID",
			!tableName && "AIRTABLE_TABLE_NAME",
		].filter(Boolean);
		throw new Error(`Missing Airtable config: ${missing.join(", ")}`);
	}

	return { apiKey, baseId, tableName };
}

export function buildAirtableFields(body = {}) {
	const name = String(body.Name ?? body.name ?? "").trim();
	const phone = String(
		body["Phone Number"] ?? body.phoneNumber ?? body.phone ?? "",
	).trim();
	const email = String(
		body["Work Email"] ?? body.Email ?? body.email ?? "",
	).trim();
	const topic = resolveTopic(
		body["Topic of Enquiry"] ?? body.Radio ?? body.topic ?? "",
	);

	if (!name || !phone || !email || !topic) {
		const error = new Error(
			"Name, Phone Number, Work Email, and Topic of Enquiry are required",
		);
		error.status = 400;
		throw error;
	}

	return {
		Name: name,
		"Phone Number": phone,
		"Work Email": email,
		"Topic of Enquiry": topic,
	};
}

export async function createContactRecord(body, env = process.env) {
	const { apiKey, baseId, tableName } = getAirtableConfig(env);
	const fields = buildAirtableFields(body);
	const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

	const response = await fetch(url, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${apiKey}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ fields }),
	});

	const payload = await response.json().catch(() => ({}));
	if (!response.ok) {
		const message =
			payload?.error?.message ||
			payload?.error ||
			"Airtable request failed";
		const error = new Error(
			typeof message === "string" ? message : "Airtable request failed",
		);
		error.status = response.status;
		error.details = payload;
		throw error;
	}

	return payload;
}

export async function readJsonBody(req) {
	const chunks = [];
	for await (const chunk of req) chunks.push(chunk);
	const raw = Buffer.concat(chunks).toString("utf8");
	if (!raw) return {};
	return JSON.parse(raw);
}
