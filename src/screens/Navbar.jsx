import React, { useRef, useState } from 'react'

import UEESLogo from "../assets/UEES-Logo.png"
import { Link, useNavigate } from 'react-router-dom'

import { Instagram, Youtube, ChevronDown, Facebook, Twitter, X, Menu } from 'lucide-react';


const Navbar = () => {
    const navigate = useNavigate();

    const navItems = useRef();

    const [toggle, setToggle] = useState(true)

    const handleMenu = () => {
        setToggle(!toggle)
        navItems.current.classList.toggle("navbar-items")

    }



    return (
        <div >
            <nav className='navbar'>

                <div className='logo-txt'>
                    <img onClick={() => navigate("/")} src={UEESLogo} alt="company-logo" id='company-logo' />
                    <h1 onClick={() => navigate("/")} className='logo-txt'>Ujjwal Engineers & Environmental Services</h1>
                </div>
                <div>

                    {
                        toggle ?
                            <Menu size={40} className='menu-bar' onClick={handleMenu} /> :

                            <X size={40} className='menu-bar' onClick={handleMenu} />
                    }
                </div>


                <div className='navbar-items' ref={navItems}>
                    <ul>


                        <li ><Link to="/">Home</Link></li>
                        <li ><Link to="/about">About</Link></li>


                        <li className="services-dropdown">
                            <Link>Services</Link>
                            <button className="dropbtn">
                                <ChevronDown size={16} strokeWidth={5} />
                            </button>
                            <ul className="submenu">
                                <li className="ec-dropdown">
                                    <a href="#" style={{ fontSize: "18px" }}>Environmental Consultancy</a>
                                    <ul className="ec-menu">
                                        <li><Link to="/services" state={{ section: "life-cycle-assessment" }} style={{ fontSize: "17px" }}>Life Cycle Assessment</Link></li>
                                        <li><Link to="/services" state={{ section: "product-carbon-footprint" }} style={{ fontSize: "17px" }}>Product Carbon Footprint</Link></li>
                                        <li><Link to="/services" state={{ section: "greenhouse-gas-emission" }} style={{ fontSize: "17px" }}>Greenhouse Gas Emission</Link></li>
                                        <li><Link to="/services" state={{ section: "environmental-clearance" }} style={{ fontSize: "17px" }}>Environmental Clearance (EC/EIA)</Link></li>
                                        <li><Link to="/services" state={{ section: "consent-to-establish" }} style={{ fontSize: "17px" }}>Consent to Establish / Consent to Operate</Link></li>
                                        <li><Link to="/services" state={{ section: "environmental-audit" }} style={{ fontSize: "17px" }}>Environmental Audit</Link></li>
                                        <li><Link to="/services" state={{ section: "statutory-compliances" }} style={{ fontSize: "17px" }}>Statutory Compliances</Link></li>
                                        <li><Link to="/services" state={{ section: "environmental-monitoring-and-analysis" }} style={{ fontSize: "17px" }}>Environmental Monitoring and Analysis</Link></li>
                                        <li><Link to="/services" state={{ section: "epr" }} style={{ fontSize: "17px" }}>Extended Producer Responsibility (EPR)</Link></li>
                                    </ul>
                                </li>
                                <li className="ss-dropdown">
                                    <a href="#" style={{ fontSize: "18px" }}>Safety Services Consultancy</a>
                                    <ul className="ss-menu">
                                        <li><Link to="/safety-services" style={{ fontSize: "17px" }}>Risk Assessment</Link></li>
                                        <li><Link to="/safety-services" style={{ fontSize: "17px" }}>Workshop Facilitation</Link></li>
                                        <li><Link to="/safety-services" style={{ fontSize: "17px" }}>Functional Safety Services</Link></li>
                                        <li><Link to="/safety-services" style={{ fontSize: "17px" }}>Other Safety Workshop Services</Link></li>
                                        <li><Link to="/safety-services" style={{ fontSize: "17px" }}>Other Safety Desktop Studies</Link></li>
                                        <li><Link to="/safety-services" style={{ fontSize: "17px" }}>Safety Audit</Link></li>
                                        <li><Link to="/safety-services" style={{ fontSize: "17px" }}>Energy Audit</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>





                        <div className="dropdown">
                            <a className='nav-anchor' href=""> Projects</a>
                            <button className="dropbtn"><ChevronDown size={16} strokeWidth={5} /></button>
                            <div className="dropdown-content">
                                <Link to="/projects" state={{ section: "etp" }}>Effluent Treatment Plant (ETP)</Link>
                                <Link to="/projects" state={{ section: "mee" }}>Multiple Effect Evaporator (MEE)</Link>
                                <Link to="/projects" state={{ section: "mvre" }}>Mechanical Vapor Recompression (MVRE)</Link>
                                <Link to="/projects" state={{ section: "atfd" }}>Agitated Thin Film Dryer (ATFD)</Link>
                                <Link to="/projects" state={{ section: "stp" }}>Sewage Treatment Plant (STP)</Link>
                            </div>
                        </div>
                        <li><Link to="/career">Career</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>

                </div>
                <div className='enquiry-container'>
                    <div className='social-icons'>

                        <Link to="https://www.instagram.com/ujjwal_engineers?igsh=MXJiZGtwZ2U5cm1kMQ==" target='_blank'>  <Instagram size="26px" strokeWidth={2} />
                        </Link>
                        <Link to="https://www.facebook.com/profile.php?id=61557895696282&mibextid=ZbWKwL" target='_blank'>
                            <Facebook strokeWidth={1.5} size="28px" />
                        </Link>
                        <Link to="https://youtube.com/@UjjwalEngineers?si=gJkfA1zAApnptO12" target='_blank'>
                            <Youtube strokeWidth={1.5} size="35px" />
                        </Link>
                        <Link to="https://x.com/Ujjwalengineers?t=alqC_Eq-jefHB5VW74EeLA&s=08" target='_blank'>
                            <Twitter strokeWidth={1.5} size="30px" />
                        </Link>
                    </div>

                </div>
                <Link to="/contact"><button className='bn3637 bn38'>Make An Enquiry</button></Link>




            </nav >

        </ div >
    )
}

export default Navbar