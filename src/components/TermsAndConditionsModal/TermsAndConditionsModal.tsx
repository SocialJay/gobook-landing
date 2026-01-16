import * as React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/Dialog";
import { Button } from "../ui/Button";

export default function TermsAndConditionsModal({ children }: { children?: React.ReactNode }) {
    const today = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })

    return (
        <Dialog>
          <DialogTrigger asChild>
            {children ? children : (
              <Button
                hierarchy="linkOnColor"
              >
                Terms
              </Button>
            )}
          </DialogTrigger>
          <DialogContent title="Terms and Conditions">
            <div className="flex flex-col gap-6">
              <DialogTitle />
              <div className="flex flex-col gap-[10px] web-callout">
                      <DialogDescription>
                        <div className="flex flex-col gap-4">
                          <div>{`Effective Date: ${today}`}</div>
                          <div>
                            By using <b>Gobook</b> (“we,” “us,” or “our”), you (“Business”) agree to the following Terms & Conditions. If you do not agree with any section of these Terms, please discontinue use of our platform and services.
                          </div>

                          <div>
                            <strong>1. Use of the Platform</strong>
                            <ul className="list-disc pl-5 mt-2">
                              <li>
                                Our platform enables Businesses to offer and manage services available for booking.
                              </li>
                              <li>
                                All activity on the platform must comply with applicable laws and these Terms.                              
                              </li>
                              <li>
                                Businesses must provide accurate, up-to-date, and complete information when registering and managing their services.                              
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>2. Business Terms</strong>
                            <ul className="mt-2">
                              <li className="m-2">
                                <strong >Payments to Businesses</strong>
                                <ul>
                                  <li className="mb-1">
                                    Businesses receive revenue generated from bookings <b>minus the platform service fee</b>, deposited into their billing account.
                                  </li>
                                </ul>
                              </li>
                              <li className="m-2">
                                <strong>Setup Costs</strong>
                                <ul>
                                  <li className="mb-1">
                                   We do not charge any setup fees to Businesses.
                                  </li>
                                </ul>
                              </li>
                              <li className="m-2">
                                <strong>Service Fulfilment</strong>
                                <ul>
                                  <li className="mb-1">
                                   Businesses are fully responsible for fulfilling bookings and delivering the services they list on the platform.
                                  </li>
                                </ul>
                              </li>
                              <li className="m-2">
                                <strong>Customer Data Access</strong>
                                <ul>
                                  <li className="mb-1">
                                    Businesses may access customer data <b>only</b> for internal use related to service delivery. Any misuse, sharing, or unauthorized processing of customer data is strictly prohibited.
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>3. Fees and Billing</strong>
                            <ul className="list-disc pl-5 mt-2">
                              <li>
                                Platform service fees are automatically deducted from each transaction.
                              </li>
                              <li>
                                Businesses’ net earnings (after fee deductions) are credited to their billing account.                              
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>4. Purchase Policy</strong>
                            <ul className="mt-2">
                              <li className="m-2">
                                <strong>Accepted Payment Methods</strong>
                                <ul>
                                  <li className="mb-1">
                                   Gobook accepts Visa, MasterCard, American Express, select Debit Cards, and Net Banking. Additional methods may be introduced periodically.                             
                                  </li>
                                </ul>
                              </li>
                              <li className="m-2">
                                <strong>Who You Are Buying From</strong>
                                <ul>
                                  <li className="mb-1">
                                    Gobook acts as an agent on behalf of service providers (“Businesses”).
                                  </li>
                                  <li className="mb-1">
                                    All bookings and payments are processed by Gobook on behalf of the Business.
                                  </li>
                                </ul>
                              </li>
                              <li className="m-2">
                                <strong>Pricing and Availability</strong>
                                <ul>
                                  <li className="mb-1">
                                    Gobook facilitates bookings but does not control availability, inventory, pricing, or service details listed by Businesses.
                                  </li>
                                </ul>
                              </li>
                              <li className="m-2">
                                <strong>Internet Handling & Processing Fees</strong>
                                <ul>
                                  <li className="mb-1">
                                    Bookings may include per-ticket internet handling fees and a non-refundable order processing fee.
                                  </li>
                                </ul>
                              </li>
                              <li className="m-2">
                                <strong>Order Confirmation</strong>
                                <ul>
                                  <li className="mb-1">
                                    If you do not receive a confirmation (email or confirmation page) after payment, or encounter an interruption during checkout, it is your responsibility to verify the booking through your account or <a href="mailto:support@gobook.lk" className="underline text-[rgba(255,255,255,0.9)]">support@gobook.lk</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>5. Refunds and Exchanges</strong>
                            <ul className="list-disc pl-5 mt-2">
                              <li>
                                All booking details must be reviewed <b>before completing payment.</b>
                              </li>
                              <li>
                                Gobook cannot offer refunds or exchanges after a booking is confirmed.                              
                              </li>
                              <li>
                                Lost, stolen, damaged, or deleted tickets/confirmations cannot be replaced or refunded.
                             </li>
                            </ul>
                          </div>

                          <div>
                            <strong>6. Cancellation Policy</strong>
                            <ul className="mt-2">
                              <li className="m-2">
                                <strong>Business-Initiated Cancellations</strong><br/>
                                If a Business cancels a booking or event, the customer is entitled to a <b>full refund of the booking amount.</b> 
                                <ul className="list-disc pl-5 mt-2">
                                  <li>
                                    The Business must bear any transaction or processing fees associated with the refund.
                                  </li>
                                  <li>
                                    Gobook will facilitate refunds but does not assume liability for cancellations.
                                  </li>
                                </ul>                             
                              </li>
                              <li className="m-2">
                                <strong>Customer-Initiated Cancellations</strong>
                                <ul>
                                  <li className="mb-1">
                                    Refunds for customer cancellations will follow the <b>Business’s own cancellation policy</b>, which must be clearly stated at the time of booking.
                                  </li>
                                  <li className="mb-1">
                                    If no policy is provided, bookings are considered <b>non-refundable.</b>
                                  </li>
                                </ul>
                              </li>
                              <li className="m-2">
                                <strong>Force Majeure Events</strong>
                                <ul>
                                  <li className="mb-1">
                                    In situations beyond reasonable control (e.g., natural disasters, government actions, pandemics), neither GoBook nor the Business is liable for non-performance.
                                  </li>
                                  <li className="mb-1">
                                    Refunds or credits may apply depending on the Business’s policy.
                                  </li>
                                </ul>
                              </li>
                              <li className="m-2">
                                <strong>Transaction Fees</strong>
                                <ul>
                                  <li className="mb-1">
                                    Third-party payment processor fees are generally <b>non-refundable</b> 
                                  </li>
                                  <li className="mb-1">
                                    For Business-initiated cancellations, the Business must cover these fees to ensure customers receive the full booking amount.
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>7. Billing Information Verification</strong>
                            <ul className="ml-2">
                              <li className="mb-1">
                                Some bookings may require additional verification of billing details.
                              </li>
                              <li className="mb-1">
                                Incorrect billing information may delay or prevent order processing.
                              </li>
                              <li className="mb-1">
                                If Gobook cannot reach you during verification attempts, the booking may be cancelled and released back to inventory.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>8. Delivery</strong>
                            <ul className="ml-2">
                              <li className="mb-1">
                                Booking confirmations are delivered electronically via <b>email</b>.
                              </li>
                              <li className="mb-1">
                                Additional delivery options may be added in the future.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>9. Cancelled or Postponed Events</strong>
                            <ul className="ml-2">
                              <li className="mb-1">
                                If a service or event is cancelled or postponed, the <b>Business</b> is fully responsible for issuing refunds according to their policy.
                              </li>
                              <li className="mb-1">
                                Gobook will assist in facilitating the refund but is not liable for fulfilling the Business’s obligations.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>10. Data Use and Privacy</strong>
                            <ul className="list-disc pl-5 mt-2">
                              <li>
                                Personal information is handled according to our Privacy Policy.
                              </li>
                              <li>
                                Businesses must comply with data protection regulations.                              
                              </li>
                              <li>
                                Misuse of customer data may result in account suspension or termination.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>11. Limitation of Liability</strong>
                            <ul className="list-disc pl-5 mt-2">
                              <li>
                                Gobook acts solely as a booking facilitator and does not provide services directly.
                              </li>
                              <li>
                                We are not responsible for any loss, damage, or disputes related to services offered by Businesses.                              
                              </li>
                              <li>
                                Use of the platform is at your own risk.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>12. Termination</strong>
                            <ul className="ml-2">
                              <li className="mb-1">
                                We reserve the right to suspend or terminate Business accounts for violations of these Terms.
                              </li>
                              <li className="mb-1">
                                Termination does not absolve a Business from paying outstanding fees.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>13. Changes to Terms</strong>
                            <ul className="ml-2">
                              <li className="mb-1">
                                We may update these Terms periodically.
                              </li>
                              <li className="mb-1">
                                Material changes will be communicated via email or through the platform.
                              </li>
                              <li className="mb-1">
                                 Continued use of the platform constitutes acceptance of revised Terms.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>14. Governing Law</strong>
                            <ul className="ml-2">
                              <li className="mb-1">
                                These Terms are governed by the laws of the <b>Democratic Socialist Republic of Sri Lanka.</b>
                              </li>
                              <li className="mb-1">
                                 Any disputes shall fall under the exclusive jurisdiction of the <b>courts of Colombo, Sri Lanka.</b>
                              </li>
                            </ul>
                          </div>

                        </div>
                      </DialogDescription>
              </div>
              
            </div>
          </DialogContent>    
        </Dialog>
    )
}