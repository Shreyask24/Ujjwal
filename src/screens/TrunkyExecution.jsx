import React, { useEffect } from 'react'
import Navbar from './Navbar'
import QuickLinks from './QuickLinks'

import ETP from "../assets/ETP.jpg"
import STP from "../assets/STP.png"
import MEE from "../assets/MEE.png"
import MVRE from "../assets/MVRE.png"
import ATFD from "../assets/ATFD.jpg"
import RO from "../assets/RO.jpg"


import ProjectHeader from "../assets/Projects-Header.png"
import { useLocation } from 'react-router-dom'

const TrunkyExecution = () => {
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
            <div className='trunky-container'>
                <div className='section-title'>
                    <h1 >Projects</h1>
                </div>
                <div className='trunky-maincontent'>
                    <div>
                        <div className='services-content-alternate' id='etp'>


                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={ETP} loading="lazy" alt="Effluent Treatment Plant (ETP)" />
                            <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className="service-text">

                                <b>  Effluent Treatment Plant (ETP) </b>
                                Effluent Treatment Plant or ETP is one type of waste water treatment method
                                which is particularly designed to purify industrial waste water for its reuse and
                                its aim is to release safe water to environment from the harmful effect caused by
                                the effluent.
                                <li className='sublist'>
                                    <b>  Primary Treatment: </b>
                                    Wastewaters from manufacturing process, washings &amp; cooling tower blowdown
                                    etc. will be collected in the equalization tank and air stripped. This effluent will
                                    then be pumped to the Flash Mixer where it will be dosed with PAC for
                                    coagulation. Flash Mixer will be followed by a Flocculation
                                    or where poly will be dosed for bigger flock formation. This effluent will overflow
                                    into the settling tank where the solids will settle down and will be removed.
                                    Primarily treated effluent further fed to secondary treatment via intermediate
                                    sump.
                                </li>
                                <li className='sublist'>

                                    <b> Secondary Treatment: </b>
                                    Primary treated effluent along with domestic wastewater will enter the
                                    bioreactor. In the bio reactor, dissolved organic material is degraded by the
                                    micro–organisms present in the bio reactor. Oxygen required for the oxidation of
                                    organic matter will be provided by means of diffuser for aeration system which
                                    will mix the contents of the bioreactor also. The mixed liquor will overflow into
                                    Secondary Settling Tank (SST).
                                    In the secondary settling tank, solid-liquid separation takes place and solids i.e.
                                    biomass will settle at the bottom of the tank. Settled biomass will be recycled to
                                    the bio reactor for maintaining the MLVSS concentrations by using proposed
                                    sludge recycle pumps and excess biomass will be wasted periodically to the
                                    sludge sump. The clear overflow from the Secondary Settling Tank will be
                                    collected in the intermediate tank.
                                </li>
                                <li className='sublist'>

                                    <b>Tertiary Treatment: </b>
                                    The clear effluent from the intermediate sump will be pumped by tertiary Feed
                                    pumps through activated carbon filters (ACF) and Pressure Sand Filter (PSF).
                                    The final treated effluent will be collected in the final collection tank.
                                </li>


                            </div>

                        </div>

                        <div className='services-content' id='mee'>
                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={MEE} loading="lazy" alt="Multiple Effect Evaporator (MEE)" />

                            <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className="service-text">
                                <b>  Multiple Effect Evaporator (MEE) </b>
                                Forward Feed, Backward Feed, Parallel Feed for Multi-Effect Evaporation. A
                                Multiple Effect Evaporator (MEE) can efficiently use the heat from steam to
                                evaporate water and can adopt a forward feed, backward feed or parallel feed
                                designs for its multi-effect evaporation process.
                                <p>

                                    <b>Advantages: -</b>
                                </p>
                                <li className='sublist'> Maximize the steam economy</li>
                                <li className='sublist'>                             Reduce energy requirement to run Zero Liquid Discharge system
                                </li>
                                <li className='sublist'>                             Provision of High Heat Transfer area
                                </li>
                                <li className='sublist'>                             Sustainable and Successful Conventional method for ZLD
                                </li>
                                <b>Application: -</b>

                                <li className='sublist'>                             Zero Liquid Discharge
                                </li>
                                <li className='sublist'> Waste water treatment</li>
                                <li className='sublist'>                             Salt recovery
                                </li>
                                <li className='sublist'>                             Caustic recovery
                                </li>
                                <li className='sublist'>Product concentration</li>

                            </div>

                        </div>


                        <div className='services-content-alternate' id='mvre'>
                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={MVRE} loading="lazy" alt="Mechanical Vapor Recompression (MVRE)" />
                            <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className="service-text">

                                <b>   Mechanical Vapor Recompression (MVRE) </b>
                                Mechanical vapour recompression (MVR) systems (also called MVR blowers)
                                recover and reuse energy normally lost through evaporation. Because of the
                                ability to use and upgrade wasted energy, MVR can significantly increase the
                                efficiency of industrial heating and evaporation processes. MVR is a proven
                                energy-saving evaporative concentration technology, which reduces evaporation
                                energy use by 90% or more. MVR Thermodynamic Cycle. MVR uses energy
                                recovered from the condensate to create a pure liquid distillate and a
                                concentrated product/waste.
                                <p>
                                    <b>Advantages:-</b>
                                </p>
                                <li className='sublist'> Steam Consumption in MVRE is between 10 – 20 % of TVR based evaporator</li>
                                <li className='sublist'>It occupies 30 – 40 % of space required for Conventional MEE</li>
                                <li className='sublist'>The requirement of cooling water as utility is very less thus saving
                                    the energy required for cooling tower</li>
                                <li className='sublist'>The Opex (Power + Steam) for MVRE is 40 % less than the Opex
                                    (Power + steam) for conventional MEE</li>
                                <li className='sublist'>   Since the steam condensate does not mix with the evaporated
                                    process condensate it does not add to the hydraulic load for
                                    upstream polishing treatment and so the polishing treatment
                                    becomes cheaper</li>

                            </div>
                        </div>

                        <div className='services-content' id='atfd'>
                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={ATFD} loading="lazy" alt="Agitated Thin Film Dryer (ATFD)" />

                            <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className="service-text">

                                <b>   Agitated Thin Film Dryer (ATFD) </b>
                                Agitated Thin Film Dryer (ATFD) is a highly efficient and essential piece of
                                equipment for achieving Zero Liquid Discharge (ZLD) in various industries. At
                                Ujjwal Engineers and Environmental Services, we understand the importance of
                                ATFD in separating salt from highly concentrated feeds.
                                Our ATFD system consists of several key components:
                                <li className='sublist'>Dryer with Scraper Assembly: This component includes a gear assembly,
                                    distribution plate, shaft with rotating blades (rotor), and an inner shell
                                    with a steam jacket.</li>
                                <li className='sublist'>Small Vapor Separator: This separates the water-vapor mixture, allowing
                                    for the removal of water particles.</li>
                                <li className='sublist'>Surface Condenser: This condenses the vapor, producing pure water that
                                    can be reused in various applications.</li>
                                <li className='sublist'>Blower: This maintains a negative pressure in the system and helps in the
                                    circulation of cooling water.</li>


                                <p>

                                    The ATFD process begins with the circulation of cooling water and the
                                    maintenance of negative pressure. The feed pump sends feed from the feed tank
                                    to the inside surface of the ATFD through the distribution plate, ensuring even
                                    distribution. Steam is then provided in the jacket, leading to conductive heat
                                    transfer and the evaporation of water from the concentrated liquid. The salt is
                                    precipitated out and deposited on the inner surface of the shell.
                                    The shaft with blades continuously rotates in the inner shell, maintaining a small
                                    clearance from the wall and removing the precipitated salt from the wall surface.
                                    This process results in salt with a maximum moisture content of 10-15%,
                                    achieving true Zero Liquid Discharge.
                                    By providing complete separation of water and salt, our ATFD system offers a
                                    highly efficient and effective solution for achieving ZLD in industries, ensuring
                                    minimal environmental impact and maximum resource efficiency.
                                </p>


                            </div>

                        </div>

                        <div className='services-content-alternate' id='stp'>
                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={STP} loading="lazy" alt="Sewage Treatment Plant (STP)" />
                            <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className="service-text">
                                <b>   Sewage Treatment Plant (STP) </b>
                                A sewage treatment plant (STP) is a facility, often including physical, chemical,
                                and biological processes, designed to receive and treat waste from domestic,
                                commercial, agricultural, and industrial sources.

                                <p>
                                    Ensure efficient treatment and reuse of wastewater with state-of-the-art STPs.
                                    <li>
                                        Advanced biological, chemical, and physical treatment processes.
                                    </li>
                                    <li>
                                        Compact and scalable designs for residential, commercial, and industrial use.
                                    </li>
                                    <li>
                                        Compliance with local and international discharge standards.
                                    </li>
                                    Transform wastewater into reusable resources with our STP solutions.

                                </p>
                            </div>
                        </div>


                        <div className='services-content' id='ro'>
                            <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" src={RO} loading="lazy" alt="Reverse Osmosis (Industrial) Plant" />
                            <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className="service-text">
                                <b>   Reverse Osmosis (Industrial) Plant </b>
                                Reverse Osmosis (RO) is a cutting-edge water purification technology that removes dissolved salts, impurities, and harmful contaminants, ensuring clean and safe water. It works by pushing water through a semi-permeable membrane, filtering out up to 99% of pollutants.

                                <p>

                                    <b>Why Choose Our RO Systems?</b>

                                    <li className='sublist'><b>High Purity Water: </b>Removes salts, chemicals, and bacteria.</li>
                                    <li className='sublist'><b>Cost-Effective & Eco-Friendly: </b>Reduces bottled water use.</li>
                                    <li className='sublist'><b>Safe & Reliable: </b>Delivers clean water for residential, commercial, and industrial needs.</li>

                                    <b>Applications:</b>
                                    <li className='sublist'>Residential Water Filtration</li>
                                    <li className='sublist'>Industrial & Manufacturing Processes</li>
                                    <li className='sublist'>Commercial Use in Hotels & Restaurants</li>
                                </p>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <QuickLinks />
        </section>
    )
}

export default TrunkyExecution