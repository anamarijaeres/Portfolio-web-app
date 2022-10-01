import React, {useState} from "react";
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';
import {MdDownloadForOffline} from 'react-icons/md';
import {FaHeart} from 'react-icons/fa';
import {FiHeart} from 'react-icons/fi';

const Experience = () =>{
    let [open,setOpen] = useState(false);
    let [open2,setOpen2] = useState(false);
    let [open3,setOpen3] = useState(false);

    const handleClick = () => setOpen(!open);

    const handleClick2 = () => setOpen2(!open2);
    const handleClick3 = () => setOpen3(!open3);
    return(
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2> My Experience</h2>
            <div className='container experience__title-icon'>
                <MdDownloadForOffline />

            </div>
            <div className='container experience-intro'>
                <p className='text-light'>
                    During my bachelor's, in most of my project I was a Backend Developer and rarely, if needed, Frontend.
                    During my master's, I was more oriented on developing my skills as a Data Scientist. If you like any of the services that I am offering,
                    like/heart them to see the specific skills I obtained.
                </p>
            </div>
            <br/>
            <div  className='container experience__container'>

                <div onClick={()=> handleClick2()} className='experience__backend'>
                    <div>
                        <FiHeart onClick={()=> handleClick2()}className={open2===true ? 'skills__open__experience-icon': 'skills__close__experience-icon'} />
                        <FaHeart onClick={()=> handleClick2()}className={open2===true ? 'skills__open__experience-icon2': 'skills__close__experience-icon2'} />

                    </div>


                    <h3 onClick={()=> handleClick2()}>
                        Backend Developer

                    </h3>
                    <div className={open2===true ? 'skills__open': 'skills__close'}>
                    <article  className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4> Java</h4>
                            <small className='text-light'> Experienced 4+ yrs</small>
                            <div className="container__skill">
                                <div className="veryexperienced"></div>
                            </div>
                        </div>
                    </article>
                    <article  className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4> Python</h4>

                            <small className='text-light'> Experienced  3+ yrs</small>

                            <div className="container__skill">
                                <div className="experienced"></div>

                            </div>
                        </div>
                    </article>
                    <article  className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Git</h4>
                            <small className='text-light'> Intermediate  2+ yrs</small>
                            <div className="container__skill">
                                <div className="intermediate"></div>
                            </div>
                        </div>
                    </article>
                    <article  className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4> MySQL</h4>
                            <small className='text-light'> Intermediate  2+ yrs </small>
                            <div className="container__skill">
                                <div className="intermediate"></div>
                            </div>
                        </div>
                    </article>

                    </div>
                </div>
                <div onClick={()=> handleClick3()} className='experience__frontend'>
                    <div>
                        <FiHeart onClick={()=> handleClick3()}className={open3===true ? 'skills__open__experience-icon': 'skills__close__experience-icon'} />
                        <FaHeart onClick={()=> handleClick3()}className={open3===true ? 'skills__open__experience-icon2': 'skills__close__experience-icon2'} />

                    </div>


                    <h3 onClick={()=> handleClick3()}> Data Scientist</h3>

                    <div className={open3===true ? 'skills__open': 'skills__close'}>
                        <article  className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4> Pandas</h4>
                                <small className='text-light'> Experienced 3+ yrs </small>
                                <div className="container__skill">
                                    <div className="experienced"></div>
                                </div>
                            </div>
                        </article>

                        <article  className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4> R</h4>
                                <small className='text-light'> Intermediate 2+ yrs </small>
                                <div className="container__skill">
                                    <div className="intermediate"></div>
                                </div>
                            </div>
                        </article>
                        <article  className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4> Tensorflow</h4>
                                <small className='text-light'> Intermediate 2+ yrs </small>
                                <div className="container__skill">
                                    <div className="intermediate"></div>
                                </div>
                            </div>
                        </article>
                        <article  className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4> Keras</h4>
                                <small className='text-light'> Basic 1+ yrs </small>
                                <div className="container__skill">
                                    <div className="basic"></div>
                                </div>
                            </div>

                        </article>

                    </div>
                </div>
                <div onClick={()=> handleClick()} className='experience__frontend'>

                    <div>
                        <FiHeart onClick={()=> handleClick()}className={open===true ? 'skills__open__experience-icon': 'skills__close__experience-icon'} />
                        <FaHeart onClick={()=> handleClick()}className={open===true ? 'skills__open__experience-icon2': 'skills__close__experience-icon2'} />

                    </div>

                    <h3 onClick={()=> handleClick()}>
                        Frontend Developer

                    </h3>


                    <div className={open===true ? 'skills__open': 'skills__close'}>
                        <article  className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4> Javascript</h4>
                                <small className='text-light'> Intermediate 2+ yrs </small>
                                <div className="container__skill">
                                    <div className="intermediate"></div>
                                </div>
                            </div>

                        </article>
                        <article  className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4> React</h4>
                                <small className='text-light'> Intermediate 2+ yrs </small>
                                <div className="container__skill">
                                    <div className="intermediate"></div>
                                </div>
                            </div>
                        </article>


                        <article  className='experience__details'>

                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>

                                <h4> HTML</h4>
                                <small className='text-light'> Basic 1+ yrs </small>
                                <div className="container__skill">
                                    <div className="basic"></div>
                                </div>
                            </div>
                        </article>

                        <article  className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h4> CSS</h4>
                                <small className='text-light'> Basic 1+ yrs </small>
                                <div className="container__skill">
                                    <div className="basic"></div>
                                </div>
                            </div>
                        </article>

                    </div>
                </div>

            </div>



        </section>
    )
}

export default Experience;