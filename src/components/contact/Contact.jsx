import React from "react";
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () =>{

    const form=useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sm0j8ep', 'template_c2gcl4c', form.current, 'GnNzdrZfGmQOFdpf6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };




    return(
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>


            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>ana.marija.eres@gmail.com</h5>

                        <a href='mailto:ana.marija.eres@gmail.com' target='_blank'> Send a message</a>
                    </article>

                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+385*******00</h5>
                        <a href='https://api.whatsapp.com/send?phone=+385996604400' target='_blank'>Send a message</a>
                    </article>
                </div>
                {/*End of contact options*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows='7' placeholder='Your message' required ></textarea>
                    <button type='submit' className='btn btn-primary'> Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
