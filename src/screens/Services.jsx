import React, { useEffect } from 'react'
import Navbar from './Navbar'
import QuickLinks from './QuickLinks'

import Typewriter from 'typewriter-effect';


import LCA from "../assets/LCA.png"
import ProductCarbonFootprint from "../assets/ProductCarbonFootprint.png"
import GHGEmission from "../assets/GHGEmission.png"
import EPR from "../assets/EPR.png"
import EnvironmentalAssessment from "../assets/EnvironmentalAssessment.png"
import EnvironmentalAudit from "../assets/EnvironmentalAudit.png"
import ConsentToEstablish from "../assets/Consent-to-Establish.png"
import Statutory from "../assets/Statutory-Compliances.png"
import EnvironmentalMonitoring from "../assets/Environmental-Monitoring.png"
import { useLocation } from 'react-router-dom'


const Services = () => {
    const location = useLocation();
    const section = location.state?.section; // Get the section from state

    useEffect(() => {
        if (section) {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [section]);

    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    return (
        <section>
            <Navbar />
            <div >
                <div className='section-title'>
                    <h1 >Environmental Services</h1>

                </div>

                <div className='services-maincontent'>
                    <div>
                        <div className='services-content' id="life-cycle-assessment">
                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={LCA} loading="lazy" alt="Life Cycle Assessment" />
                            <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className="service-text">
                                <h3>Life Cycle Assessment</h3>
                                One of the most common methodologies for quantifying sustainability is life cycle assessment (LCA). An LCA is a systematic analysis of environmental impact over the course of the entire life cycle of a product, material, process, or other measurable activity.
                                <p>
                                    <b>
                                        A typical life cycle assessment (LCA)-study consists of the following stages:
                                    </b>
                                </p>
                                <li>
                                    Goal and scope definition.

                                </li>

                                <li>
                                    A detailed life cycle inventory (LCI) analysis, with compilation of data both about energy and resource use and on emissions to the environment, throughout the life cycle.
                                </li>
                                <li>


                                    An assessment of the potential impacts associated with the identified forms of resource use and environmental emissions.
                                </li>
                                <li>
                                    The interpretation of the results from the previous phases of the study in relation to the objectives of the study. An account of the relevant LCA methodological framework based on the ISO 14040 standard.
                                </li>


                                <p>
                                    <b>
                                        Gain a complete understanding of your product’s environmental impact from cradle to grave.
                                    </b>
                                    <li>
                                        Identify hotspots in the supply chain.
                                    </li>

                                    <li>
                                        Reduce resource consumption and waste.
                                    </li>
                                    <li>
                                        Enhance product sustainability and eco-efficiency.
                                    </li>

                                    <div className='services-typewriter'>
                                        <span>
                                            <Typewriter
                                                options={{
                                                    strings: ['Optimize your environmental performance with a detailed LCA tailored to your business needs.'],
                                                    autoStart: true,
                                                    loop: true,
                                                    pauseFor: 1000,
                                                    delay: 100
                                                }} />
                                        </span>
                                    </div>



                                </p>


                            </div>

                        </div>

                        <div className='services-content-alternate' id="product-carbon-footprint">
                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={ProductCarbonFootprint} loading="lazy" alt="product-carbon-footprint" />

                            <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className="service-text">
                                <h3>Product Carbon Footprint: </h3>
                                Guidance for businesses on tackling the carbon foot printing challenge.
                                The life cycle of a product embraces all of the activities that go into making, transporting, using and disposing of that product.

                                <p>
                                    Typically, a product's life cycle comprises several steps, starting with raw material extraction and continuing through design and formulation, production, packaging, distribution, consumption, recycling, and trash disposal.

                                </p>

                                <p>

                                    How much of a product's life cycle is linked to greenhouse gas emissions? Over the past few years, this question has grown in significance, and a Product Carbon Footprint (PCF) can assist in determining the solutions.
                                </p>

                                <p>
                                    A product's carbon footprint: what is it? A product's whole greenhouse gas emissions from raw material extraction to end-of-life are measured by its life cycle carbon footprint. Carbon dioxide equivalents (CO2e) are used to measure it. UEES is devoted to consistently lowering the PCF of its goods.
                                    The PCF is computed in accordance with the Greenhouse Gas Protocol Product Standard and is based on the ISO 14040, ISO 14044, and ISO 14067 standards.

                                </p>

                                <p>
                                    <b>
                                        Quantify and manage the carbon footprint of your products to align with climate goals.
                                    </b>
                                    <li>
                                        Evaluate carbon emissions at every stage of the product lifecycle.
                                    </li>
                                    <li>
                                        Develop strategies to minimize emissions.
                                    </li>
                                    <li>
                                        Build consumer trust with transparency and accountability.
                                    </li>

                                    <div className='services-typewriter'>
                                        <span>
                                            <Typewriter
                                                options={{
                                                    strings: ['Show your commitment to climate action with accurate carbon footprint assessments.'],
                                                    autoStart: true,
                                                    loop: true,
                                                    pauseFor: 1000,
                                                    delay: 100
                                                }} />
                                        </span>
                                    </div>


                                </p>
                            </div>
                        </div>


                        <div className='services-content' id="greenhouse-gas-emission">
                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={GHGEmission} loading="lazy" alt="GHG Emission" />

                            <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className="service-text">
                                <h3>Greenhouse Gas Emission (Scope 1, 2 & 3 Emissions): </h3>
                                <p>

                                    The partial Product Carbon Footprint takes into account the greenhouse gas emissions that occur when raw materials are extracted (cradle) until they leave the site (plant gate). The consideration from the cradle to the factory gate (cradle-to-gate) thus only covers part of the product’s life cycle, not a complete life cycle analysis (cradle-to-grave).
                                </p>

                                <p>
                                    Greenhouse gases (also known as GHGs) are gases in the earth's atmosphere that trap heat. The earth's surface warms during the day as a result of sunlight penetrating the atmosphere. The greenhouse effect is made stronger by greenhouse gas (GHG) emissions from human activity. This has an impact on climate change. Burning fossil fuels like coal, oil, and natural gas releases carbon dioxide (CO2), which is one of the main contributors to climate change.

                                </p>

                                <p>
                                    <b>
                                        Address Scope 1, 2, and 3 emissions with tailored strategies:
                                    </b>
                                    <li>
                                        Scope 1: Direct emissions from owned operations.
                                    </li>
                                    <li>
                                        Scope 2: Indirect emissions from energy consumption.
                                    </li>
                                    <li>
                                        Scope 3: Value chain emissions, including suppliers and customers.
                                    </li>

                                    <div className='services-typewriter'>
                                        <span>
                                            <Typewriter
                                                options={{
                                                    strings: ['Reduce your carbon footprint and contribute to a low-carbon economy.'],
                                                    autoStart: true,
                                                    loop: true,
                                                    pauseFor: 1000,
                                                    delay: 100
                                                }} />
                                        </span>
                                    </div>


                                </p>
                            </div>
                        </div>



                        <div className='services-content-alternate' id="environmental-clearance">
                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={EnvironmentalAssessment} loading="lazy" alt="Environmental Impact Assessment (EIA)" />

                            <div data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" className="service-text">
                                <h3>Environmental Clearance [EC] / Environmental Impact Assessment (EIA): </h3>

                                <p>
                                    Process for majority of projects will comprise of a maximum of four stages – Screening, Scoping, Public Consultation & Appraisal. EC for developmental projects has been made mandatory by the Ministry of Environment & Forest through its Notification issued on 27.01.1994 under the provisions of Environment (Protection) Act, 1986.

                                </p>

                                <p>
                                    <b>
                                        Navigate regulatory requirements with our EC and EIA services:
                                    </b>
                                    <li>

                                        Comprehensive environmental assessments.
                                    </li>
                                    <li>

                                        Strategic guidance for project approvals.
                                    </li>
                                    <li>

                                        Compliance with local and international regulations.
                                    </li>


                                    <div className='services-typewriter'>
                                        <span>
                                            <Typewriter
                                                options={{
                                                    strings: ['Ensure smooth project execution with our EC and EIA expertise.'],
                                                    autoStart: true,
                                                    loop: true,
                                                    pauseFor: 1000,
                                                    delay: 100
                                                }} />
                                        </span>
                                    </div>
                                </p>
                            </div>
                        </div>



                        <div className='services-content' id="consent-to-establish">
                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={ConsentToEstablish} loading="lazy" alt="Consent to Establish / Consent to Operate" />

                            <div data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" className="service-text">
                                <h3>Consent to Establish / Consent to Operate: </h3>

                                <p>
                                    As per section 25 of the Water (P&CP) Act, 1974 as amended, no person shall without the previous consent of the PPCC, establish or take any steps to establish any industrial plant or process or any treatment and disposal system or any extension or addition thereto which is likely to discharge sewage or trade effluent into any stream or well or sewer or on land. Consent for Operation (CFO Air and Water), also known as Consent to Operate (CTO), is granted to industrial units before they can start operation.
                                </p>

                                <p>
                                    <b>
                                        Secure permissions for your industrial or business operations:
                                    </b>
                                    <li>

                                        Assistance with CTE and CTO applications.
                                    </li>
                                    <li>

                                        Liaison with regulatory authorities.
                                    </li>
                                    <li>

                                        Timely renewals and updates for compliance.
                                    </li>

                                    <div className='services-typewriter'>
                                        <span>
                                            <Typewriter
                                                options={{
                                                    strings: ['Avoid operational delays with streamlined CTE/CTO services.'],
                                                    autoStart: true,
                                                    loop: true,
                                                    pauseFor: 1000,
                                                    delay: 100
                                                }} />
                                        </span>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className='services-content-alternate' id="environmental-audit">
                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={EnvironmentalAudit} loading="lazy" alt="Environmental Audit" />
                            <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className="service-text">
                                <h3>  Environmental Audit: </h3>

                                Environmental auditing is a systematic, documented, periodic and objective process in assessing an organization's activities and services in relation to: Assessing compliance with relevant statutory and internal requirements. Facilitating management control of environmental practices.

                                <p>
                                    <b>
                                        Evaluate your organization’s environmental performance:
                                    </b>
                                    <li>

                                        Detailed analysis of resource utilization and waste management.
                                    </li>
                                    <li>
                                        Identification of non-compliance risks.
                                    </li>
                                    <li>

                                        Strategic recommendations for improvement.
                                    </li>

                                    <div className='services-typewriter'>
                                        <span>
                                            <Typewriter
                                                options={{
                                                    strings: ['Achieve operational excellence with periodic environmental audits.'],
                                                    autoStart: true,
                                                    loop: true,
                                                    pauseFor: 1000,
                                                    delay: 100
                                                }} />
                                        </span>
                                    </div>
                                </p>
                            </div>

                        </div>


                        <div className='services-content' id="statutory-compliances">
                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={Statutory} loading="lazy" alt="Statutory Compliances" />

                            <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className="service-text">
                                <h3>Environmental Statutory Compliances: </h3>

                                <p>
                                    Professional services for preparation of Environment self-audit report in The format provided by MPCB and submission on EC MPCB Conducting Environmental Due Diligence, Social Due Diligence, Environmental Compliance with respect to environmental norms (MPCB/SPCB and CPCB) etc.

                                </p>

                                <p>
                                    <b>
                                        Stay ahead of regulatory changes with our compliance solutions:
                                    </b>
                                    <li>

                                        Monitoring of evolving environmental laws.
                                    </li>
                                    <li>

                                        Filing and submission of mandatory reports.
                                    </li>
                                    <li>

                                        Avoid penalties with proactive compliance management.
                                    </li>


                                    <div className='services-typewriter'>
                                        <span>
                                            <Typewriter
                                                options={{
                                                    strings: ['Protect your business reputation and ensure hassle-free operations.'],
                                                    autoStart: true,
                                                    loop: true,
                                                    pauseFor: 1000,
                                                    delay: 100
                                                }} />
                                        </span>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className='services-content-alternate' id="environmental-monitoring-and-analysis">
                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={EnvironmentalMonitoring} loading="lazy" alt="Environmental Monitoring and Analysis" />

                            <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className="service-text">
                                <b>Environmental Monitoring and Analysis.</b>
                                <li className="sublist">Ambient Air Monitoring and Analysis.</li>

                                <li className="sublist">Source / Stack Monitoring and Analysis.</li>


                                <li className="sublist">Water / Waste water Analysis.</li>

                                <li className="sublist">Drinking Water.</li>
                                <li className="sublist">Noise Monitoring.</li>

                                <li className="sublist">Workplace monitoring and Analysis.</li>
                                <li className="sublist">Soil quality testing.</li>

                                <b>Ensure a safe and compliant environment through accurate monitoring</b>


                                <div className='services-typewriter'>
                                    <span>
                                        <Typewriter
                                            options={{
                                                strings: ['Rely on our state-of-the-art tools and expert analysis for precise results.'],
                                                autoStart: true,
                                                loop: true,
                                                pauseFor: 1000,
                                                delay: 100
                                            }} />
                                    </span>
                                </div>
                            </div>
                        </div>



                        <div className='services-content' id='epr'>

                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={EPR} loading="lazy" alt="extended producer responsibility" />
                            <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className="service-text">
                                <h3>Extended producer responsibility (EPR): </h3>
                                <p>
                                    It is a waste and pollution management concept that encourages companies to design more sustainable and recyclable products and manufacturing processes.
                                </p>
                                <p>
                                    <b>
                                        Fulfil your obligations under EPR guidelines for waste management:
                                    </b>
                                    <li>

                                        Assistance in setting up reverse logistics.
                                    </li>
                                    <li>

                                        Compliance with plastic waste and e-waste regulations.
                                    </li>
                                    <li>

                                        Reporting and documentation support.
                                    </li>

                                    <div className='services-typewriter'>
                                        <span>
                                            <Typewriter
                                                options={{
                                                    strings: ['Drive sustainability with robust EPR strategies and solutions.'],
                                                    autoStart: true,
                                                    loop: true,
                                                    pauseFor: 1000,
                                                    delay: 100
                                                }} />
                                        </span>
                                    </div>
                                </p>

                            </div>
                        </div>




                    </div>

                </div>


            </div>
            <QuickLinks />
        </section >
    )
}

export default Services