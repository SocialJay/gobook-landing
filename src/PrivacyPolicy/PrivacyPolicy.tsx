import Footer from "../components/Footer/Footer";
import Header from "@/components/Header/Header";
import AppIcon from "../assets/AppIcon.webp";

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
                  <span className="web-display-2 text-text-primary-default">
                    Privacy
                  </span>
                  <span className="web-display-2 text-text-primary-default">
                    Policy
                  </span>
                  <span className="web-body text-text-label">
                    {formattedDate}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 px-4">
            <p className="web-body text-text-label">
              Gobook ("we," "us," or "our") values your privacy and is committed
              to protecting the personal data of all users ("you") who access
              our platform, including Businesses offering services and Customers
              booking services. This Privacy Policy explains how we collect,
              use, store, and share your information, and your rights regarding
              that data. By using our platform, you agree to the practices
              described herein.
            </p>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Information We Collect
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  We collect personal and non-personal information necessary to
                  provide our platform services, including:
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <span className="web-callout text-text-label">
                        Personal Information:
                      </span>{" "}
                      Name, email, phone number, billing address, and other
                      details provided when creating an account or making a
                      booking.
                    </li>
                    <li className="web-body text-text-label">
                      <span className="web-callout text-text-label">
                        Booking/Service Information:
                      </span>{" "}
                      Details of services booked or offered, dates, times, and
                      notes shared between Tenants and Customers.
                    </li>
                    <li className="web-body text-text-label">
                      <span className="web-callout text-text-label">
                        Payment Information:
                      </span>{" "}
                      Processed via secure third-party payment providers; full
                      payment credentials are not stored by us.
                    </li>
                    <li className="web-body text-text-label">
                      <span className="web-callout text-text-label">
                        Usage Data:
                      </span>{" "}
                      IP address, device, browser type, and activity patterns
                      collected via cookies or similar technologies for
                      analytics and improving our platform.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                How We Use Your Information
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  We use your information to:
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      Process bookings and manage services.
                    </li>
                    <li className="web-body text-text-label">
                      Communicate confirmations, updates, and notifications.
                    </li>
                    <li className="web-body text-text-label">
                      Provide customer and tenant support.
                    </li>
                    <li className="web-body text-text-label">
                      Personalize and improve the platform experience.
                    </li>
                    <li className="web-body text-text-label">
                      Comply with legal obligations.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Data Access and Sharing
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Tenants may access Customer information only for service
                  delivery purposes. Misuse of data is prohibited.
                </li>
                <li className="web-body text-text-label">
                  We may share necessary information with third-party service
                  providers (e.g., payment processors) only to facilitate
                  platform operations.
                </li>
                <li className="web-body text-text-label">
                  We do not sell, trade, or share personal information for
                  unrelated commercial purposes.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Data Security and Storage
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Reasonable technical, administrative, and physical measures
                  are implemented to protect data.
                </li>
                <li className="web-body text-text-label">
                  Data is stored on secure servers or trusted third-party cloud
                  providers.
                </li>
                <li className="web-body text-text-label">
                  No system is completely secure; use of our platform is at your
                  own risk.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Retention of Data
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Personal information is retained while accounts are active or
                  as needed for service delivery.
                </li>
                <li className="web-body text-text-label">
                  Booking and transaction data may be retained for legal
                  compliance, reporting, or operational purposes.
                </li>
                <li className="web-body text-text-label">
                  Users may request deletion of personal data, subject to legal
                  and contractual obligations.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Cookies and Tracking
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Cookies and similar technologies are used to monitor usage,
                  maintain sessions, and personalize content.
                </li>
                <li className="web-body text-text-label">
                  Users can manage or disable cookies via browser settings, but
                  some features may not function correctly without them.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">Your Rights</span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Depending on your jurisdiction, you may have rights to:
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      Access and obtain a copy of your personal data.
                    </li>
                    <li className="web-body text-text-label">
                      Correct or delete your personal data.
                    </li>
                    <li className="web-body text-text-label">
                      Object to or restrict processing of your personal data.
                    </li>
                    <li className="web-body text-text-label">
                      Withdraw consent for marketing communications.
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  Contact us at{" "}
                  <a
                    href="mailto:support@gobook.lk"
                    className="text-text-label underline"
                  >
                    support@gobook.lk
                  </a>{" "}
                  to exercise your rights.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Children's Privacy
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Our platform is not intended for children under 16.
                </li>
                <li className="web-body text-text-label">
                  We do not knowingly collect personal information from minors.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Changes to this Privacy Policy
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  We may update this Privacy Policy periodically. Material
                  changes will be communicated via the platform or email.
                  Continued use of the platform constitutes acceptance of the
                  updated policy.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">Contact Us</span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  For questions or concerns regarding this Privacy Policy or
                  your personal data:
                  <div className="mt-2 flex flex-col gap-1 pl-0">
                    <span className="web-body text-text-label">Gobook</span>
                    <span className="web-body text-text-label">
                      Email:{" "}
                      <a
                        href="mailto:support@gobook.lk"
                        className="text-text-label underline"
                      >
                        support@gobook.lk
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[864px] md:w-[671px] xl:w-[1200px] py-4 gap-4 mx-auto max-sm:px-4 flex flex-col">
                    <Footer />
                    <a
                      href="https://www.gobook.lk/"
                      target="_blank"
                      aria-label="Host with Gobook"
                      rel="noreferrer"
                    >
                      <div className="sm:web-subheadline mobile-subheadline flex items-center gap-2">
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