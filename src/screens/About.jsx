import Typewriter from 'typewriter-effect';

import "../index.css"

import Aboutusmainimage from "../assets/About-us-main-image.jpg"
import AboutusMap from "../assets/world-map.png"
import Navbar from './Navbar'
import QuickLinks from './QuickLinks'
import { useRef } from 'react';


const About = () => {
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    const navItems = useRef();


    return (
        <section>
            <Navbar />
            <div className='section-title'>
                <h1 >About Us</h1>

            </div>
            <div className='about-maincontent'>

                <div className='typewriter'>
                    <h1>We Provide</h1>
                </div>

                <div className='typewriter'>
                    <span>
                        <Typewriter
                            options={{
                                strings: ['Environmental Consultancy', 'Safety Services', 'Sustainability Solutions', 'Green Consulting', 'Pollution Control Devices', 'Environmental Filtration Systems'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 1000,
                                delay: 100
                            }} />
                    </span>
                </div>



                <div className='about-imgcontainer'>

                    <div data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" className='about-image'>
                        <img loading="lazy" ref={navItems} src={Aboutusmainimage} alt="about-us" />
                    </div>

                    <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000">

                        <p>
                            Ujjwal Engineers and Environmental Services (UEES) is a comprehensive environmental consulting
                            and services, providing sustainability consulting and green solutions. We conduct environmental
                            impact assessments, offer environmental management and compliance services, and specialize in
                            environmental planning. Our services include eco-friendly consulting and innovative environmental
                            solutions, all aimed at promoting sustainability and effective environmental practices.
                        </p>
                        <p>

                            Additionally, UEES offers comprehensive environmental solutions provider specializing in
                            Environmental Testing, Monitoring, and Analysis services. Our offerings include Water Quality
                            Testing, Air Quality Monitoring, and Soil Testing Services, all aimed at ensuring environmental
                            compliance and sustainability. We conduct precise Environmental Sampling and Contaminant
                            Testing, supported by thorough Environmental Data Analysis, to deliver accurate results and
                            effective environmental solutions.
                        </p>


                    </div>
                </div>





                <div>
                    <p>

                        UEES also specializes in conducting various types of environmental audits, including environmental
                        compliance audits, environmental management system audits, and sustainability audits. We offer
                        environmental reviews, assessments, and performance evaluations, focusing on green practices and
                        sustainability. Our services include environmental due diligence, ensuring thorough assessments for
                        environmental risks and compliance. We provide detailed environmental audit reports to help
                        clients understand their environmental impact and improve their environmental performance.
                    </p>

                    <p>
                        Furthermore, UEES specializes in comprehensive pollution control solutions, including air pollution
                        control, water pollution control, and environmental pollution control. They offer a range of pollution
                        control equipment and technologies, along with pollution prevention services. Their expertise
                        extends to industrial pollution control, with a focus on Effluent Treatment Plants (ETP), Sewage
                        Treatment Plants (STP), Water Treatment Plants (WTP), Multiple Effect Evaporators (MEE), and
                        Mechanical Vapor Recompression (MVRE) systems. Additionally, UEES provides pollution control
                        consulting services to help businesses implement effective pollution control measures.
                    </p>
                </div>








                <div className='map-imgcontainer'>


                    <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000">

                        <p className='img-text'>
                            UEES is proficient in using PARIVESH, an online portal for environmental clearances, and has
                            extensive experience working with environmental regulatory bodies such as the Maharashtra
                            Pollution Control Board (MPCB), Central Pollution Control Board (CPCB), Gujarat Pollution Control
                            Board (GPCB), and State Pollution Control Boards (SPCBs). Our expertise also extends to using
                            Sphera GaBi/SimaPro software for life cycle assessment (LCA), Product Carbon Footprint (PCF), GHG
                            Emissions Accounting and environmental foot printing. We offer Product Sustainability Solutions to
                            help companies minimize their environmental impact and promote sustainable practices.

                        </p>
                        <p className='img-text'>
                            UEES is committed to sustainability and encourages clients to &quot;Go Green&quot; by adopting eco-friendly
                            practices. Our services are accredited by Quality Council of India (QCI) under the National
                            Accreditation Board for Education and Training (NABET), and our laboratory is NABL accredited,
                            ensuring the highest standards of quality and reliability. We stay updated with regulatory changes,
                            such as the Notification on Environmental Impact Assessment (EIA) dated 15th September 2006,
                            issued by the Ministry of Environment &amp; Forests, Government of India. UEES&#39;s expertise and
                            dedication make us a trusted partner for all environmental compliance needs in India and beyond.
                        </p>


                    </div>

                    {/* <div className='map-xt'>
                        <h1>Empowering Solutions Worldwide</h1>
                    </div> */}

                    <div data-aos="fade-left" data-aos-once='true' data-aos-duration="2000" className='map-image'>
                        <img loading="lazy" ref={navItems} src={AboutusMap} alt="about-us" />
                    </div>
                </div>













                {/* <div>

                    <p>

                        UEES also specializes in conducting various types of environmental audits, including environmental
                        compliance audits, environmental management system audits, and sustainability audits. We offer
                        environmental reviews, assessments, and performance evaluations, focusing on green practices and
                        sustainability. Our services include environmental due diligence, ensuring thorough assessments for
                        environmental risks and compliance. We provide detailed environmental audit reports to help
                        clients understand their environmental impact and improve their environmental performance.
                    </p>

                    <p >

                        Furthermore, UEES specializes in comprehensive pollution control solutions, including air pollution
                        control, water pollution control, and environmental pollution control. They offer a range of pollution
                        control equipment and technologies, along with pollution prevention services. Their expertise
                        extends to industrial pollution control, with a focus on Effluent Treatment Plants (ETP), Sewage
                        Treatment Plants (STP), Water Treatment Plants (WTP), Multiple Effect Evaporators (MEE), and
                        Mechanical Vapor Recompression (MVRE) systems. Additionally, UEES provides pollution control
                        consulting services to help businesses implement effective pollution control measures.
                    </p>

                </div> */}

            </div>
            <QuickLinks />
        </section>
    )
}

export default About