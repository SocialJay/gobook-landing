import Footer from "../components/Footer/Footer";
import Header from "@/components/Header/Header";
import AppIcon from "../assets/AppIcon.webp";
import { ScrollRevealText } from "@/components/ui/ScrollReveal";

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
                  <div className="flex flex-col items-center justify-center">
                    <div className="web-display-2 text-text-primary-default">
                      Tems &
                    </div>
                    <div className="web-display-2 text-text-primary-default">
                      Condition
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
              By using Gobook ("we," "us," or "our"), you ("Business") agree to
              the following Terms & Conditions. If you do not agree with any
              section of these Terms, please discontinue use of our platform and
              services.
            </ScrollRevealText>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Use of the Platform
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    Our platform enables Businesses to offer and manage services
                    available for booking.
                  </ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    All activity on the platform must comply with applicable laws
                    and these Terms.
                  </ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    Businesses must provide accurate, up-to-date, and complete
                    information when registering and managing their services.
                  </ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Business Terms
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>Payments to Businesses</ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>
                        Businesses receive revenue generated from bookings minus
                        the platform service fee, deposited into their billing
                        account.
                      </ScrollRevealText>
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Setup Costs</ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>We do not charge any setup fees to Businesses.</ScrollRevealText>
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Service Fulfilment</ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>
                        Businesses are fully responsible for fulfilling bookings
                        and delivering the services they list on the platform.
                      </ScrollRevealText>
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Customer Data Access</ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>
                        Businesses may access customer data only for internal use
                        related to service delivery. Any misuse, sharing, or
                        unauthorized processing of customer data is strictly
                        prohibited.
                      </ScrollRevealText>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Fees and Billing
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>Platform service fees are automatically deducted from each transaction.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Businesses' net earnings (after fee deductions) are credited to their billing account.</ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Purchase Policy
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>Accepted Payment Methods</ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>
                        Gobook accepts Visa, MasterCard, American Express, select
                        Debit Cards, and Net Banking. Additional methods may be
                        introduced periodically.
                      </ScrollRevealText>
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Who You Are Buying From</ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>Gobook acts as an agent on behalf of service providers ("Businesses").</ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText>All bookings and payments are processed by Gobook on behalf of the Business.</ScrollRevealText>
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Pricing and Availability</ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>
                        Gobook facilitates bookings but does not control
                        availability, inventory, pricing, or service details
                        listed by Businesses.
                      </ScrollRevealText>
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Internet Handling & Processing Fees</ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>Bookings may include per-ticket internet handling fees and a non-refundable order processing fee.</ScrollRevealText>
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Order Confirmation</ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>
                        If you do not receive a confirmation (email or
                        confirmation page) after payment, or encounter an
                        interruption during checkout, it is your responsibility to
                        verify the booking through your account or
                      </ScrollRevealText>
                      <a
                        href="mailto:support@gobook.lk"
                        className="text-text-label underline mx-1 inline-block"
                      >
                        <ScrollRevealText>support@gobook.lk</ScrollRevealText>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Refunds and Exchanges
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>All booking details must be reviewed before completing payment.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Gobook cannot offer refunds or exchanges after a booking is confirmed.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Lost, stolen, damaged, or deleted tickets/confirmations cannot be replaced or refunded.</ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Cancellation Policy
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>Business-Initiated Cancellations</ScrollRevealText>
                  <ScrollRevealText className="web-body text-text-label mt-1">
                    If a Business cancels a booking or event, the customer is
                    entitled to a full refund of the booking amount.
                  </ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>The Business must bear any transaction or processing fees associated with the refund.</ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText>Gobook will facilitate refunds but does not assume liability for cancellations.</ScrollRevealText>
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Customer-Initiated Cancellations</ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>
                        Refunds for customer cancellations will follow the
                        Business's own cancellation policy, which must be clearly
                        stated at the time of booking.
                      </ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText>If no policy is provided, bookings are considered non-refundable.</ScrollRevealText>
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Force Majeure Events</ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>
                        In situations beyond reasonable control (e.g., natural
                        disasters, government actions, pandemics), neither GoBook
                        nor the Business is liable for non-performance.
                      </ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText>Refunds or credits may apply depending on the Business's policy.</ScrollRevealText>
                    </li>
                  </ul>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Transaction Fees</ScrollRevealText>
                  <ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
                    <li className="web-body text-text-label">
                      <ScrollRevealText>Third-party payment processor fees are generally non-refundable.</ScrollRevealText>
                    </li>
                    <li className="web-body text-text-label">
                      <ScrollRevealText>
                        For Business-initiated cancellations, the Business must
                        cover these fees to ensure customers receive the full
                        booking amount.
                      </ScrollRevealText>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Billing Information Verification
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>Some bookings may require additional verification of billing details.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Incorrect billing information may delay or prevent order processing.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    If Gobook cannot reach you during verification attempts, the
                    booking may be cancelled and released back to inventory.
                  </ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Delivery
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>Booking confirmations are delivered electronically via email.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Additional delivery options may be added in the future.</ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Cancelled or Postponed Events
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>
                    If a service or event is cancelled or postponed, the Business
                    is fully responsible for issuing refunds according to their
                    policy.
                  </ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Gobook will assist in facilitating the refund but is not liable for fulfilling the Business's obligations.</ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Data Use and Privacy
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>Personal information is handled according to our Privacy Policy.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Businesses must comply with data protection regulations.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Misuse of customer data may result in account suspension or termination.</ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Limitation of Liability
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>Gobook acts solely as a booking facilitator and does not provide services directly.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>We are not responsible for any loss, damage, or disputes related to services offered by Businesses.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Use of the platform is at your own risk.</ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Termination
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>We reserve the right to suspend or terminate Business accounts for violations of these Terms.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Termination does not absolve a Business from paying outstanding fees.</ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Changes to Terms
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>We may update these Terms periodically.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Material changes will be communicated via email or through the platform.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Continued use of the platform constitutes acceptance of revised Terms.</ScrollRevealText>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <ScrollRevealText className="web-callout text-text-label">
                Governing Law
              </ScrollRevealText>
              <ul className="flex list-disc flex-col gap-2 pl-5">
                <li className="web-body text-text-label">
                  <ScrollRevealText>These Terms are governed by the laws of the Democratic Socialist Republic of Sri Lanka.</ScrollRevealText>
                </li>
                <li className="web-body text-text-label">
                  <ScrollRevealText>Any disputes shall fall under the exclusive jurisdiction of the courts of Colombo, Sri Lanka.</ScrollRevealText>
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

