import * as React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/Dialog";
import { Button } from "../ui/Button";

export default function PrivacyPolicyModal({ children }: { children?: React.ReactNode }) {
    const today = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })

    return (
        <Dialog>
          <DialogTrigger asChild>
            {children ? children : (
              <Button
                hierarchy="linkOnColor"
              >
                Privacy
              </Button>
            )}
          </DialogTrigger>
          <DialogContent title="Privacy Policy">
            <div className="flex flex-col gap-6">
              <DialogTitle />
              <div className="flex flex-col gap-[10px] web-callout">
                      <DialogDescription>
                        <div className="flex flex-col gap-4">
                          <div>{`Effective Date: ${today}`}</div>
                          <div>
                            Gobook (“we,” “us,” or “our”) values your privacy and is committed to protecting the personal data of all users (“you”) who access our platform, 
                            including <b>Businesses</b> offering services and <b>Customers</b> booking services. This Privacy Policy explains how we collect, use, store, and share your 
                            information, and your rights regarding that data. By using our platform, you agree to the practices described herein.
                          </div>

                          <div>
                            <strong>1. Information We Collect</strong>
                            <ul className="mt-2">
                              <li className="m-2">
                                We collect personal and non-personal information necessary to provide our platform services, including:
                                <ul className="list-disc pl-5 mt-2">
                                  <li>
                                    <strong>Personal Information:</strong> Name, email, phone number, billing address, and other details provided when creating an account or making a booking.
                                  </li>
                                  <li>
                                    <strong>Booking/Service Information:</strong>Details of services booked or offered, dates, times, and notes shared between Tenants and Customers.
                                  </li>
                                  <li>
                                    <strong>Payment Information:</strong>Processed via secure third-party payment providers; full payment credentials are not stored by us.
                                  </li>
                                  <li>
                                    <strong>Usage Data:</strong>IP address, device, browser type, and activity patterns collected via cookies or similar technologies for analytics and improving our platform.
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>2. How We Use Your Information</strong>
                            <ul className="mt-2">
                              <li className="m-2">
                                We use your information to:
                                <ul className="list-disc pl-5 mt-2">
                                  <li>
                                    Process bookings and manage services.
                                  </li>
                                  <li>
                                    Communicate confirmations, updates, and notifications.
                                  </li>
                                  <li>
                                    Provide customer and tenant support.
                                  </li>
                                  <li>
                                    Personalize and improve the platform experience.
                                  </li>
                                  <li>
                                    Comply with legal obligations.
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>3. Data Access and Sharing</strong>
                            <ul className="list-disc pl-5 mt-2">
                              <li>
                                Tenants may access Customer information <b>only for service delivery purposes</b>. Misuse of data is prohibited.
                              </li>
                              <li>
                                We may share necessary information with third-party service providers (e.g., payment processors) <b>only to facilitate platform operations</b>.                          
                              </li>
                              <li>
                                We do not sell, trade, or share personal information for unrelated commercial purposes.                          
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>4. Data Security and Storage</strong>
                            <ul className="list-disc pl-5 mt-2">
                              <li>
                                Reasonable technical, administrative, and physical measures are implemented to protect data.
                              </li>
                              <li>
                                Data is stored on secure servers or trusted third-party cloud providers.
                              </li>
                              <li>
                                No system is completely secure; use of our platform is at your own risk.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>5. Retention of Data</strong>
                            <ul className="list-disc pl-5 mt-2">
                              <li>
                                Personal information is retained while accounts are active or as needed for service delivery.
                              </li>
                              <li>
                                Booking and transaction data may be retained for legal compliance, reporting, or operational purposes.
                              </li>
                              <li>
                                Users may request deletion of personal data, subject to legal and contractual obligations.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>6. Cookies and Tracking</strong>
                            <ul className="list-disc pl-5 mt-2">
                              <li>
                                Cookies and similar technologies are used to monitor usage, maintain sessions, and personalize content.
                              </li>
                              <li>
                                Users can manage or disable cookies via browser settings, but some features may not function correctly without them.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>7. Your Rights</strong>
                            <ul className="mt-2">
                              <li className="m-2">
                                Depending on your jurisdiction, you may have rights to:
                                <ul className="list-disc pl-5 mt-2">
                                  <li>
                                    Access and obtain a copy of your personal data.
                                  </li>
                                  <li>
                                    Correct or delete your personal data.
                                  </li>
                                  <li>
                                    CObject to or restrict processing of your personal data.
                                  </li>
                                  <li>
                                    Withdraw consent for marketing communications.
                                  </li>
                                </ul>
                              </li>
                              <li>
                                Contact us at [Insert Contact Email] to exercise your rights.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>8. Children’s Privacy</strong>
                            <ul className="list-disc pl-5 mt-2">
                              <li>
                                Our platform is not intended for children under 16.
                              </li>
                              <li>
                                We do not knowingly collect personal information from minors.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>9. 9. Changes to this Privacy Policy</strong>
                            <ul className="mt-2">
                              <li className="m-2">
                                We may update this Privacy Policy periodically. Material changes will be communicated via the platform or email. Continued use of the platform constitutes acceptance of the updated policy.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <strong>10. Contact Us</strong>
                            <ul className="mt-2">
                              <li className="m-2">
                                For questions or concerns regarding this Privacy Policy or your personal data:
                                <br/>
                                <b>Gobook</b>
                                <br/>
                                Email: <a href="mailto:support@gobook.lk" className="underline text-[rgba(255,255,255,0.9)]">support@gobook.lk</a>
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