import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for using EliteWing Travels website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative h-[38vh] min-h-65 flex items-center justify-center bg-linear-to-br from-(--color-primary) via-[#0a2d6b] to-[#061a3d]">
        <div className="relative z-10 text-center container-luxury">
          <span className="section-label justify-center text-(--color-gold)!">
            Legal
          </span>
          <h1 className="text-white! text-3xl md:text-4xl mb-3">Terms of Service</h1>
          <p className="text-white/75! text-sm max-w-2xl mx-auto">
            Last updated: March 10, 2026
          </p>
        </div>
      </section>

      <section className="section-luxury">
        <div className="container-luxury max-w-4xl">
          <div className="card-luxury p-8 md:p-10 space-y-7 text-sm leading-7">
            <section>
              <h2 className="text-lg md:text-xl mb-2">1. acceptance of terms</h2>
              <p>
                By accessing this website or booking services with EliteWing Travels,
                you agree to these Terms of Service and applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl mb-2">2. service scope</h2>
              <p>
                We provide travel planning, transport coordination, and related
                tourism services in Sri Lanka. Service details are confirmed based on
                your final itinerary and booking confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl mb-2">3. bookings and payments</h2>
              <p>
                Prices, deposits, and payment schedules are provided during the
                quotation process. A booking is considered confirmed only after
                required payments are received.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl mb-2">4. cancellations and changes</h2>
              <p>
                Cancellation terms, amendment fees, and refund eligibility depend on
                supplier and itinerary conditions. Specific terms are shared with each
                booking confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl mb-2">5. traveler responsibilities</h2>
              <p>
                Travelers are responsible for accurate personal details, valid travel
                documents, and compliance with local laws, safety guidelines, and
                destination requirements.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl mb-2">6. liability limitation</h2>
              <p>
                While we strive to ensure smooth operations, EliteWing Travels is not
                liable for losses caused by events beyond reasonable control,
                including weather, strikes, natural events, or third-party service
                failures.
              </p>
            </section>

            <section>
              <h2 className="text-lg md:text-xl mb-2">7. Contact Information</h2>
              <p>
                For service or legal inquiries, contact us at{" "}
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
              <Link href="/contact" className="btn-primary text-xs! py-3! lowercase">
                contact our team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
