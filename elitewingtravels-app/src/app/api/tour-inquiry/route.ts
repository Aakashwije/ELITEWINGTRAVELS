import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 3;
const RATE_LIMIT_WINDOW = 60 * 1000;

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

// Vehicle display names
const vehicleLabels: Record<string, string> = {
    "private-sedan": "Private Sedan",
    suv: "Luxury SUV",
    "kdh-flatroof": "KDH Flatroof Van",
    "kdh-highroof": "KDH Highroof Van",
    "mini-coach": "Mini Coach",
    "long-coach": "Long Coach",
    "luxury-coach": "Luxury Coach",
    "premium-coach": "Premium Coach",
    "grand-coach": "Grand Coach",
};

// Create reusable transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
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

        if (body.honeypot) {
            return NextResponse.json({ success: true });
        }

        const { travelers, startDate, endDate, destinations, vehicleType, name, email, specialRequests } = body;

        if (!travelers || !startDate || !endDate || !destinations?.length || !vehicleType || !name || !email) {
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
        const safeTravelers = sanitize(travelers);
        const safeStartDate = sanitize(startDate);
        const safeEndDate = sanitize(endDate);
        const safeDests = (destinations as string[]).map(sanitize);
        const safeVehicle = sanitize(vehicleType);
        const safeRequests = sanitize(specialRequests || "");

        // Calculate trip duration
        const start = new Date(safeStartDate);
        const end = new Date(safeEndDate);
        const days = Math.max(0, Math.floor((end.getTime() - start.getTime()) / 86_400_000));

        const vehicleLabel = vehicleLabels[safeVehicle] || safeVehicle;

        // Format dates for display
        const formatDate = (d: string) => new Date(d).toLocaleDateString("en-GB", {
            weekday: "short", day: "numeric", month: "long", year: "numeric",
        });

        // Build destination list HTML
        const destListHtml = safeDests
            .map(
                (d) =>
                    `<span style="display:inline-block;background:#fef3c7;color:#92400e;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:500;margin:3px 4px;">${d}</span>`
            )
            .join("");

        // Build HTML email
        const htmlBody = `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
            <div style="background: linear-gradient(135deg, #78350f 0%, #b45309 50%, #d97706 100%); padding: 36px 24px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">✨ New Private Tour Inquiry</h1>
                <p style="color: #fef3c7; margin: 8px 0 0; font-size: 14px;">Design Your Dream Journey — EliteWing Travels</p>
            </div>
            
            <div style="padding: 32px 24px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px; width: 130px; vertical-align: top;">👤 Name</td>
                        <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 15px; font-weight: 600;">${safeName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px; vertical-align: top;">✉️ Email</td>
                        <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 15px;">
                            <a href="mailto:${safeEmail}" style="color: #b45309; text-decoration: none; font-weight: 500;">${safeEmail}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px; vertical-align: top;">👥 Travelers</td>
                        <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 15px; font-weight: 500;">${safeTravelers} guests</td>
                    </tr>
                    <tr>
                        <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px; vertical-align: top;">📅 Dates</td>
                        <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 15px;">
                            ${formatDate(safeStartDate)} → ${formatDate(safeEndDate)}
                            <br/>
                            <span style="color: #b45309; font-size: 13px; font-weight: 600;">${days} day${days !== 1 ? "s" : ""}</span>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px; vertical-align: top;">📍 Destinations</td>
                        <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 15px;">
                            ${destListHtml}
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #6b7280; font-size: 13px; vertical-align: top;">🚗 Vehicle</td>
                        <td style="padding: 14px 0; border-bottom: 1px solid #f0f0f0; color: #111827; font-size: 15px;">
                            <span style="background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 6px; font-size: 13px; font-weight: 600;">${vehicleLabel}</span>
                        </td>
                    </tr>
                    ${safeRequests ? `
                    <tr>
                        <td style="padding: 14px 0; color: #6b7280; font-size: 13px; vertical-align: top;">📝 Special Requests</td>
                        <td style="padding: 14px 0; color: #111827; font-size: 15px; line-height: 1.6;">${safeRequests.replace(/\n/g, "<br>")}</td>
                    </tr>
                    ` : ""}
                </table>
            </div>

            <div style="background: #fffbeb; padding: 16px 24px; text-align: center; border-top: 1px solid #fde68a;">
                <p style="color: #92400e; font-size: 13px; margin: 0; font-weight: 500;">Reply directly to this email to respond to ${safeName}.</p>
                <p style="color: #b45309; font-size: 11px; margin: 6px 0 0;">Sent from the EliteWing Travels Private Tour Builder</p>
            </div>
        </div>`;

        // Send email
        const contactEmail = process.env.CONTACT_EMAIL || "elitewingtravels@gmail.com";

        await transporter.sendMail({
            from: `"EliteWing Travels" <${process.env.SMTP_USER}>`,
            to: contactEmail,
            replyTo: safeEmail,
            subject: `[Tour Inquiry] New Tour Request — from ${safeName}`,
            html: htmlBody,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Tour inquiry email error:", error);
        return NextResponse.json(
            { error: "Failed to send inquiry. Please try again later." },
            { status: 500 }
        );
    }
}
