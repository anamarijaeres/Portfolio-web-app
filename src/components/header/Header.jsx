import React from "react";
import './header.css'
import CTA from './CTA';
import ME from '../../assets/vesela.png';
import HeaderSocials from "./HeaderSocials";
import croatianMe from '../../assets/croatianme.png';


const Header = () =>{
    return(
        <header>
            <div className='container header__container'>
                <div className='header__content'>
                    <h5> Hi I am</h5>
                    <h1> Ana Marija Ereš</h1>
                    <h5 className='text-light'> Computer Scientist</h5>
                    <h6 className='text-light'> and so much more</h6>
                    <CTA/>
                    <HeaderSocials/>
                </div>

                <div className='header__image'>
                    <div className='me'>
                        <img src={ME} alt='me' className='happy__me' />
                        <div className="overlay">
                            <img src={croatianMe} alt='me' class='croatianme'/>
                        </div>
                    </div>

                    <a href='#contact' className='scroll__down'> Scroll Down </a>

                </div>

            </div>
        </header>
    )
}

export default Header;