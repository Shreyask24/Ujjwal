import React, { useEffect } from 'react'
import Navbar from './Navbar'

import Workshop2 from "../assets/Workshop-2.jpg"
import Mapping from "../assets/3D-F&G-Mapping.png"
import FunctionalSafety from "../assets/Functional-Safety.png"
import OtherSafetyWorkshop from "../assets/Other-Safety-workshop.png"
import Consequence from "../assets/Consequence.png"

import QuickLinks from './QuickLinks'
import { useLocation } from 'react-router-dom'


const SafetyServices = () => {
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

    return (
        <section>
            <Navbar />

            <div className='section-title'>
                <h1>Safety Services</h1>
            </div>

            <div className='safety-services' id='risk-assessment'>

                <div>
                    <img src={Consequence} className='safety-services-img' alt="" />
                </div>

                <div className='safety-services-ra'>
                    <details open className='details-1'>
                        <summary className='summary1'><b><h1> <span className='symbols'>1.</span>  Risk Assessment </h1></b> </summary>
                        <p>At UEES, we specialize in Risk Assessment services across India, helping industries manage safety and ensure regulatory compliance. From high-risk sectors in Mumbai and Gujarat to industrial hubs in Chennai, Pune, and Hyderabad, our expert team helps identify hazards, evaluate risks, and implement customized safety solutions to ensure smooth and secure operations.</p>

                        <details className='subdetails'>
                            <summary><b>1.1 Quantitative Risk Assessment (QRA) Study</b></summary>
                            <p>
                                Our QRA studies are tailored to industries in key regions such as Gujarat’s petrochemical sector, Maharashtra’s chemical industries, and Tamil Nadu’s manufacturing hubs. We assess potential hazards, quantifying risks to people, the environment, and assets in facilities like high-pressure pipelines, storage sites, and production units to ensure safety compliance with Indian regulations and global safety standards.
                            </p>

                        </details>

                        <details className='subdetails'>
                            <summary><b> 1.2. Consequence Analysis</b></summary>
                            <p>
                                With a focus on industries across India, our Consequence Analysis services evaluate the outcomes of hazardous events such as chemical releases or explosions in high-risk locations like the refineries of Jamnagar, Chennai’s industrial zones, or the pharmaceutical hubs in Hyderabad. We help businesses prevent major accidents, minimize environmental impact, and meet Indian regulatory requirements, ensuring effective risk management.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>1.3. Dispersion Modelling Study</b></summary>
                            <p>
                                Serving industries in coastal areas like Mumbai, Kochi, and Vishakhapatnam, we use advanced gas and smoke dispersion models to evaluate risks. Our studies support safer facility designs by assessing how released materials disperse, ensuring minimal risk to nearby populations and compliance with regional safety guidelines.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>1.4. Fire and Explosion Risk Analysis (FERA) Study</b></summary>
                            <p>
                                Our FERA studies are designed for India’s key industrial centers like Navi Mumbai, Bharuch, and Mangalore. We assess fire and explosion hazards, providing crucial insights for facility layouts, fire protection systems, and emergency response plans to reduce the risk of catastrophic events.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>1.5. Flare Radiation Study</b></summary>
                            <p>
                                We offer Flare Radiation Studies to optimize flare systems in refineries and petrochemical facilities across India, including regions like Gujarat and Odisha. Our analysis helps reduce radiation and noise, ensuring safe operations and compliance with environmental safety standards laid out by the Ministry of Environment, Forest, and Climate Change (MoEF&CC).
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>1.6. 3D F & G Mapping</b></summary>
                            <p>
                                Industries in high-risk sectors such as oil & gas in Gujarat and chemical plants in Chennai benefit from our 3D Fire & Gas Mapping services. By creating a 3D model of your facility, we ensure comprehensive fire and gas detection systems are in place, enhancing safety in regions prone to industrial hazards.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>1.7. Escape, Evacuation & Rescue Analysis (EERA) Study</b></summary>
                            <p>
                                Our EERA studies support industries in Maharashtra, Gujarat, and Andhra Pradesh, focusing on ensuring safe evacuation during emergencies. We assess emergency systems and evacuation routes, providing customized solutions for industries like refineries, pharmaceuticals, and manufacturing.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>1.8. As Low As Reasonably Practicable (ALARP) Study</b></summary>
                            <p>
                                We conduct ALARP studies for industries across India, helping reduce workplace risks in regions like Pune’s automotive sector, Hyderabad’s chemical industries, and the engineering sectors of Bengaluru. Our studies ensure that safety measures are both cost-effective and compliant with India’s safety regulations and international standards.
                            </p>
                        </details>

                    </details>
                </div>

            </div>

            <div className='safety-services-alt' id='workshop-facilitation'>

                <div>
                    <img src={Workshop2} className='safety-services-img' alt="" />
                </div>

                <div className='safety-services-ra'>
                    <details open className='details-1'>
                        <summary className='summary1'><b><h1><span className='symbols'>2.</span> Workshop Facilitation </h1></b> </summary>
                        <p>Workshop Sessions offer specialized safety workshops across India to integrate safety into every stage of your project’s lifecycle. From petrochemical industries in Gujarat to manufacturing plants in Pune, Chennai, and Hyderabad, our services ensure compliance with Health, Safety, and Environmental (HSE) regulations. By identifying potential hazards early in the design phase, we help businesses avoid costly delays and keep projects on track while maintaining a safe operational environment.</p>

                        <details className='subdetails'>
                            <summary><b>3.1.Process Hazard Analysis (PHA)</b></summary>
                            <p>
                                Our QRA studies are tailored to industries in key regions such as Gujarat’s petrochemical sector, Maharashtra’s chemical industries, and Tamil Nadu’s manufacturing hubs. We assess potential hazards, quantifying risks to people, the environment, and assets in facilities like high-pressure pipelines, storage sites, and production units to ensure safety compliance with Indian regulations and global safety standards.
                            </p>

                        </details>

                        <details className='subdetails'>
                            <summary><b>3.2.Hazard Identification (HAZID) Study</b></summary>
                            <p>
                                Our HAZID studies provide early-stage hazard identification in locations like Mumbai’s refineries and Pune’s manufacturing units. By evaluating risks during conceptual design, engineering, construction, and commissioning, we help safeguard design and operational safety, ensuring compliance with India's safety standards.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>3.3.Hazard & Operability (HAZOP) Study</b></summary>
                            <p>
                                HAZOP services in regions like Bharuch, Kochi, and Chennai assess potential hazards and deviations in operating conditions. By identifying critical safety controls, we enhance overall risk management strategies for high-risk sectors like oil & gas and chemical industries, ensuring adherence to safety regulations.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>3.4.Safety & Operability (SAFOP/eHAZOP) Study</b></summary>
                            <p>
                                SAFOP studies are essential for industries working with high-voltage equipment, such as electrical plants in Gujarat and Karnataka. Our team evaluates safety measures and system security, ensuring the protection of key personnel and the maximization of operational efficiency in India's industrial regions. This evaluation includes SAFAN (Safety Analysis) and SYSOP (System Security & Operability Analysis), among others.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>3.5.Hazard Identification & Risk Assessment (HIRA) Study</b></summary>
                            <p>
                                For industries in regions like Chennai and Hyderabad, HIRA services help identify hazards and assess risks. Our studies ensure that risks are reduced to an acceptable level through a continuous risk monitoring process, ensuring compliance with India's workplace safety regulations.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>3.6.Environmental Impact Identification (ENVID) Study</b></summary>
                            <p>
                                Our ENVID services, offered in key environmental hotspots like Gujarat, Visakhapatnam, and Mumbai, focus on assessing environmental hazards that can arise during project execution. By identifying potential environmental impacts, we help clients meet regulatory compliance and ensure sustainable operations.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>3.7.Health Risk Assessment (HRA) Study</b></summary>
                            <p>
                                Industries in cities like Pune, Bengaluru, and Hyderabad can benefit from our Health Risk Assessment services. We identify potential health hazards, assess exposure levels, and recommend strategies to mitigate health impacts, ensuring compliance with both national and international health standards.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>3.8.Project HSE Review (PHSER) Study</b></summary>
                            <p>
                                Our PHSER services ensure that projects comply with health, safety, and environmental regulations in regions like Gujarat’s petrochemical hubs, Pune’s industrial areas, and Chennai’s manufacturing zones. We review HSE aspects at every stage, helping businesses stay compliant with India’s safety laws.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>3.9.Simultaneous Operations (SIMOPS) Study</b></summary>
                            <p>
                                SIMOPS services are critical in high-risk industrial regions such as Navi Mumbai and Mangalore. We assess risks associated with concurrent operations, helping manage hazards when different teams work simultaneously, ensuring smooth operations and safety compliance in India’s fast-paced industrial environment.
                            </p>
                        </details>
                        <details className='subdetails'>
                            <summary><b>3.10.Bow-Tie Analysis Study</b></summary>
                            <p>
                                Our Bow-Tie Analysis, used by industries in locations like Gujarat and Chennai, visually maps out potential hazards, their causes, and consequences. This service combines fault tree analysis and event tree analysis, offering industries a clear overview of risks. Bow-Tie Analysis simplifies decision-making, ensuring high-risk sectors in India can address hazards effectively
                            </p>
                            <b>With the Bow-Tie methodology, we can:</b>
                            <li>Map out potential hazards, causes, and consequences</li>
                            <li>Assess the effectiveness of existing controls</li>
                            <li>Propose additional barriers to mitigate risks</li>
                            <li>Present complex risk scenarios in an easily understood visual format, promoting better decision-making at all levels.</li>
                        </details>

                        <p>
                            Our workshop-based safety services empower your team to identify, assess, and mitigate risks effectively, ensuring that your project remains safe, compliant, and on track. Reach out to UEES for expert-led safety studies tailored to your specific project needs.
                        </p>

                    </details>
                </div>

            </div>

            <div className='safety-services' id='functional-safety-services'>

                <div>
                    <img src={FunctionalSafety} className='safety-services-img' alt="" />
                </div>

                <div className='safety-services-ra'>
                    <details open className='details-1'>
                        <summary className='summary1'><b><h1> <span className='symbols'>3.</span> Functional Safety Services </h1></b> </summary>
                        <p>Functional safety is critical for industries worldwide to ensure systems and equipment operate safely under all conditions. At Ujjwal Engineers and Environmental Services (UEES), we specialize in comprehensive functional safety services, from hazard assessment and safety compliance to risk mitigation and emergency response. Whether you operate in the energy, oil & gas, manufacturing, or chemical sectors across global process safety markets—from the Middle East to Europe, North America, and Asia—we offer tailored solutions to minimize operational risks and enhance system performance.</p>

                        <details className='subdetails'>
                            <summary><b>4.1. Safety Integrity Level (SIL)</b></summary>
                            <p>
                                In industries reliant on Safety Instrumented Systems (SIS), such as petrochemical plants in the Middle East, offshore oil rigs in Southeast Asia, or chemical manufacturing facilities in Europe, achieving the correct Safety Integrity Level (SIL) is essential for protecting human life, the environment, and financial assets. Our SIL Classification Study adheres to global IEC 61508/61511 standards, ensuring safety compliance for complex operations worldwide.
                            </p>
                            <p>

                                <b>We offer: </b>
                                <li>Risk Graph Method: This technique assesses SIL by evaluating factors such as hazard severity, occupancy, and the system’s ability to avoid failures.</li>
                                <li>Layers of Protection Analysis (LOPA): A semi-quantitative approach used to identify protective barriers and assess their failure probabilities.</li>
                                Our SIL services help global industries meet regulatory demands while improving system safety.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>4.2. Failure Modes & Effects Analysis (FMEA) and Failure Modes, Effect & Criticality Analysis (FMECA)</b></summary>
                            <p>
                                FMEA and FMECA studies are vital in ensuring the reliability of systems in high-risk industries such as energy production in the United States, pharmaceuticals in Europe, and heavy machinery manufacturing in Japan. By identifying potential failure modes and assessing their impacts, we propose corrective actions to enhance system safety and performance.
                            </p>

                            <p>
                                <li>FMEA: Focuses on identifying failure modes and assigning a Risk Priority Number (RPN) to prioritize risk mitigation.</li>
                                <li>FMECA: Provides a deeper analysis by evaluating failure criticality based on severity and failure rates.</li>
                                These methods are key in reducing operational risks, ensuring compliance with safety regulations, and minimizing downtime.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>4.3. Reliability Availability Maintainability (RAM) Study</b></summary>
                            <p>
                                Industries across the globe from manufacturing in Germany to oil refineries in Canada benefit from RAM studies that optimize system configurations to improve reliability, availability, and maintainability. Our studies focus on:
                            </p>
                            <p>

                                <li>Reliability: Ensuring systems can perform under expected conditions.</li>
                                <li>Availability: Maximizing operational time for critical systems.</li>
                                <li>Maintainability: Reducing downtime by implementing efficient maintenance strategies.</li>
                                Our RAM studies enable businesses to reduce operational costs while maintaining a high standard of industrial safety.
                            </p>
                        </details>

                        <details className='subdetails'>
                            <summary><b>4.4. Reliability-Centered Maintenance (RCM)</b></summary>
                            <p>
                                Reliability-Centered Maintenance (RCM) ensures the continued safety and efficiency of industrial equipment, whether in North American automotive plants or offshore drilling platforms in the Middle East. Our RCM strategies involve:
                            </p>
                            <li>
                                Proactive maintenance programs designed to address equipment design flaws, operational procedures, and maintenance strategies. By identifying potential issues before they lead to failures, we help businesses reduce risks, improve equipment longevity, and maintain compliance with safety standards.
                            </li>
                        </details>


                    </details>
                </div>

            </div>

            <div className='safety-services-alt' id='other-safety-workshop-services'>

                <div>
                    <img src={OtherSafetyWorkshop} className='safety-services-img' alt="" />
                </div>

                <div className='safety-services-ra'>
                    <details open className='details-1'>
                        <summary className='summary1'><b><h1> <span className='symbols'>4.</span> Other Safety Workshop Services </h1></b> </summary>
                        <p>We also offer a comprehensive range of safety workshops and risk assessment studies tailored to ensure safety compliance and risk mitigation across various industrial sectors. Our services include HAZAN (Hazard Analysis) and Job Safety Analysis (JSA), which help identify and control risks at different stages of operations. Through Process Hazard Analysis (PHA), Failure Mode and Effects Analysis (FMEA), and Fault Tree Analysis (FTA), we evaluate critical safety systems and ensure robust risk management. We also conduct specialized Emergency Response and Preparedness Workshops, OHS Risk Assessments, and Control of Major Accident Hazards (COMAH) Studies, ensuring industries are prepared for any scenario.</p>

                        <p>Our tailored workshops cover Ergonomics Safety, Permit to Work (PTW) Systems, Confined Space Entry, Electrical Safety, and Lockout-Tagout (LOTO) protocols, ensuring safety measures are implemented effectively. Additionally, we focus on Behavioural-Based Safety (BBS), Construction Safety, and Contractor Safety Management Workshops to cultivate a proactive safety culture across operations, helping businesses achieve higher safety standards globally.</p>



                    </details>
                </div>

            </div>

            <div className='safety-services' id='other-safety-desktop-studies'>
                <div>
                    <img src={Mapping} className='safety-services-img' alt="" />
                </div>

                <div className='safety-services-ra'>
                    <details open className='details-1'>
                        <summary className='summary1'><b><h1> <span className='symbols'>5.</span> Other Safety Desktop Studies  </h1></b> </summary>
                        <p>Our desktop studies are designed to enhance operational safety, regulatory compliance, and risk management for industries worldwide. We conduct detailed Safety Audits and Energy Audits, offering a thorough evaluation of your systems, identifying inefficiencies, and recommending safety and cost-effective improvements. Our Human Factors and Ergonomics Studies focus on optimizing human performance while minimizing risk, ensuring a safer working environment. Additionally, we perform comprehensive Process Safety Reviews and Hazardous Area Classification Studies to ensure compliance with global safety standards and protect against potential risks.</p>

                        <p>
                            Our expert team also conducts Constructability Studies, Chemical Exposure Assessments, Dust Hazard Analysis (DHA), and Ergonomic Risk Assessments to assess specific hazards and propose practical solutions. We ensure businesses meet all safety requirements through Legal and Regulatory Compliance Reviews, Safety Management System (SMS) Reviews, and Safety Data Sheet (SDS) Reviews. Additionally, our Emergency Response Plan (ERP) and Risk Assessment Studies help businesses develop effective response strategies and mitigate risks in high-hazard environments.
                        </p>
                    </details>
                </div>

            </div>







            <QuickLinks />
        </section>
    )
}

export default SafetyServices