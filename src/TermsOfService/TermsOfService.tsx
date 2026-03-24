import Footer from "../components/Footer/Footer";
import Header from "@/components/Header/Header";
import AppIcon from "../assets/AppIcon.webp";

export default function TermsAndConditionsPage() {
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
                    Terms &
                  </span>
                  <span className="web-display-2 text-text-primary-default">
                    Conditions
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
              By using Gobook ("we," "us," or "our"), you ("Business") agree to
              the following Terms & Conditions. If you do not agree with any
              section of these Terms, please discontinue use of our platform and
              services.
            </p>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Use of the Platform
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Our platform enables Businesses to offer and manage services
                  available for booking.
                </li>
                <li className="web-body text-text-label">
                  All activity on the platform must comply with applicable laws
                  and these Terms.
                </li>
                <li className="web-body text-text-label">
                  Businesses must provide accurate, up-to-date, and complete
                  information when registering and managing their services.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Business Terms
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Payments to Businesses
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      Businesses receive revenue generated from bookings minus
                      the platform service fee, deposited into their billing
                      account.
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  Setup Costs
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      We do not charge any setup fees to Businesses.
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  Service Fulfilment
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      Businesses are fully responsible for fulfilling bookings
                      and delivering the services they list on the platform.
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  Customer Data Access
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      Businesses may access customer data only for internal use
                      related to service delivery. Any misuse, sharing, or
                      unauthorized processing of customer data is strictly
                      prohibited.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Fees and Billing
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Platform service fees are automatically deducted from each
                  transaction.
                </li>
                <li className="web-body text-text-label">
                  Businesses' net earnings (after fee deductions) are credited
                  to their billing account.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Purchase Policy
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Accepted Payment Methods
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      Gobook accepts Visa, MasterCard, American Express, select
                      Debit Cards, and Net Banking. Additional methods may be
                      introduced periodically.
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  Who You Are Buying From
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      Gobook acts as an agent on behalf of service providers
                      ("Businesses").
                    </li>
                    <li className="web-body text-text-label">
                      All bookings and payments are processed by Gobook on
                      behalf of the Business.
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  Pricing and Availability
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      Gobook facilitates bookings but does not control
                      availability, inventory, pricing, or service details
                      listed by Businesses.
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  Internet Handling & Processing Fees
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      Bookings may include per-ticket internet handling fees and
                      a non-refundable order processing fee.
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  Order Confirmation
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      If you do not receive a confirmation (email or
                      confirmation page) after payment, or encounter an
                      interruption during checkout, it is your responsibility to
                      verify the booking through your account or{" "}
                      <a
                        href="mailto:support@gobook.lk"
                        className="text-text-label underline"
                      >
                        support@gobook.lk
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Refunds and Exchanges
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  All booking details must be reviewed before completing
                  payment.
                </li>
                <li className="web-body text-text-label">
                  Gobook cannot offer refunds or exchanges after a booking is
                  confirmed.
                </li>
                <li className="web-body text-text-label">
                  Lost, stolen, damaged, or deleted tickets/confirmations cannot
                  be replaced or refunded.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Cancellation Policy
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Business-Initiated Cancellations
                  <p className="web-body text-text-label mt-1">
                    If a Business cancels a booking or event, the customer is
                    entitled to a full refund of the booking amount.
                  </p>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      The Business must bear any transaction or processing fees
                      associated with the refund.
                    </li>
                    <li className="web-body text-text-label">
                      Gobook will facilitate refunds but does not assume
                      liability for cancellations.
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  Customer-Initiated Cancellations
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      Refunds for customer cancellations will follow the
                      Business's own cancellation policy, which must be clearly
                      stated at the time of booking.
                    </li>
                    <li className="web-body text-text-label">
                      If no policy is provided, bookings are considered
                      non-refundable.
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  Force Majeure Events
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      In situations beyond reasonable control (e.g., natural
                      disasters, government actions, pandemics), neither GoBook
                      nor the Business is liable for non-performance.
                    </li>
                    <li className="web-body text-text-label">
                      Refunds or credits may apply depending on the Business's
                      policy.
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  Transaction Fees
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      Third-party payment processor fees are generally
                      non-refundable.
                    </li>
                    <li className="web-body text-text-label">
                      For Business-initiated cancellations, the Business must
                      cover these fees to ensure customers receive the full
                      booking amount.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Billing Information Verification
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Some bookings may require additional verification of billing
                  details.
                </li>
                <li className="web-body text-text-label">
                  Incorrect billing information may delay or prevent order
                  processing.
                </li>
                <li className="web-body text-text-label">
                  If Gobook cannot reach you during verification attempts, the
                  booking may be cancelled and released back to inventory.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">Delivery</span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Booking confirmations are delivered electronically via email.
                </li>
                <li className="web-body text-text-label">
                  Additional delivery options may be added in the future.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Cancelled or Postponed Events
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  If a service or event is cancelled or postponed, the Business
                  is fully responsible for issuing refunds according to their
                  policy.
                </li>
                <li className="web-body text-text-label">
                  Gobook will assist in facilitating the refund but is not
                  liable for fulfilling the Business's obligations.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Data Use and Privacy
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Personal information is handled according to our Privacy
                  Policy.
                </li>
                <li className="web-body text-text-label">
                  Businesses must comply with data protection regulations.
                </li>
                <li className="web-body text-text-label">
                  Misuse of customer data may result in account suspension or
                  termination.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Limitation of Liability
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  Gobook acts solely as a booking facilitator and does not
                  provide services directly.
                </li>
                <li className="web-body text-text-label">
                  We are not responsible for any loss, damage, or disputes
                  related to services offered by Businesses.
                </li>
                <li className="web-body text-text-label">
                  Use of the platform is at your own risk.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">Termination</span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  We reserve the right to suspend or terminate Business accounts
                  for violations of these Terms.
                </li>
                <li className="web-body text-text-label">
                  Termination does not absolve a Business from paying
                  outstanding fees.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">
                Changes to Terms
              </span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  We may update these Terms periodically.
                </li>
                <li className="web-body text-text-label">
                  Material changes will be communicated via email or through the
                  platform.
                </li>
                <li className="web-body text-text-label">
                  Continued use of the platform constitutes acceptance of
                  revised Terms.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <span className="web-callout text-text-label">Governing Law</span>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  These Terms are governed by the laws of the Democratic
                  Socialist Republic of Sri Lanka.
                </li>
                <li className="web-body text-text-label">
                  Any disputes shall fall under the exclusive jurisdiction of
                  the courts of Colombo, Sri Lanka.
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
