import { emailOnlySGJSON } from "@springmicro/forms";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ params, request }) => {
  const subject = "Contact Form Submission";
  const json = await request.json();
  const to: string[] = [json.email];
  const cc: string[] = [];
  const bcc: string[] = [];

  const res = await emailOnlySGJSON(
    import.meta.env.SENDGRID_API_KEY,
    subject,
    json,
    to,
    cc,
    bcc
  );
  return res;
};
