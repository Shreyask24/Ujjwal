import React, { useRef, useState } from 'react'
import Navbar from './Navbar'
import QuickLinks from './QuickLinks'

import emailjs from '@emailjs/browser'

import Career from '../assets/Career.jpg'

const Carrer = () => {
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    const service_api = import.meta.env.VITE_REACT_APP_EMAIL_SERVICE;
    const carrer_service_api = import.meta.env.VITE_REACT_APP_CAREER_SERVICE_TEMPLATE;
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
            `${carrer_service_api}`,
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
                    <h1 >Career</h1>
                </div>

                <div className='carrer-info'>

                    <div data-aos="fade-right" data-aos-once='true' data-aos-duration="2000" className='career-image-container'>
                        <img className='careerimg' loading="lazy" src={Career} alt="grow together" />
                    </div>


                    <div data-aos="fade-left" data-aos-once='true' data-aos-duration="2000" className='carrer-handle-form'>
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
                                onChange={handleChange} placeholder='Cover Letter' id="" cols="30" rows="5">
                            </textarea>
                            <button className='form-btn'>Submit</button>
                        </form>
                    </div>

                </div>


            </div>






            <QuickLinks />
        </section>
    )
}

export default Carrer