import React, { useState } from 'react'
import Tilt from "react-parallax-tilt"
import { Styles } from '../utils/Style';
import { services } from '../constant';
// import { motion } from "framer-motion";
import profile from "../assets/ProfilePic.jpg"
import "./Style.css"
const Overview = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col md:flex-row items-center justify-center pt-3 w-full ' id='about'>
                <div className='flex flex-col items-start w-1/2 lg:pl-5 pl-4 '>
                    <span className={Styles.sectionHeadText}>
                        About me
                    </span>
                    <hr className='lg:w-[35%] w-full mx-5' />
                    <div className={`Styles.sectionText`}>
                        <p>
                            A dedicated MERN stack developer with a passion for building dynamic and scalable web applications. My expertise lies in MongoDB, Express.js, React, and Node.js, allowing me to develop full-stack solutions that are both powerful and efficient.
                            {isExpanded &&
                                (
                                    <>
                                        <br />
                                        My journey into web development began with a fascination for how digital experiences are created, which quickly evolved into a career dedicated to mastering the latest technologies. Over the years, I've built a diverse portfolio of projects that showcase my ability to create responsive, user-friendly, and performant web applications.
                                        <br />
                                        I thrive on solving complex problems and am always eager to learn new skills and technologies to stay ahead in this fast-paced industry. When I'm not coding, I enjoy exploring new tech trends, contributing to open-source projects, and delving into the world of design.
                                        Let's collaborate to bring your ideas to life with the power of the MERN stack!
                                    </>
                                )}
                            <button className="text-green-700 underline" onClick={toggleExpand}>
                                {isExpanded ? 'Read Less ' : 'Read More'}
                            </button>
                        </p>
                    </div>
                </div>
                <div className='w-1/2 flex justify-center border-violet-400 mt-5 '>
                    <img src={profile} className='lg:w-[355px] lg:h-[355px] md:w-[305px] md:h-[240px] element object-cover rounded-lg' alt="Profile" />
                </div>
            </div>

            {/* For services */}
            <div className='flex flex-col lg:flex-row items-center lg:pl-5 md:pr-8 justify-center lg:pt-3' >
                <span className={Styles.sectionHeadText}>
                    My Services
                </span>
            </div>
            <hr className='lg:w-[35%] w-full mx-5' />
            <div className='flex flex-wrap justify-center'>
                {
                    services.map((services) => (
                        <div>
                            <Tilt

                                key={services.icons}
                                className='parallax-effect-glare-scale rounded-2xl '
                                perspective={500}
                                glareColor='fed7aa'
                                glareEnable={true}
                                glareMaxOpacity={0.50}
                                scale={1.02}
                                gyroscope={true}>
                                <div className='p-3 m-3 flex-col justify-evenly items-center'>
                                    <img src={services.icons} alt={services.title} className='h-[150px] w-[150px]' />
                                    <div className='m-5 text-green-700'>
                                        {services.title}
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Overview
