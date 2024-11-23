import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import QuickLinks from './QuickLinks'


import emailjs from '@emailjs/browser'


import ContactUs from "../assets/Contact-Us.png"


const Contact = () => {
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    const service_api = import.meta.env.VITE_REACT_APP_EMAIL_SERVICE;
    const service_template_Id = import.meta.env.VITE_REACT_APP_SERVICE_TEMPLATE;
    const service_public_key = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;


    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        from_phn_number: "",
        message: ''
    });

    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: [value] })

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            `${service_api}`,
            `${service_template_Id}`,
            {
                from_name: form.name,
                to_name: "UJJWAL ENGINEERS & ENVIRONMENTAL SERVICES",
                from_email: form.email,
                from_phn_number: form.from_phn_number,
                to_email: "info@ujjwalengineers.com",
                message: form.message,
            },

            `${service_public_key}`
        )
            .then(() => {
                setLoading(false);
                alert("Thank you. I Will Get Back To You As Soon As Possible.")

                setForm({
                    name: '',
                    email: '',
                    from_phn_number: "",
                    message: '',
                }, (error) => {
                    setLoading(false)

                    console.log(error)
                    alert("Something Went Wrong!")
                })
            })

    }

    return (
        <section>
            <Navbar />
            <div>
                <div className='section-title'>
                    <h1 >Contact Us</h1>
                </div>

                <div className='contact-info'>

                    <div className='image-container'>

                        <img loading="lazy" data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" className='contactimg' src={ContactUs} alt="importance of company" />
                    </div>

                    <div data-aos="fade-in" data-aos-once='true' data-aos-duration="2000" className='handle-form'>
                        <form ref={formRef}
                            onSubmit={handleSubmit}>
                            <input type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required placeholder='Full Name' />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required placeholder='Email ID' />
                            <input
                                name="from_phn_number"
                                value={form.from_phn_number}
                                onChange={handleChange}
                                required type='number' placeholder='Mobile No.' />
                            <textarea name="message"
                                value={form.message}
                                onChange={handleChange} placeholder='Enquiry For' id="" cols="30" rows="5">
                            </textarea>
                            <button className='form-btn'>Submit</button>

                        </form>

                    </div>



                    <div data-aos="fade-left" data-aos-once='true' data-aos-duration="2000" className='text-address'>
                        <ul>
                            <h1>Ujjwal Engineers & Environmental Services</h1>
                            {/* <h3>Environmental organization</h3> */}
                            <p>
                                103, 14A, Kailash Nagar Rd, Kailash Nagar, Shivaji Nagar, Ambernath, Maharashtra 421501
                            </p>

                            <div className='contact-address'>

                                <Link to="mailto:info@ujjwalengineers.com">info@ujjwalengineers.com</Link>
                                <Link to="whatsapp://send/?phone=+919867215033">+91 9867215033</Link>
                            </div>

                        </ul>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9222860915356!2d73.18534817510357!3d19.198596382031322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be793006685e40b%3A0xe2684d3774f88041!2sUjjwal%20Engineers%20and%20Environmental%20Services!5e0!3m2!1sen!2sin!4v1712151137540!5m2!1sen!2sin" className='google-maps' allowFullScreen loading="lazy" ></iframe>
                    </div>






                </div>

            </div>






            <QuickLinks />
        </section>
    )
}

export default Contact