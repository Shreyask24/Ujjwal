import React from 'react'
import { Link } from 'react-router-dom'

import Leadership from "../assets/Leadership.png"
import IntroVideo from "../assets/intro.mp4"

import "../index.css"
import Navbar from './Navbar';
import QuickLinks from './QuickLinks'
import { Box, Paper } from '@mui/material'
import LCA from "../assets/LCA.png"
import EnvironmentalMonitoring from "../assets/Environmental-Monitoring.png"
import Statutory from "../assets/Statutory-Compliances.png"

import Consequence from "../assets/Consequence.png"
import Workshop2 from "../assets/Workshop-2.jpg"
import SA from "../assets/Safety-Audit.png"
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"
import logo7 from "../assets/logo7.png"
import logo8 from "../assets/logo8.png"
import logo9 from "../assets/logo9.png"
import logo10 from "../assets/logo10.png"
import logo11 from "../assets/logo11.png"
import logo12 from "../assets/logo12.png"
import logo13 from "../assets/logo13.png"
import logo14 from "../assets/logo14.png"
import logo15 from "../assets/logo15.png"
import logo16 from "../assets/logo16.png"
import logo17 from "../assets/logo17.png"
import logo18 from "../assets/logo18.png"
import logo19 from "../assets/logo19.png"
import logo20 from "../assets/logo20.png"
import logo21 from "../assets/logo21.png"
import logo22 from "../assets/logo22.png"




