import React, { useEffect } from 'react'
import Navbar from './Navbar'
import QuickLinks from './QuickLinks'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);

    return (
        <section>
            <div>
                <Navbar />

                <div className='privacy-policy'>

                    <h2>Web Site Terms and Conditions of Use and Privacy Policy
                    </h2>

                    <h3>
                        By accessing the website of Ujjwal Engineers & Environmental Services, you agree to the following terms and conditions, as well as the privacy practices outlined below. These terms are governed by applicable laws and regulations. If you disagree with any of these terms, you are prohibited from using this website.
                    </h3>

                    <li>
                        <b>Terms of Use and License: </b>
                        Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial use only. This limited license does not transfer ownership and prohibits:

                        <li>Modifying, copying, or mirroring materials.</li>
                        <li>Modifying, copying, or mirroring materials.</li>
                        <li>Using materials for commercial or public purposes.</li>
                        <li>Attempting to reverse-engineer any software.</li>
                        <li>Removing copyright or proprietary notices.</li>
                        <li>This license may be terminated if these terms are violated, requiring the destruction of any downloaded materials.</li>


                    </li>

                    <li>
                        <b>Disclaimer and Limitations of Liability: </b>
                        All materials on the website are provided "as is" without warranties of any kind, including implied warranties of merchantability or fitness for a particular purpose. Ujjwal Engineers & Environmental Services is not liable for any damages (e.g., loss of data, business interruption) resulting from the use of the website, even if informed of potential damages.

                    </li>

                    <li>
                        <b>Accuracy and Amendments:</b>
                        The website’s materials may contain inaccuracies or errors. Ujjwal Engineers & Environmental Services reserves the right to update content without notice but does not guarantee accuracy or completeness.

                    </li>

                    <li>
                        <b>External Links: </b>
                        Third-party links on this website are provided for convenience. Ujjwal Engineers & Environmental Services does not endorse or take responsibility for the content or privacy practices of linked websites.

                    </li>

                    <li>
                        <b>Modifications to Terms: </b>
                        These terms may be revised at any time without notice. By using the website, you agree to the current version of the terms.

                    </li>

                    <li>
                        <b>Governing Law: </b>
                        These terms and any related claims are governed by the laws of India.

                    </li>

                    <li>
                        <b>Privacy Policy: </b>
                        Your privacy is important to us. We collect and use personal information as outlined below:

                    </li>


                    <li>
                        <b>Information We Collect: </b>

                        <li>Personal Information: Provided via forms, such as your name, email, and phone number.</li>
                        <li>Automatically Collected Information: Technical data (e.g., IP address, browser type) collected via cookies.</li>
                        <li>Respond to inquiries and facilitate recruitment. </li>
                        <li>Communicate updates, offers, and services. </li>
                        <li>Improve website functionality and user experience. </li>
                        <li><b>Sharing and Security of Data:</b> Data is shared only with trusted service providers or as required by law. We employ security measures to protect your data, though absolute security cannot be guaranteed. </li>

                    </li>
                    <li>
                        <b>Contact Us: </b>
                        If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us:

                        <Link style={{ color: "#006346", marginRight: "5px" }} to="mailto:info@ujjwalengineers.com">info@ujjwalengineers.com</Link>
                        <Link style={{ color: "#006346" }} to="whatsapp://send/?phone=+919867215033">+91 9867215033</Link>
                        By using this website, you consent to these terms and privacy practices.
                    </li>




                </div>

                <QuickLinks />
            </div>
        </section>
    )
}

export default PrivacyPolicy