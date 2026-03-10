import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how EliteWing Travels collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative h-[38vh] min-h-[260px] flex items-center justify-center bg-linear-to-br from-(--color-primary) via-[#0a2d6b] to-[#061a3d]">
        <div className="relative z-10 text-center container-luxury">
          <span className="section-label justify-center text-(--color-gold)!">
            Legal
          </span>
          <h1 className="text-white! mb-3">Privacy Policy</h1>
          <p className="text-white/75! max-w-2xl mx-auto">
            Last updated: March 10, 2026
          </p>
        </div>
      </section>

      <section className="section-luxury">
        <div className="container-luxury max-w-4xl">
          <div className="card-luxury p-8 md:p-10 space-y-8">
            <section>
              <h2 className="text-2xl mb-3">1. Information We Collect</h2>
              <p>
                We may collect personal details such as your name, email address,
                phone number, travel preferences, and inquiry details when you
                contact us or request a tour quotation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">2. How We Use Your Information</h2>
              <p>
                Your information is used to respond to inquiries, prepare tour
                proposals, coordinate bookings, improve service quality, and provide
                customer support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">3. Data Sharing</h2>
              <p>
                We do not sell personal data. We may share relevant travel details
                only with trusted service providers (such as hotels, transport
                partners, or guides) when required to deliver your requested
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">4. Data Security</h2>
              <p>
                We apply reasonable technical and organizational measures to protect
                your personal information from unauthorized access, misuse, or loss.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">5. Cookies and Analytics</h2>
              <p>
                This website may use essential cookies and basic analytics tools to
                improve performance and user experience. You can manage cookies
                through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">6. Your Rights</h2>
              <p>
                You may request access, correction, or deletion of your personal
                information by contacting us directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-3">7. Contact Us</h2>
              <p>
                For privacy-related questions, contact us at{" "}
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(siteConfig.email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--color-primary) hover:text-(--color-gold) no-underline transition-colors"
                >
                  {siteConfig.email}
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-(--color-primary) hover:text-(--color-gold) no-underline transition-colors"
                >
                  {siteConfig.phone}
                </a>
                .
              </p>
            </section>

            <div className="pt-4 border-t border-gray-100">
              <Link href="/contact" className="btn-primary">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
