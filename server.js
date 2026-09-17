import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createContactRecord } from "./server/contact.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;
const distDir = path.join(__dirname, "dist");

app.use(express.json({ limit: "32kb" }));

app.post("/api/contact", async (req, res) => {
	try {
		const record = await createContactRecord(req.body);
		res.status(200).json({ ok: true, id: record.id });
	} catch (error) {
		const status = error.status || 500;
		console.error("Contact form error:", error.details || error.message);
		res.status(status).json({
			ok: false,
			error: error.message || "Unable to submit enquiry",
		});
	}
});

app.use(express.static(distDir));

app.get("*", (_req, res) => {
	res.sendFile(path.join(distDir, "index.html"));
});

app.listen(port, () => {
	console.log(`Server listening on ${port}`);
});
