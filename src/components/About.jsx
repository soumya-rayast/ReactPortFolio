import React from 'react'
import profile from "../assets/profile1.jpg";
import {Styles} from "../utils/Style"
import Resume from "../assets/Resume_SoumyaRayast.pdf";
import { FaDownload } from "react-icons/fa6";
import "../App.css"
const About = () => {
  return (
    <div className='flex flex-wrap justify-center items-center mt-10 p-10' id='Home'>
        <div className='flex-1 py-4'>
            <span className={Styles.heroHeadText}>
                Hi,I'm 
                <span className='text-orange-600'>
                Soumya Rayast
                </span>
                <br />
                <span className={Styles.heroSubText}>
                    I am a MERN Stack Developer 
                    <br />
                    Web Designer
                </span>
            </span>
            <br />
            <div className='w-[14rem]'>
                <a
                href={Resume}
                download="Resume"
                target='blank'
                rel="noreferrer"
                >
                    <div className='p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-2 border-orange-500 hover:border-violet-500 hover:shadow-pink-500'>
                    <FaDownload className='text-lg mr-3 mt-1 text-orange-500'/> Resume
                    </div>
                </a>
            </div>
        </div>
        <div className='flex flex-wrap justify-center items-center'>
            <img src={profile} alt="profile" className='element object-contain p-4 w-[520px] h-[520px]  '/>
        </div>
    </div>
  )
}

export default About
