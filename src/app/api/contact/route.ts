import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // ─── Send notification to portfolio owner ──────────────
    await resend.emails.send({
      // 'from' must be a verified domain on Resend, or use:
      // "onboarding@resend.dev" for testing (only sends to verified email)
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL ?? "tanzil@example.com"],
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family: 'Plus Jakarta Sans', sans-serif; max-width: 560px; margin: 0 auto; background: #F5EFE0; border-radius: 16px; overflow: hidden;">
          <div style="background: #2C1810; padding: 32px 40px;">
            <h1 style="font-family: Georgia, serif; color: #C4956A; font-size: 24px; margin: 0 0 4px;">New Portfolio Contact</h1>
            <p style="color: #EDE8DC; opacity: 0.6; font-size: 13px; margin: 0;">Tanzil Shandilya — Portfolio</p>
          </div>
          <div style="padding: 36px 40px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #EDE8DC; color: #6B5744; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 110px;">From</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EDE8DC; color: #2C1810; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #EDE8DC; color: #6B5744; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EDE8DC; color: #8B4A3C; font-size: 14px;"><a href="mailto:${email}" style="color: #8B4A3C;">${email}</a></td>
              </tr>
            </table>
            <h3 style="color: #6B5744; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 12px;">Message</h3>
            <p style="color: #2C1810; font-size: 15px; line-height: 1.7; margin: 0; background: #EDE8DC; padding: 20px 24px; border-radius: 10px; border-left: 3px solid #C4956A;">${message.replace(/\n/g, "<br/>")}</p>
          </div>
          <div style="background: #EDE8DC; padding: 20px 40px; text-align: center;">
            <p style="color: #6B5744; font-size: 12px; margin: 0;">Reply directly to this email — it goes straight to ${email}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
