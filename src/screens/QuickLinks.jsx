import React from 'react'
import { Link } from 'react-router-dom'

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

                    <div>
                        <ul className='company-name'>
                            <h1 >Ujjwal Engineers & Environmental Services</h1>
                            <h3>Environmental organization</h3>
                            <p>
                                103, 14A, Kailash Nagar Rd, Kailash Nagar, Shivaji Nagar, Ambernath, Maharashtra 421501
                            </p>

                            <div className='address'>

                                <Link to="mailto:info@ujjwalengineers.com">info@ujjwalengineers.com</Link>
                                <Link to="whatsapp://send/?phone=+919867215033">+91 9867215033</Link>
                            </div>

                        </ul>
                    </div>



                    <div>
                        <ul>
                            <h1>Services</h1>
                            <li><Link to="/services">Life Cycle Assessment</Link></li>
                            <li><Link to="/services">Product Carbon Footprint</Link></li>
                            <li><Link to="/services">Greenhouse Gas Emission</Link></li>
                            <li><Link to="/services">Extended producer responsibility</Link></li>
                            <li><Link to="/services">Environmental Clearance [EC] </Link></li>
                            <li><Link to="/services">Environmental Impact Assessment (EIA)</Link></li>
                            <li><Link to="/services">Consent to Establish / Consent to Operate</Link></li>
                            <li><Link to="/services">Environment Audit</Link></li>
                            <li><Link to="/services">Environmental Monitoring and Analysis</Link></li>
                            <li><Link to="/services">Statutory Compliances</Link></li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <h1>Safety Services</h1>
                            <li><Link to="/safety-services">Risk Assessment</Link></li>
                            <li><Link to="/safety-services">Workshop Facilation</Link></li>
                            <li><Link to="/safety-services">Functional Safety Services</Link></li>
                            <li><Link to="/safety-services">Other Safety Workshop Services</Link></li>
                            <li><Link to="/safety-services">Other Safety Desktop Studies</Link></li>
                            <li><Link to="/safety-services">Safety Audit</Link></li>
                            <li><Link to="/safety-services">Energy Audit</Link></li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <h1>Projects</h1>
                            <li><Link to="/projects">Effluent Treatment Plant (ETP)</Link></li>
                            <li><Link to="/projects">Sewage Treatment Plant (STP)</Link></li>
                            <li><Link to="/projects">Multiple Effect Evaporator (MEE)</Link></li>
                            <li><Link to="/projects">Mechanical Vapor Recompression (MVRE)</Link></li>
                            <li><Link to="/projects">Agitated Thin Film Dryer (ATFD)</Link></li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <h1>Policy</h1>
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