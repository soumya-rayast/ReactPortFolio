import React from 'react'
import Tilt from "react-parallax-tilt"
import { Styles } from '../utils/Style';
import { tech, services } from '../constant';
// import { motion } from "framer-motion";
import profile from "../assets/ProfilePic.jpg"
import "./Style.css"
const Overview = () => {
    return (
        <div className='flex flex-col items-center'>
           <div className='flex flex-col md:flex-row items-center justify-center pt-3 w-full ' id='overview'>
                <div className='flex flex-col items-start w-1/2 pl-5'>
                    <span className={Styles.sectionHeadText}>
                        About me
                    </span>
                    <hr className='w-[35%]' />
                    <div className={Styles.sectionText}>
                        A dedicated MERN stack developer with a passion for building dynamic and scalable web applications. My expertise lies in MongoDB, Express.js, React, and Node.js, allowing me to develop full-stack solutions that are both powerful and efficient.
                        My journey into web development began with a fascination for how digital experiences are created, which quickly evolved into a career dedicated to mastering the latest technologies. Over the years, I've built a diverse portfolio of projects that showcase my ability to create responsive, user-friendly, and performant web applications.
                        <br />
                        I thrive on solving complex problems and am always eager to learn new skills and technologies to stay ahead in this fast-paced industry. When I'm not coding, I enjoy exploring new tech trends, contributing to open-source projects, and delving into the world of design.
                        Let's collaborate to bring your ideas to life with the power of the MERN stack!
                    </div>
                </div>
                <div className='w-1/2 flex justify-center border-violet-400 mt-5'>
                    <img src={profile} className='w-[425px] h-[425px] element object-cover ' alt="Profile" />
                </div>
            </div>

            {/* For services */}
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
                                    <div className='m-5 text-violet-800'>
                                        {services.title}
                                    </div>
                                </div>
                            </Tilt>
                        </div>
                    ))
                }
            </div>

            {/* for tools and tech */}

            <div className='flex flex-wrap justify-center items-center'>
                {tech.map((tech) => (
                    <div
                        key={tech.name}
                        className='m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-violet-400
                    hover:shadow-orange-300 flex flex-col justify-center items-center'
                    >
                        <img src={tech.icons} alt={tech.name} className='p-2 w-[60px] h-[60px] ' />
                        <div className="flex text-violet-600 justify-center mt-2">
                            {tech.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Overview