const Home = () => {


    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    return (
        <section>
            <div>
                <Navbar />

                <div className='top-txt'>
                    News & Updates:<marquee className="home-marquee" direction="left" loop="">
                        As per MOEF & CC’s (Govt. of India) Office Memorandum F. No. 22-34/2018-IA.III dated 9th August 2018 Self-Environmental Audit shall be conducted annually. Every three years third party environmental Audit shall be carried out.</marquee>
                </div>
                <div>


                    <div className='home-content'>

                        <video className='introVideo' loop muted autoPlay>

                            <source loading="lazy" src={IntroVideo} type='video/mp4' alt="Ujjwal Engineers and Environmental Services (UEES) main video" />
                        </video>

                    </div>

                </div>

                <div className='about' >

                    <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className='about-title'>
                        <h1>About Company</h1>
                    </div>

                    <div className='about-body'>
                        <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" id='leadership-img' src={Leadership} alt="leadership" />
                        <p data-aos="fade-left" data-aos-once='true' data-aos-duration="2000" className='about-para'> Ujjwal Engineers and Environmental Services (UEES) is a comprehensive environmental consulting
                            and services, providing sustainability consulting and green solutions. We conduct environmental
                            impact assessments, offer environmental management and compliance services, and specialize in
                            environmental planning. Our services include eco-friendly consulting and innovative environmental
                            solutions, all aimed at promoting sustainability and effective environmental practices. <Link to="/about"> <span> More</span></Link></p>
                    </div>

                    <Link to="/contact"><button data-aos="fade-left" data-aos-once='true' data-aos-duration="2000" className='about-btn'> Contact Us</button></Link>


                </div>

                <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className='about-title'>
                    <h1>Our Services</h1>
                </div>

                <div className='env'>

                    <div className='environment-home'>

                        <div className='home-lca'>
                            <h1>Life Cycle Assessment</h1>
                            <img style={{ width: "400px", height: "300px" }} src={LCA} alt="" />

                            <p>
                                At UEES, we specialize in Life Cycle Assessment (LCA) to quantify sustainability and environmental impact. Our systematic analysis covers the entire life cycle of products, materials, and processes, helping industries make data-driven decisions for sustainable development.


                            </p>



                            <button className='env-btn'>
                                <Link to="/services" state={{ section: "life-cycle-assessment" }} style={{ fontSize: "17px", textDecoration: "none", color: "#006346" }}>Know More</Link>
                            </button>
                        </div>

                    </div>



                    <div className='environment-home'>


                        <div className='home-lca'>
                            <h1>Environmental Monitoring</h1>

                            <img src={EnvironmentalMonitoring} alt="" />


                            <p>
                                We provide comprehensive environmental monitoring services, including Ambient Air Quality Analysis, Stack Emissions Testing, Wastewater & Drinking Water Analysis, and Noise Level Monitoring. Our expertise ensures environmental safety across industries.


                            </p>

                            <button className='env-btn'><Link to="/services" state={{ section: "environmental-monitoring-and-analysis" }} style={{ fontSize: "17px", textDecoration: "none", color: "#006346" }}>Know More</Link></button>
                        </div>

                    </div>


                    <div className='environment-home'>

                        <div className='home-lca'>
                            <h1>Environmental Compilances</h1>

                            <img src={Statutory} alt="" />
                            <p>
                                Our expert team assists in Environment Self-Audit Report Preparation, as per PCB format, ensuring smooth submission. We conduct Environmental & Social Due Diligence, compliance audits, and help businesses meet SPCB & CPCB norms for sustainable operations.

                            </p>

                            <button className='env-btn'><Link to="/services" state={{ section: "statutory-compliances" }} style={{ fontSize: "17px", textDecoration: "none", color: "#006346" }}>Know More</Link></button>
                        </div>

                    </div>


                </div>


                <div className='env'>

                    <div className='environment-home'>

                        <div className='home-lca'>
                            <h1>Risk Assessment</h1>

                            <img src={Consequence} alt="" />

                            <p>At UEES, we offer Risk Assessment services across India, ensuring industrial safety & regulatory compliance. From Mumbai & Gujarat to Chennai, Pune & Hyderabad, our experts identify hazards, evaluate risks, and implement tailored safety solutions for seamless operations.
                            </p>
                            <button className='env-btn'><Link to="/safety-services" state={{ section: "risk-assessment" }} style={{ fontSize: "17px", textDecoration: "none", color: "#006346" }}>Know More</Link></button>
                        </div>

                    </div>


                    <div className='environment-home'>

                        <div className='home-lca'>
                            <h1>Workshop Facilation</h1>

                            <img src={Workshop2} alt="" />
                            <p>We conduct specialized safety workshops to integrate HSE compliance into every project phase. Serving petrochemical hubs in Gujarat & manufacturing plants in Pune, Chennai & Hyderabad, we help businesses identify risks early, prevent delays, and maintain a safe work environment.
                            </p>
                            <button className='env-btn'><Link to="/safety-services" state={{ section: "workshop-facilitation" }} style={{ fontSize: "17px", textDecoration: "none", color: "#006346" }}>Know More</Link></button>
                        </div>

                    </div>


                    <div className='environment-home'>

                        <div className='home-lca'>
                            <h1>Safety Audit</h1>

                            <img src={SA} alt="" />

                            <p>
                                At UEES, we conduct in-depth Safety Audits to ensure compliance with OSHA, ISO 45001 & local regulations. We assess process hazards, training effectiveness, and provide detailed reports with actionable insights, helping businesses maintain a safe and compliant workplace.
                            </p>
                            <button className='env-btn'><Link to="/safety-services" state={{ section: "safety-audit" }} style={{ fontSize: "17px", textDecoration: "none", color: "#006346" }}>Know More</Link></button>
                        </div>

                    </div>

                </div>

                <div className="gallery-marquee-home">
                    <div className='marquee-heading-home'>
                        <h1>Empowering Success Through Collaboration and Service Excellence.</h1>
                    </div>



                    <div className='marquee-section-home'>


                        <marquee behavior="scroll" direction="left"
                            scrollamount="6" loop="infinite">

                            <img src={logo16} alt="anthea group" />
                            <img src={logo17} alt="future bridge" />
                            <img src={logo18} alt="bhor" />
                            <img src={logo21} alt="drt anthea aroma chemicals" />


                            <img src={logo6} alt="excel" />

                            <img src={logo8} alt="ravika organic pvt. ltd." />

                            <img src={logo12} alt="lupin" />
                            <img src={logo13} alt="arvind fashioning possibilities" />
                            <img src={logo1} alt="bec chemicals" />

                            <img src={logo3} alt="hikal" />
                            <img src={logo4} alt="spectrum ethers pvt. ltd." />
                            <img src={logo5} alt="innovassynth" />

                            <img src={logo7} alt="deepak" />
                            <img src={logo9} alt="orange city steel industries pvt. ltd." />
                            <img src={logo11} alt="ipca" />

                            <img src={logo14} alt="p&g" />
                            <img src={logo15} alt="upl" />
                            <img src={logo2} alt="Aarti Drugs Ltd." />

                            <img src={logo10} alt="ashu organics" />

                            <img src={logo19} alt="go green mechanisms pvt ltd" />
                            <img src={logo20} alt="mahabal enviro engineers pvt ltd" />

                            <img src={logo22} alt="hse" />


                        </marquee>

                    </div>
                </div>

                <QuickLinks />


            </div>
        </section>
    )
}

export default Home