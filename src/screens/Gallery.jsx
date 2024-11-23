import React from 'react'

import AshuOrganics from "../assets/Ashu-Organics.png"
import UPL from "../assets/UPL-Secondary.png"
import Lupin1 from "../assets/Lupin-1.png"
import Lupin4 from "../assets/Lupin-4.png"

import SpectrumNashik from "../assets/Spectrum-Nashik.png"
import SpectrumNashik2 from "../assets/Spectrum-Nashik2.png"
import SpectrumEther from "../assets/Spectrum-Ether.png"
import DeepakTaloja from "../assets/Deepak-Taloja.png"


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

import Navbar from './Navbar'
import QuickLinks from './QuickLinks'
import { Link } from 'react-router-dom'


const Gallery = () => {
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    return (
        <section>
            <div className='gallery'>

                <Navbar />
                <div className='section-title'>
                    <h1>Gallery</h1>
                </div>

                <div data-aos="fade-in" className='gallery-images'>

                    <div >
                        <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" loading="lazy" src={AshuOrganics} alt="Ashu Organics" />
                        <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" loading="lazy" src={UPL} alt="UPL" />

                    </div>

                    <div>

                        <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" loading="lazy" src={SpectrumNashik} alt="SpectrumNashik" />
                        <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" loading="lazy" src={SpectrumNashik2} alt="SpectrumNashik2" />

                    </div>
                    <div>
                        <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" loading="lazy" src={Lupin1} alt="Lupin" />
                        <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" loading="lazy" src={Lupin4} alt="Lupin" />

                    </div>

                    <div>
                        <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" loading="lazy" src={SpectrumEther} alt="Spectrum" />
                        <img data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" loading="lazy" src={DeepakTaloja} alt="Factory" />
                    </div>

                </div>



                <div className='gallery-marquee'>
                    <div className='section-title'>

                        <h1>Client Portfolio</h1>
                    </div>
                    <div className='marquee-heading'>
                        <h1>Empowering Success Through Collaboration and Service Excellence.</h1>
                    </div>



                    <div className='marquee-section'>


                        <marquee behavior="scroll" direction="left"
                            scrollamount="6" loop="infinite">

                            <img src={logo16} alt="anthea group" />
                            <img src={logo17} alt="future bridge" />
                            <img src={logo18} alt="bhor" />
                            <img src={logo21} alt="drt anthea aroma chemicals" />
                            <img src={logo22} alt="hse" />


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

                        </marquee>

                    </div>

                </div>




                <div className='section-title'>

                    <h1>Important Links</h1>
                </div>
                <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className='impLinks-section'>
                    <ul>

                        <li><Link to="https://www.india.gov.in" target='_blank'>National Portal of India</Link></li>
                        <li><Link to="https://missionlife-moefcc.nic.in" target='_blank'>Mission Life</Link></li>
                        <li><Link to="https://sdgs.un.org" target='_blank'>The United Nations Department of Economic and Social Affairs (UNDESA)</Link></li>
                        <li><Link to="https://moef.gov.in" target='_blank'>The Ministry of Environment, Forest and Climate Change (MoEFCC)</Link></li>
                        <li><Link to="https://parivesh.nic.in" target='_blank'>PARIVESH Portal</Link></li>
                        <li><Link to="https://cpcb.nic.in" target='_blank'>The Central Pollution Control Board (CPCB)</Link></li>
                        <li><Link to="https://mpcb.gov.in" target='_blank'>The Maharashtra Pollution Control Board (MPCB)</Link></li>
                        <li><Link to="https://www.ecmpcb.in" target='_blank'>MPCB Single Window Portal for CTO/CTE</Link></li>
                        <li><Link to="https://gpcb.gujarat.gov.in" target='_blank'>The Gujarat Pollution Control Board (GPCB)</Link></li>
                        <li><Link to="https://qcin.org" target='_blank'>The Quality Council of India (QCI)</Link></li>
                        <li><Link to="https://nabet.qci.org.in" target='_blank'>National Accreditation Board for Education and Training (NABET)</Link></li>
                        <li><Link to="https://nabl-india.org" target='_blank'>National Accreditation Board for Testing and Calibration Laboratories (NABL)</Link></li>
                        <li><Link to="https://nabh.co" target='_blank'>National Accreditation Board for Hospitals &amp; Healthcare Providers (NABH)</Link></li>
                        <li><Link to="https://www.iso.org" target='_blank'>The International Organization for Standardization (ISO)</Link></li>
                        <li><Link to="https://igbc.in" target='_blank'>Indian Green Building Council</Link></li>
                        <li><Link to="https://maitri.mahaonline.gov.in" target='_blank'>Maharashtra Industry, Trade and Investment Facilitation Cell (MAITRI)</Link></li>
                        <li><Link to="https://peso.gov.in" target='_blank'>Petroleum &amp; Explosives Safety Organization (PESO)</Link></li>
                        <li><Link to="https://pib.gov.in" target='_blank'>Press Information Bureau (PIB)</Link></li>
                        <li><Link to="https://igbc.in" target='_blank'>Indian Green Building Council</Link></li>
                        <li><Link to="https://www.makeinindia.com" target='_blank'>Make in India Portal</Link></li>
                        <li><Link to="https://mahadish.in" target='_blank'>The Directorate, Industrial Safety and Health, Maharashtra</Link></li>
                        <li><Link to="https://dish.gujarat.gov.in" target='_blank'>The Directorate, Industrial Safety and Health, Gujarat</Link></li>
                        <li><Link to="https://www.fda.gov" target='_blank'>Food and Drug Administration (US-FDA)</Link></li>

                    </ul>


                </div>

                <QuickLinks />
            </div>
        </section>
    )
}

export default Gallery