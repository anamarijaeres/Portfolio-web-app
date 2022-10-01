import React, {useState} from "react";
import './portfolio.css'
import IMG1 from '../../assets/microser.png'
import IMG2 from '../../assets/nlp.jpg'
import IMG3 from '../../assets/webapp.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const data=[
    {
        id:1,
        image:IMG1,
        title:'Microservices -A simple distributed system based on microservices and containers',
        github: 'https://github.com/anamarijaeres/Microservices',
        tools: 'kubernetes, docker, spring boot, java'
    },
    {
        id:2,
        image:IMG2,
        title:'NLP - Analysis of the Relationship between Movie Titles and Reviews',
        github: 'https://github.com/anamarijaeres/Analysis-of-the-Relationship-between-Movie-Titles-and-Corresponding-Ratings-and-Reviews',
        tools: 'python, keras, tensorflow, numpy'
    },
    {
        id:3,
        image:IMG3,
        title:'Web application for managing client appointments in a rehabilitation clinique',
        github: 'https://github.com/anamarijaeres/Web-application-for-managing-client-appointments-in-a-rehabilitation-clinique',
        tools:'react, javascript, spring boot, java, mySQL'
    },


]





const Portfolio = () =>{

    const initialValue = [false,false,false,false];
    let [stateOptions, setStateValues] = useState(initialValue);



    const handleStates= (number)=>{
        console.log(number)
        let changeTo = new Array(4);
        for (let i = 0; i < changeTo.length; i++) {
            if(i===number+1){
                changeTo[i]= !stateOptions[i];
            }else {
                changeTo[i] = stateOptions[i];
            }
        }
        setStateValues(changeTo);
    }

    return(
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio-intro'>
                <p className='text-light portfolio__intro'>
                    These are some of my most recent projects that I am exceptionally proud of. Click details to see which tools and technologies I used.
                </p>
            </div>
            <br/>
            <div className='container portfolio__container'>
                {
                    data.map(({id,image,title,github,tools})=>{

                        return(
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item__piccontainer'>
                                    <div className='portfolio__item-image'>
                                        <img src={image} alt={title }/>
                                    </div>
                                    <h3>{title}</h3>
                                </div>
                                <div className='details__container'>
                                    <div className='details__button' onClick={()=>handleStates(parseInt(id)-1)}>
                                        Details

                                    </div>
                                    <div className={stateOptions[id]===true? 'opened':'closed'}>
                                        {tools}
                                    </div>
                                </div>
                                <br/>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn btn__portfolio'>Github</a>
                                </div>
                            </article>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Portfolio;