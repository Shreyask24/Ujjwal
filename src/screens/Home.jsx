import React from 'react'
import { Link } from 'react-router-dom'

import Leadership from "../assets/Leadership.png"
import IntroVideo from "../assets/intro.mp4"

import "../index.css"
import Navbar from './Navbar';
import QuickLinks from './QuickLinks'

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

                <QuickLinks />


            </div>
        </section>
    )
}

export default Home