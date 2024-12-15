import React from 'react'
import { Link } from 'react-router-dom'

import UdyamBroucher from "../assets/Broucher.pdf"
import UdyamCertificate from "../assets/Udyam-Registration-Certificate.pdf"
import PolicyMarathi from "../assets/Quality-Policy-Marathi.pdf"
import PolicyEnglish from "../assets/Quality-Policy-English.pdf"

const QuickLinks = () => {
    return (
        <section>
            <div className='quick-links'>

                <div className='links-title'>
                    <h1>Quick Links</h1>
                </div>
                <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className='link-items'>

                    <div className='quick-links-section1'>
                        <ul className='company-name'>
                            <h1 >Ujjwal Engineers & Environmental Services</h1>
                            <h3>Environmental organization</h3>

                            <p>103, 14A, Kailash Nagar Rd,</p>
                            <p>Kailash Nagar, Shivaji Nagar Ambernath,</p>
                            <p>Maharashtra 421501</p>

                            <div className='address'>
                                <Link to="mailto:info@ujjwalengineers.com">info@ujjwalengineers.com</Link>
                                <Link to="whatsapp://send/?phone=+919867215033">+91 9867215033</Link>
                            </div>

                        </ul>
                    </div>



                    <div>
                        <ul>
                            <h1>Services</h1>
                            <li><Link to="/services" state={{ section: "life-cycle-assessment" }}>Life Cycle Assessment</Link></li>
                            <li><Link to="/services" state={{ section: "product-carbon-footprint" }}>Product Carbon Footprint</Link></li>
                            <li><Link to="/services" state={{ section: "greenhouse-gas-emission" }}>Greenhouse Gas Emission</Link></li>
                            <li><Link to="/services" state={{ section: "environmental-clearance" }}>Environmental Clearance</Link></li>
                            <li><Link to="/services" state={{ section: "consent-to-establish" }}>Consent to Establish</Link></li>
                            <li><Link to="/services" state={{ section: "environmental-audit" }}>Environmental Audit</Link></li>
                            <li><Link to="/services" state={{ section: "statutory-compliances" }}>Statutory Compliances</Link></li>
                            <li><Link to="/services" state={{ section: "environmental-monitoring-and-analysis" }}>Environmental Monitoring & Analysis</Link></li>
                            <li><Link to="/services" state={{ section: "epr" }}>Extended Producer Responsibility</Link></li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <h1>Safety Services</h1>
                            <li><Link to="/safety-services" state={{ section: "risk-assessment" }}>Risk Assessment</Link></li>
                            <li><Link to="/safety-services" state={{ section: "workshop-facilitation" }}>Workshop Facilitation</Link></li>
                            <li><Link to="/safety-services" state={{ section: "functional-safety-services" }}>Functional Safety Services</Link></li>
                            <li><Link to="/safety-services" state={{ section: "other-safety-workshop-services" }}>Other Safety Workshop Services</Link></li>
                            <li><Link to="/safety-services" state={{ section: "other-safety-desktop-studies" }}>Other Safety Desktop Studies</Link></li>
                            <li><Link to="/safety-services" state={{ section: "safety-audit" }}>Safety Audit</Link></li>
                            <li><Link to="/safety-services" state={{ section: "energy-audit" }}>Energy Audit</Link></li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <h1>Projects</h1>
                            <li>
                                <Link to="/projects" state={{ section: "etp" }}>Effluent Treatment Plant (ETP)</Link>

                            </li>
                            <li>
                                <Link to="/projects" state={{ section: "mee" }}>Multiple Effect Evaporator (MEE)</Link>

                            </li>
                            <li>
                                <Link to="/projects" state={{ section: "mvre" }}>Mechanical Vapor Recompression</Link>

                            </li>
                            <li>

                                <Link to="/projects" state={{ section: "atfd" }}>Agitated Thin Film Dryer (ATFD)</Link>
                            </li>
                            <li>
                                <Link to="/projects" state={{ section: "stp" }}>Sewage Treatment Plant (STP)</Link>

                            </li>
                            <li>
                                <Link to="/projects" state={{ section: "ro" }}>Reverse Osmosis Plant (RO)</Link>
                            </li>


                        </ul>
                    </div>

                    <div>
                        <ul>
                            <h1>Policy</h1>
                            <li><Link to={UdyamBroucher} target='_blank' >Broucher</Link></li>
                            <li><Link to={UdyamCertificate} target='_blank' >Udyam Registration Certificate</Link></li>
                            <li><Link to={PolicyEnglish} target='_blank'>Quality Policy - English</Link></li>
                            <li><Link to={PolicyMarathi} target='_blank'>Quality Policy - Marathi</Link></li>

                        </ul>
                    </div>


                </div>
                <hr />
                <footer >
                    <h1><span> UJJWAL ENGINEERS & ENVIRONMENTAL SERVICES</span> | All Rights Are Reserved |
                        Developed and Managed by <Link to="https://kshreyas.netlify.app/" target='_blank'><span>Shreyas Kallurkar</span></Link></h1>
                </footer>
            </div>
        </section>
    )
}

export default QuickLinks