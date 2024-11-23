import React from 'react'
import Navbar from './Navbar'

import Workshop2 from "../assets/Workshop-2.jpg"


const SafetyServices = () => {
    return (
        <section>
            <Navbar />

            <div className='section-title'>
                <h1>Safety Services</h1>
            </div>

            <div className='safety-services'>

                <div>
                    <img src={Workshop2} width="500px" height="400px" style={{ borderRadius: "10px" }} alt="" />
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

        </section>
    )
}

export default SafetyServices