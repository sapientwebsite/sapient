import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import {
	createContactRecord,
	readJsonBody,
} from "./server/contact.js";

type ContactError = Error & { status?: number; details?: unknown };

function contactApiPlugin(env: Record<string, string>): Plugin {
	return {
		name: "contact-api",
		configureServer(server) {
			server.middlewares.use("/api/contact", async (req, res, _next) => {
				if (req.method !== "POST") {
					res.statusCode = 405;
					res.setHeader("Content-Type", "application/json");
					res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
					return;
				}

				try {
					const body = await readJsonBody(req);
					const record = await createContactRecord(body, env);
					res.statusCode = 200;
					res.setHeader("Content-Type", "application/json");
					res.end(JSON.stringify({ ok: true, id: record.id }));
				} catch (error) {
					const err = error as ContactError;
					console.error("Contact form error:", err.details || err.message);
					res.statusCode = err.status || 500;
					res.setHeader("Content-Type", "application/json");
					res.end(
						JSON.stringify({
							ok: false,
							error: err.message || "Unable to submit enquiry",
						}),
					);
				}
			});
		},
	};
}

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	return {
		plugins: [react(), contactApiPlugin(env)],
	};
});
