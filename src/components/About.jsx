import React from 'react'
import profile from "../assets/overview.jpg";
import {Styles} from "../utils/Style"
import Resume from "../assets/Resume_SoumyaRayast.pdf";
import { FaDownload } from "react-icons/fa6";
import "../App.css"
const About = () => {
  return (
    <div className='flex flex-wrap justify-center items-center mt-10 p-10' id='home'>
        <div className='flex-1 py-4 ml-10 '>
            <span className={Styles.heroHeadText}>
                Hi,I'm 
                <span className='text-black'>
                Soumya Rayast
                </span>
                <br />
                <span className={Styles.heroSubText}>
                    MERN Stack Developer | 
                    Web Designer
                </span>
            </span>
            <br />
            <div className='w-[14rem]'>
                <a
                href={Resume}
                download="Resume_SoumyaRayast"
                target='blank'
                rel="noreferrer"
                >
                    <div className='p-4 mt-2 w-[13rem] rounded-xl text-green-600 flex justify-center border-2 border-green-800 hover:border-black hover:shadow-green-800 hover:bg-green-200 hover:text-black'>
                    <FaDownload className='text-lg mr-3 mt-1 text-green-500 hover:text-black '/> Resume
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
