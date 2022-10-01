import React from "react";
import './nav.css'
import {MdHomeFilled} from 'react-icons/md';
import {FiUser} from 'react-icons/fi';
import {FaGraduationCap} from 'react-icons/fa';
import {VscLibrary} from 'react-icons/vsc';
import {BiMessageSquareDots} from 'react-icons/bi';
import {useState} from 'react';
import {IoIosCodeWorking} from 'react-icons/io';
import { useEffect } from "react";


export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    let activeNav='#';

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset)


        }



        window.addEventListener('scroll', updatePosition)

        updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    console.log(window.readMoreClicked);
    if(window.readMoreClicked){
        if(scrollPosition>=0 && scrollPosition<500){
            activeNav='#';
        }
        else if(scrollPosition>=500 && scrollPosition<2300){
            activeNav='#about';
        }else if(scrollPosition>=2300 && scrollPosition<3200){
            activeNav='#experience';
        }else if(scrollPosition>=3200 && scrollPosition<4000){
            activeNav='#projects';
        }else if(scrollPosition>=4000 && scrollPosition<4800){
            activeNav='#portfolio';
        }else{
            activeNav='#contact';
        }

    }else{
        if(scrollPosition>=0 && scrollPosition<500){
            activeNav='#';
        }
        else if(scrollPosition>=500 && scrollPosition<1300){
            activeNav='#about';
        }else if(scrollPosition>=1300 && scrollPosition<2000){
            activeNav='#experience';
        }else if(scrollPosition>=2000 && scrollPosition<2800){
            activeNav='#projects';
        }else if(scrollPosition>=2800 && scrollPosition<3600){
            activeNav='#portfolio';
        }else{
            activeNav='#contact';
        }
    }


    return [scrollPosition,activeNav]
}



const Nav = () =>{
    /*let [activeNav,setActiveNav] = useState('#')*/
    let activeNav = useScrollPosition()
/*    let activeNav=useActivePosition()*/
    console.log(activeNav[1])



    return(



        <nav>



            <a href='#'  onClick={()=> activeNav[1]='#'} className={(activeNav[1]==='#'  ) ? 'active': ''}><MdHomeFilled/></a>
            <a href='#about' onClick={()=> activeNav[1]='#about' }  className={(activeNav[1]==='#about'  )? 'active': ''}><FiUser/></a>
            <a href='#experience' onClick={()=> activeNav[1]='#experience'}  className={activeNav[1]==='#experience'? 'active': ''}><IoIosCodeWorking/></a>
            <a href='#projects' onClick={()=> activeNav[1]='#projects'}  className={activeNav[1]==='#projects'? 'active': ''}><FaGraduationCap/></a>
            <a href='#portfolio' onClick={()=> activeNav[1]='#portfolio'}  className={activeNav[1]==='#portfolio'? 'active': ''}><VscLibrary/></a>
            <a href='#contact' onClick={()=> activeNav[1]='#contact'}  className={activeNav[1]==='#contact'? 'active': ''}><BiMessageSquareDots/></a>
        </nav>

    )
}

export default Nav;