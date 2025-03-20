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

                <div className="typewriter">
                    <div>
                        <h1>We Provide</h1>
                    </div>

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
                            Ujjwal Engineers and Environmental Services (UEES) is a comprehensive environmental consulting and services provider, offering sustainability consulting and green solutions. We conduct environmental impact assessments, provide environmental management and compliance services, and specialize in environmental planning. Our services include eco-friendly consulting and innovative environmental solutions, all aimed at promoting sustainability and effective environmental practices.
                        </p>
                        <p>
                            In addition to environmental services, UEES offers a wide range of safety services, including Quantitative Risk Assessment (QRA), Hazard and Operability Studies (HAZOP), and other safety services. Our safety consulting services ensure compliance with the highest safety standards and are designed to integrate with environmental management efforts. We specialize in risk assessments, safety audits, and hazard identification, helping businesses create safe work environments and minimize operational risks.
                        </p>


                    </div>
                </div>





                <div>
                    <p>
                        UEES is also a leader in Environmental Testing, Monitoring, and Analysis services. These include Water Quality Testing, Air Quality Monitoring, and Soil Testing Services, all aimed at ensuring environmental compliance and sustainability. We conduct precise Environmental Sampling and Contaminant Testing, supported by thorough Environmental Data Analysis, to deliver accurate results and effective solutions.
                    </p>

                    <p>
                        We specialize in various types of environmental audits, including environmental compliance audits, environmental management system audits, and sustainability audits. We offer comprehensive reviews, assessments, and performance evaluations, focusing on green practices and sustainability. Our services also cover environmental due diligence to ensure thorough assessments of environmental risks and compliance, providing detailed audit reports to help clients improve their environmental impact and performance.
                    </p>

                    <p>
                        UEES is committed to sustainability and encourages clients to "Go Green" by adopting eco-friendly practices. Our services are accredited by Quality Council of India (QCI) under the National Accreditation Board for Education and Training (NABET), and our laboratory is NABL accredited, ensuring the highest standards of quality and reliability. We stay updated with regulatory changes, such as the Notification on Environmental Impact Assessment (EIA) dated 15th September 2006, issued by the Ministry of Environment & Forests, Government of India. UEES's expertise and dedication make us a trusted partner for all environmental compliance needs in India and beyond.
                    </p>
                </div>








                <div className='map-imgcontainer'>


                    <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000">

                        <p className='img-text'>
                            UEES excels in pollution control solutions, offering services for air pollution control, water pollution control, and overall environmental pollution control. Our expertise includes Effluent Treatment Plants (ETP), Sewage Treatment Plants (STP), Water Treatment Plants (WTP), Multiple Effect Evaporators (MEE), and Mechanical Vapor Recompression (MVRE) systems. Additionally, we provide pollution control consulting services to assist businesses in implementing effective pollution control measures.

                        </p>
                        <p className='img-text'>
                            UEES is experienced in using PARIVESH for environmental clearances and working with environmental regulatory bodies like the Maharashtra Pollution Control Board (MPCB), Central Pollution Control Board (CPCB), Gujarat Pollution Control Board (GPCB), and State Pollution Control Boards (SPCBs). We also use Sphera GaBi/SimaPro software for life cycle assessments (LCA), Product Carbon Footprint (PCF), GHG Emissions Accounting, and environmental foot printing, offering Product Sustainability Solutions to help companies minimize their environmental impact.
                        </p>


                    </div>

                    <div data-aos="fade-left" data-aos-once='true' data-aos-duration="2000" className='map-image'>
                        <img loading="lazy" ref={navItems} src={AboutusMap} alt="about-us" />
                        <h1 className='map-txt'>Empowering Solutions Worldwide</h1>
                    </div>
                </div>

            </div>
            <QuickLinks />
        </section>
    )
}

export default About