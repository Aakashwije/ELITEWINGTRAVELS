import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);
    if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW) {
        rateLimitMap.set(ip, { count: 1, lastReset: now });
        return true;
    }
    if (entry.count >= RATE_LIMIT) return false;
    entry.count++;
    return true;
}

function sanitize(str: string): string {
    return str.replace(/[<>]/g, "").trim();
}

// Subject label map for nicer email display
const subjectLabels: Record<string, string> = {
    "tour-inquiry": "Tour Inquiry",
    "custom-tour": "Custom Tour Request",
    "fleet-inquiry": "Fleet Inquiry",
    general: "General Question",
    feedback: "Feedback",
};

// Create reusable transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for 587 (STARTTLS)
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(request: NextRequest) {
    try {
        const ip = request.headers.get("x-forwarded-for") || "unknown";

        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        const body = await request.json();

        // Honeypot check
        if (body.honeypot) {
            return NextResponse.json({ success: true });
        }

        const { name, email, phone, subject, message } = body;

        // Server-side validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All required fields must be filled." },
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

        // Sanitize inputs
        const safeName = sanitize(name);
        const safeEmail = sanitize(email);
        const safePhone = sanitize(phone || "");
        const safeSubject = sanitize(subject);
        const safeMessage = sanitize(message);

        const subjectLabel = subjectLabels[safeSubject] || safeSubject;

        // Build HTML email
        const htmlBody = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
            <div style="background: linear-gradient(135deg, #1a365d 0%, #2b6cb0 100%); padding: 32px 24px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">New Contact Form Submission</h1>
                <p style="color: #bee3f8; margin: 8px 0 0; font-size: 14px;">EliteWing Travels Website</p>
            </div>
            
            <div style="padding: 32px 24px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px; width: 120px; vertical-align: top;">Name</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 15px; font-weight: 500;">${safeName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px; vertical-align: top;">Email</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 15px;">
                            <a href="mailto:${safeEmail}" style="color: #2b6cb0; text-decoration: none;">${safeEmail}</a>
                        </td>
                    </tr>
                    ${safePhone ? `
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px; vertical-align: top;">Phone</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 15px;">${safePhone}</td>
                    </tr>
                    ` : ""}
                    <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px; vertical-align: top;">Subject</td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 15px;">
                            <span style="background: #ebf8ff; color: #2b6cb0; padding: 4px 10px; border-radius: 6px; font-size: 13px;">${subjectLabel}</span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 12px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Message</td>
                        <td style="padding: 12px 0; color: #111827; font-size: 15px; line-height: 1.6;">${safeMessage.replace(/\n/g, "<br>")}</td>
                    </tr>
                </table>
            </div>
            
            <div style="background: #f9fafb; padding: 16px 24px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="color: #9ca3af; font-size: 12px; margin: 0;">This email was sent from the EliteWing Travels contact form.</p>
            </div>
        </div>`;

        // Send email
        const contactEmail = process.env.CONTACT_EMAIL || "elitewingtravels@gmail.com";

        await transporter.sendMail({
            from: `"EliteWing Travels" <${process.env.SMTP_USER}>`,
            to: contactEmail,
            replyTo: safeEmail,
            subject: `[Contact Form] ${subjectLabel} — from ${safeName}`,
            html: htmlBody,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form email error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}
