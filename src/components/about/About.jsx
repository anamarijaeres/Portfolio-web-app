import React from "react";
import './about.css';
import ME from '../../assets/gradme.png';
import {GiAchievement} from 'react-icons/gi';
import {IoMdSchool} from 'react-icons/io';
import '../../index.css';
import '../experience/experience.css';

window.readMoreClicked = false;


const About = () =>{




    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
        window.readMoreClicked = !window.readMoreClicked;

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.background='transparent';
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
    return(
        <section id='about'>
            <h5>Get to know</h5>
            <h2> About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='About Image'/>
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <GiAchievement className='about__icon'/>
                            <h5> Experience</h5>
                            <small> Research Intern </small>
                        </article>
                        <article className='about__card'>
                            <IoMdSchool className='about__icon'/>
                            <h5> Education</h5>
                            <small> 5 year degree in Computer Science </small>
                        </article>
                        <article className='about__card'>
                            <GiAchievement className='about__icon'/>
                            <h5> Projects</h5>
                            <small> 10+completed project </small>
                        </article>
                    </div>
                    <p className='aboutme__intro'>
                        Are you interested in finding out what is hiding behind 'and so much more' text from the previous section?
                        <br/>
                        <br/>
                        Let's dive into my short autobiography!
                        <br/>
                        <br/>
                        I am a computer science graduate, music enthusiast and a dancer.
                        <br/>

                        When I asked people close to me to describe me in three words, their most common
                        answers were creative/curious, versatile and determined.
                        <br/>
                        <br/>
                        As I was a very curious child, I tried many different sports like swimming,
                        volleyball, basketball, tennis and also dancing.
                        <br/>
                        After trying out all possible activities, I knew that dancing was the one I wanted to devote my time to.
                        My passion for dancing still persists up until today, which shows that once I find something that I am truly
                        passionate about I always <span id="dots">...</span><span id="more"> follow through.
                        <br/>
                        <br/>
                        {/*Since I was very curious I liked studying new things, which later on helped me to
                        achieve a high GPA.*/}

                        My approach about finding myself remained the same once I started studying Computer Science.
                        At the beginning of studies, like the majority of students, I didn't know what I wanted to do in my life
                        since everything seemed equally interesting.
                        I realized that having good grades was a way to learn as much as I can about different fields in Computer Science
                        and that it would provide me the opportunity to do what I like the most once I finish college.

                        <br/>
                        <br/>
                        But I didn't only rely on my high GPA. If you look at my experience, you will notice that I have many
                        different skills obtained from extracurricular courses and internships. During my bachelor's, I enrolled in additional courses such as
                        iOS Application Development, Game Development which leaned more towards the software development, but  during my master's, I also took
                        courses such as Statistical Data Analysis, ML which leaned more towards the data science.
                        <br/>
                        <br/>
                        As you can see my academic/career path was very dynamic and as unpredictable as the Bitcoin value.

                        The skills I gained made me adaptable to new challenges and a versatile person I am today.
                        <br/>
                        {/*Since I liked Software engineering course and at the time I was dancing in a newly
                        opened dance studio, I decided to enroll in an additional course called iOS Application Development to make a mobile application for the studio.
                        During my masters I was leaning more towards Data Science since it was closely related to one of my evergreen favourite subject
                        Mathematics.

                        One of the disadvantages of having an interest in a lot of different areas is having to invest time and effort to try them all out.
                        This is why in my last position I was working as a Research Intern at IMDEA Software institute with the topic in cryptography.
                        Now that I am a graduated Computer Scientist I realized that I missed being a developer and therefore I am looking for a software developer role.*/}


                        <br/>
                        I created this website portfolio because I felt that the cv did not have the capacity to represent my personality in a way this website can.
                        Even though I never actually had any courses about how to be a Frontend Developer, I rolled up my sleeves read the documentation
                        and watched tutorials on how to make my own website to provide you with the better experience of getting to now me.
                        This is how determined I am once I set my mind onto something.
                        <br/>
                        <br/>
                        To make the website more fun,  as you may notice, I decided to do it Spotify themed. Spotify
                        is the app I use the most and listening to music plays a big part in my life.
                        <br/>
                        <br/>
                        I am now at the beginning of a new chapter in my life and I highly value people that encourage my growing mindset and enthusiasm for
                        taking up new challenges.
                        If you recognised yourself in this description and you want me to be as passionate about the job as much as I am about Spotify and dancing,
                        hit the 'Let's talk' button and show me what you got for me.
                    </span> <div onClick={myFunction} id="myBtn"  className='readmore__button'>Read more</div>

                    </p>

                    <a href='#contact' className='btn btn-primary'> Let's Talk</a>

                </div>
            </div>

        </section>
    )
}

export default About;

