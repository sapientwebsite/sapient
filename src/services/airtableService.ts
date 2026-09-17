const TOPIC_LABELS: Record<string, string> = {
	"Option 1": "Persona Health Advisory (₹5 Cr to ₹100 Cr)",
	"Option 2": "Family Office Advisory (₹ 100 Cr & Above)",
	"Option 3": "HERitage - Wealth Advisory for Women (₹10 Cr & Above)",
};

const AIRTABLE_PAT = import.meta.env.VITE_AIRTABLE_PAT;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

export type ContactSubmissionData = {
	Name: string;
	"Phone Number": string;
	"Work Email": string;
	"Topic of Enquiry": string;
};

function resolveTopic(value: string) {
	const trimmed = value.trim();
	if (!trimmed) return "";
	return TOPIC_LABELS[trimmed] ?? trimmed;
}

const airtableService = {
	sendSubmission: async (formData: ContactSubmissionData) => {
		if (!AIRTABLE_PAT || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
			throw new Error("Airtable config missing in environment");
		}

		const fields = {
			Name: formData.Name.trim(),
			"Phone Number": formData["Phone Number"].trim(),
			"Work Email": formData["Work Email"].trim(),
			"Topic of Enquiry": resolveTopic(formData["Topic of Enquiry"]),
		};

		if (
			!fields.Name ||
			!fields["Phone Number"] ||
			!fields["Work Email"] ||
			!fields["Topic of Enquiry"]
		) {
			throw new Error(
				"Name, Phone Number, Work Email, and Topic of Enquiry are required",
			);
		}

		const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;
		const response = await fetch(url, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${AIRTABLE_PAT}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ fields }),
		});

		const payload = (await response.json().catch(() => ({}))) as {
			error?: { message?: string } | string;
			id?: string;
		};
		if (!response.ok) {
			const message =
				(typeof payload.error === "object"
					? payload.error?.message
					: payload.error) || "Airtable request failed";
			throw new Error(
				typeof message === "string" ? message : "Airtable request failed",
			);
		}

		return payload;
	},
};

export default airtableService;
