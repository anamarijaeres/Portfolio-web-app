import React from "react";
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'


const Footer = () =>{
    return(
        <footer>
            <a href='#' className='footer__logo'></a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a> </li>
                <li><a href='#about'>About</a> </li>
                <li><a href='#experience'>Experience</a> </li>
                <li><a href='#services'>Services</a> </li>
                <li><a href='#portfolio'>Portfolio</a> </li>
                <li><a href='#contact'>Contact</a> </li>
            </ul>

          {/*  <div className='footer__socials'>
                <a href='https://instagram.com'><AiOutlineInstagram/></a>
            </div>*/}




        </footer>
    )
}

export default Footer;