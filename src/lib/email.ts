import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

interface ContactEmailData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const CONTACT_INBOX = process.env.CONTACT_EMAIL || siteConfig.email;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactEmail(data: ContactEmailData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { data: null, error: { message: "RESEND_API_KEY is not set" } };
  }

  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const projectType = escapeHtml(data.projectType);
  const message = escapeHtml(data.message);

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #00f5ff; border-bottom: 2px solid #00f5ff; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      
      <div style="margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Project Type:</strong> ${projectType}</p>
      </div>
      
      <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
      
      <p style="margin-top: 20px; color: #666; font-size: 12px;">
        This email was sent from your portfolio contact form.
      </p>
    </div>
  `;

  const resend = new Resend(apiKey);

  return resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: CONTACT_INBOX,
    replyTo: data.email,
    subject: `Portfolio Inquiry: ${data.projectType} from ${data.name}`,
    html,
  });
}
