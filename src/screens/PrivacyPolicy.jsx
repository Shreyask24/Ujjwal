import React from 'react'
import Navbar from './Navbar'
import QuickLinks from './QuickLinks'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
    return (
        <section>

            <div>
                <Navbar />

                <div className='privacy-policy'>
                    <h3> Effective Date: 01/01/2025</h3>

                    <h3>Welcome to Ujjwal Engineers! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website and services.</h3>

                    <li>
                        <b>Information We Collect: </b>
                        We may collect the following types of information through our website:

                        Personal Information: Includes your name, email address, phone number, and any other details you provide when filling out our contact or hiring forms.
                        Automatically Collected Information: Technical information such as your IP address, browser type, operating system, and browsing behavior on our website (collected via cookies).

                    </li>

                    <li>
                        <b>How We Use Your Information: </b>
                        The data collected through our forms is used for the following purposes:

                        Hiring Purposes: To assess and contact candidates for potential job opportunities.
                        Marketing Purposes: To communicate updates, offers, and other promotional materials related to our services.
                        Improving Our Website: To analyze and enhance user experience.
                    </li>

                    <li>
                        <b>How We Share Your Information</b>
                        We do not sell, trade, or rent your personal information to third parties. However, we may share your data in the following circumstances:

                        Service Providers: With trusted third-party vendors who assist in operating our website or services.
                        Legal Requirements: If required by law or to protect our legal rights.
                    </li>

                    <li>
                        <b>Data Security: </b>
                        We implement appropriate security measures to protect your personal data from unauthorized access, alteration, or disclosure. However, no method of data transmission or storage is 100% secure, and we cannot guarantee absolute security.
                    </li>

                    <li>
                        <b>Your Rights: </b>

                        You have the following rights regarding your personal data:

                        Access and Correction: You can request access to the data we hold about you and request corrections if necessary.
                        Withdrawal of Consent: You can opt out of receiving marketing communications at any time by contacting us at the email provided below.
                    </li>

                    <li>
                        <b>Cookies: </b>
                        Our website uses cookies to improve your browsing experience. You can control your cookie preferences through your browser settings.
                    </li>

                    <li>
                        <b>Third-Party Links: </b>
                        Our website may contain links to external websites. We are not responsible for the privacy practices or content of these third-party sites.
                    </li>


                    <li>
                        <b>Changes to This Privacy Policy: </b>

                        We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date.
                    </li>
                    <li>
                        <b>Contact Us: </b>
                        If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us:

                        <Link style={{ color: "#006346", marginRight: "5px" }} to="mailto:info@ujjwalengineers.com">info@ujjwalengineers.com</Link>
                        <Link style={{ color: "#006346" }} to="whatsapp://send/?phone=+919867215033">+91 9867215033</Link>
                        Thank you for trusting Ujjwal Engineers with your information!
                    </li>




                </div>

                <QuickLinks />
            </div>
        </section>
    )
}

export default PrivacyPolicy