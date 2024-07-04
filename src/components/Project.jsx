import React, { useState } from 'react';
import { Styles } from '../utils/Style';
import { projects } from '../constant/index';
import Tilt from 'react-parallax-tilt';
import { SiGithub, SiNetlify } from 'react-icons/si';

const Project = () => {
    const [visibleProjects,setVisibleProjects] = useState(3);
    const [showAll,setShowAll] = useState(false);
     const toggleProjects = ()=>{
        if(showAll){
            setVisibleProjects(3);
        }
        else{
            setVisibleProjects(projects.length);
        }
        setShowAll(!showAll);
     }
    return (
        <div className='lg:mt-20' id='project'>
            <div className='flex flex-col lg:flex-row items-center pl-3 lg:pl-5 justify-center pt-3' >
                <span className={Styles.sectionHeadText}>
                    Projects
                </span>
                <hr className='w-[35%]' />
                <div className={Styles.sectionText}>
                The projects highlighted below demonstrate my skills and experience through practical examples of my work. Each project includes a brief description, along with links to the code repositories and live demos. These projects showcase my ability to tackle complex problems, utilize diverse technologies, and manage projects efficiently.
                </div>
            </div>
            <div className='flex flex-wrap lg:p-8 justify-evenly items-center'>
                {projects.slice(0,visibleProjects).map((project) => (
                    <Tilt key={project.name} className='w-[300px] h-[500px] flex flex-col justify-evenly shadow-2xl m-10 items-center  hover:shadow-green-400 shadow-gray-400 p-3 rounded-xl border-2 border-green-900'>
                        <div className='flex justify-center items-center mb-3'>
                            <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-green-500 flex justify-center items-center'>
                                <a href={project.source_deploy_link} target='_blank' rel='noopener noreferrer'>
                                    <SiNetlify className='text-3xl font-bold text-green-600' />
                                </a>
                            </div>
                            <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-green-500 flex justify-center items-center'>
                                <a href={project.source_code_link} target='_blank' rel='noopener noreferrer'>
                                    <SiGithub className='text-3xl font-bold text-green-600' />
                                </a>
                            </div>
                        </div>
                        <img src={project.img} alt={project.name} className='h-[200px] w-[250px] self-center border-2 border-green-100 rounded-2xl mb-3' />
                        <div className='lg:text-2xl text-xl text-green-600 font-extrabold'>
                            {project.name}
                        </div>
                        <div className='lg:text-center text-sm' >
                            <span className='text-black '>
                                {project.description}
                            </span>
                        </div>
                    </Tilt>
                ))}
                
            </div>
            <div className='flex justify-center items-center mt-2'>
            <button onClick={toggleProjects} className='bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-800'>
                {showAll ? 'ShowLess ' :"More"}
            </button>
            </div>
        </div>
    );
};

export default Project;
