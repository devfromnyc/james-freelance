import { Resend } from "resend";

interface ContactEmailData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  return new Resend(apiKey);
}

export async function sendContactEmail(data: ContactEmailData) {
  const { name, email, projectType, message } = data;

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

  const resend = getResendClient();
  
  const response = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL || "your@email.com",
    replyTo: email,
    subject: `Portfolio Inquiry: ${projectType} from ${name}`,
    html,
  });

  return response;
}
