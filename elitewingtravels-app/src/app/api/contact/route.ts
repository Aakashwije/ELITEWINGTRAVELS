import { NextRequest, NextResponse } from "next/server";

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

        // In production, use Nodemailer here
        // const transporter = nodemailer.createTransport({...})
        // await transporter.sendMail({...})

        console.log("Contact form submission:", {
            name: sanitize(name),
            email: sanitize(email),
            phone: sanitize(phone || ""),
            subject: sanitize(subject),
            message: sanitize(message),
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Internal server error." },
            { status: 500 }
        );
    }
}
