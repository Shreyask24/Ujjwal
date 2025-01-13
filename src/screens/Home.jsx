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

                <div className='env'>


                    <div className='environment-home'>

                        <div className='home-lca'>
                            <h1>Life Cycle Assessment</h1>
                            <img style={{ width: "400px", height: "300px" }} src={LCA} alt="" />

                            <p>
                                One of the most common methodologies for quantifying sustainability is life cycle assessment (LCA). An LCA is a systematic analysis of environmental impact over the course of the entire life cycle of a product, material, process, or other measurable activity.
                            </p>



                            <button className='env-btn'>
                                <Link to="/services" state={{ section: "life-cycle-assessment" }} style={{ fontSize: "17px", textDecoration: "none", color: "#006346" }}>Know More</Link>
                            </button>
                        </div>

                    </div>



                    <div className='environment-home'>

                        <div className='home-lca'>
                            <h1>Environmental Monitoring & Analysis</h1>

                            <img src={EnvironmentalMonitoring} alt="" />


                            <p>
                                <li className="sublist">Ambient Air Monitoring and Analysis.</li>

                                <li className="sublist">Source / Stack Monitoring and Analysis.</li>


                                <li className="sublist">Water / Waste water Analysis.</li>

                                <li className="sublist">Drinking Water.</li>
                                <li className="sublist">Noise Monitoring.</li>

                            </p>

                            <button className='env-btn'><Link to="/services" state={{ section: "environmental-monitoring-and-analysis" }} style={{ fontSize: "17px", textDecoration: "none", color: "#006346" }}>Know More</Link></button>
                        </div>

                    </div>


                    <div className='environment-home'>

                        <div className='home-lca'>
                            <h1>Environmental Statutary Compilances</h1>

                            <img src={Statutory} alt="" />
                            <p>
                                Professional services for preparation of Environment self-audit report in The format provided by MPCB and submission on EC MPCB Conducting Environmental Due Diligence, Social Due Diligence, Environmental Compliance with respect to environmental norms (MPCB/SPCB and CPCB) etc.
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

                            <p>At UEES, we specialize in Risk Assessment services across India, helping industries manage safety and ensure regulatory compliance. From high-risk sectors in Mumbai and Gujarat to industrial hubs in Chennai, Pune, and Hyderabad, our expert team helps identify hazards, evaluate risks, and implement customized safety solutions to ensure smooth and secure operations.</p>
                            <button className='env-btn'><Link to="/safety-services" state={{ section: "risk-assessment" }} style={{ fontSize: "17px", textDecoration: "none", color: "#006346" }}>Know More</Link></button>
                        </div>

                    </div>


                    <div className='environment-home'>

                        <div className='home-lca'>
                            <h1>Workshop Facilation</h1>

                            <img src={Workshop2} alt="" />
                            <p>Workshop Sessions offer specialized safety workshops across India to integrate safety into every stage of your project’s lifecycle. From petrochemical industries in Gujarat to manufacturing plants in Pune, Chennai, and Hyderabad, our services ensure compliance with Health, Safety, and Environmental (HSE) regulations. By identifying potential hazards early in the design phase, we help businesses avoid costly delays and keep projects on track while maintaining a safe operational environment.</p>
                            <button className='env-btn'><Link to="/safety-services" state={{ section: "workshop-facilitation" }} style={{ fontSize: "17px", textDecoration: "none", color: "#006346" }}>Know More</Link></button>
                        </div>

                    </div>


                    <div className='environment-home'>

                        <div className='home-lca'>
                            <h1>Safety Audit</h1>

                            <img src={SA} alt="" />

                            <p>
                                <b>Key Features:</b>
                                <li><b>Customized Audits: </b> Aligned with your industry and regulatory standards.</li>
                                <li><b>Compliance Assurance:</b> Meet OSHA, ISO 45001, and more.</li>
                                <li><b>Risk Evaluation:</b> Detect hazards in processes and conditions.</li>
                                <li><b>Training Review:</b> Assess and improve safety training.</li>
                                <li><b>Detailed Reports:</b> Insights and action plans for improvement.</li>
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