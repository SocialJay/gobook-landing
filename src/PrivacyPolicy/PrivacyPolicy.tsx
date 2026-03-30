import Footer from "../components/Footer/Footer";
import Header from "@/components/Header/Header";
import AppIcon from "../assets/AppIcon.webp";
import { ScrollRevealText } from "@/components/ui/ScrollReveal";

export default function PrivacyPolicyPage() {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("en-US", { month: "long" });
  const year = today.getFullYear();
  const formattedDate = `Current as of ${day}, ${month} ${year}`;

  document.documentElement.classList.add("dark");

  return (
    <div className="bg-surface-container-background flex min-h-screen flex-col gap-9">
      <Header />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-9">
          <div className="flex h-[600px] items-center justify-center gap-2.5">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="flex flex-col items-center justify-center">
                    <div className="web-display-2 text-text-primary-default">
                      Policy
                    </div>
                    <div className="web-display-2 text-text-primary-default">
                      Privacy
                    </div>
                  </div>
                  <span className="web-body text-text-label">
                    {formattedDate}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4 pb-40">
            <ScrollRevealText className="web-body text-text-label">
              Gobook ("we," "us," or "our") values your privacy and is committed
              to protecting the personal data of all users ("you") who access
              our platform, including Businesses offering services and Customers
              booking services. This Privacy Policy explains how we collect,
              use, store, and share your information, and your rights regarding
              that data. By using our platform, you agree to the practices
              described herein.
            </ScrollRevealText>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Information We Collect
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    We collect personal and non-personal information necessary to
                    provide our platform services, including:
                  </ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText className="web-callout text-text-label">
                        Personal Information:
                      </ScrollRevealText>{" "}
                      <ScrollRevealText>
                        Name, email, phone number, billing address, and other
                        details provided when creating an account or making a
                        booking.
                      </ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText className="web-callout text-text-label">
                        Booking/Service Information:
                      </ScrollRevealText>{" "}
                      <ScrollRevealText>
                        Details of services booked or offered, dates, times, and
                        notes shared between Tenants and Customers.
                      </ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText className="web-callout text-text-label">
                        Payment Information:
                      </ScrollRevealText>{" "}
                      <ScrollRevealText>
                        Processed via secure third-party payment providers; full
                        payment credentials are not stored by us.
                      </ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText className="web-callout text-text-label">
                        Usage Data:
                      </ScrollRevealText>{" "}
                      <ScrollRevealText>
                        IP address, device, browser type, and activity patterns
                        collected via cookies or similar technologies for
                        analytics and improving our platform.
                      </ScrollRevealText>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                How We Use Your Information
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    We use your information to:
                  </ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>Process bookings and manage services.</ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText>Communicate confirmations, updates, and notifications.</ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText>Provide customer and tenant support.</ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText>Personalize and improve the platform experience.</ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText>Comply with legal obligations.</ScrollRevealText>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Data Access and Sharing
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    Tenants may access Customer information only for service
                    delivery purposes. Misuse of data is prohibited.
                  </ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    We may share necessary information with third-party service
                    providers (e.g., payment processors) only to facilitate
                    platform operations.
                  </ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    We do not sell, trade, or share personal information for
                    unrelated commercial purposes.
                  </ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Data Security and Storage
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    Reasonable technical, administrative, and physical measures
                    are implemented to protect data.
                  </ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    Data is stored on secure servers or trusted third-party cloud
                    providers.
                  </ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    No system is completely secure; use of our platform is at your
                    own risk.
                  </ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Retention of Data
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    Personal information is retained while accounts are active or
                    as needed for service delivery.
                  </ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    Booking and transaction data may be retained for legal
                    compliance, reporting, or operational purposes.
                  </ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    Users may request deletion of personal data, subject to legal
                    and contractual obligations.
                  </ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Cookies and Tracking
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    Cookies and similar technologies are used to monitor usage,
                    maintain sessions, and personalize content.
                  </ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    Users can manage or disable cookies via browser settings, but
                    some features may not function correctly without them.
                  </ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">Your Rights</ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    Depending on your jurisdiction, you may have rights to:
                  </ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>Access and obtain a copy of your personal data.</ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText>Correct or delete your personal data.</ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText>Object to or restrict processing of your personal data.</ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText>Withdraw consent for marketing communications.</ScrollRevealText>
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    Contact us at
                  </ScrollRevealText>
                  <a
                    href="mailto:support@gobook.lk"
                    className="text-text-label underline mx-1 inline-block"
                  >
                    <ScrollRevealText>support@gobook.lk</ScrollRevealText>
                  </a>
                  <ScrollRevealText>
                    to exercise your rights.
                  </ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Children's Privacy
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>Our platform is not intended for children under 16.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>We do not knowingly collect personal information from minors.</ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Changes to this Privacy Policy
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    We may update this Privacy Policy periodically. Material
                    changes will be communicated via the platform or email.
                    Continued use of the platform constitutes acceptance of the
                    updated policy.
                  </ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">Contact Us</ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    For questions or concerns regarding this Privacy Policy or
                    your personal data:
                  </ScrollRevealText>
                  <div className="mt-2 flex flex-col gap-1 pl-0">
                    <ScrollRevealText className="web-body text-text-label font-bold">Gobook</ScrollRevealText>
                    <div className="flex gap-1 items-center">
                      <ScrollRevealText className="web-body text-text-label">
                        Email:
                      </ScrollRevealText>
                      <a
                        href="mailto:support@gobook.lk"
                        className="text-text-label underline"
                      >
                        <ScrollRevealText>support@gobook.lk</ScrollRevealText>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full flex-col gap-4 py-4 max-sm:px-4 md:w-[671px] lg:w-[864px] xl:w-[1200px]">
          <Footer />
          <a
            href="https://www.gobook.lk/"
            target="_blank"
            aria-label="Host with Gobook"
            rel="noreferrer"
          >
            <div className="mobile-subheadline flex items-center gap-2 sm:web-subheadline">
              <span className="text-text-label">Host with </span>
              <div className="flex items-center gap-1">
                <img
                  src={AppIcon}
                  alt="Gobook app icon"
                  className="h-4 w-4 object-contain"
                />{" "}
                <span className="text-text-primary-default">Gobook</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

