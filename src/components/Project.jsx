import React, { useState, useEffect } from 'react';
import { Styles } from '../utils/Style';
import { projects } from '../constant/index';
import Tilt from 'react-parallax-tilt';
import { SiGithub } from 'react-icons/si';
import { PiShareNetwork } from 'react-icons/pi';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Current visible project index
    const [visibleProjects, setVisibleProjects] = useState(3); // Number of projects to display at a time

    // Handle responsive number of visible projects
    const handleResize = () => {
        if (window.innerWidth >= 1024) {
            setVisibleProjects(3); // Large screens
        } else if (window.innerWidth >= 768) {
            setVisibleProjects(2); // Medium screens
        } else {
            setVisibleProjects(1); // Small screens
        }
    };

    useEffect(() => {
        handleResize(); // Set initial count
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextProjects = () => {
        // Move forward in the project list
        if (currentIndex + visibleProjects < projects.length) {
            setCurrentIndex(currentIndex + visibleProjects);
        }
    };

    const prevProjects = () => {
        // Move backward in the project list
        if (currentIndex - visibleProjects >= 0) {
            setCurrentIndex(currentIndex - visibleProjects);
        }
    };

    return (
        <div className='lg:mt-20' id='project'>
            {/* Header */}
            <div className='flex flex-col lg:flex-row items-center pl-3 lg:pl-5 justify-center pt-3'>
                <span className={Styles.sectionHeadText}>Projects</span>
                <hr className='w-[35%]' />
                <div className={Styles.sectionText}>
                    The projects highlighted below demonstrate my skills and experience through practical examples of my work. Each project includes a brief description, along with links to the code repositories and live demos. These projects showcase my ability to tackle complex problems, utilize diverse technologies, and manage projects efficiently.
                </div>
            </div>

            {/* Projects Container */}
            <div className='relative flex items-center justify-center mt-10  overflow-hidden'>
                {/* Previous Button */}
                <button
                    onClick={prevProjects}
                    disabled={currentIndex === 0}
                    className={`absolute left-0 z-10 p-2 ml-2 text-white text-2xl bg-green-600 rounded-full shadow-lg hover:bg-green-700 ${
                        currentIndex === 0 && 'opacity-50 cursor-not-allowed'
                    }`}
                >
                    <MdNavigateBefore />
                </button>

                {/* Projects Row */}
                <div className='flex space-x-6 mt-10 mb-10'>
                    {projects
                        .slice(currentIndex, currentIndex + visibleProjects)
                        .map((project) => (
                            <Tilt
                                key={project.name}
                                className='w-[90%] lg:w-[300px] ml-5 flex flex-col justify-evenly shadow-2xl items-center hover:shadow-green-400 shadow-gray-400 p-3 rounded-xl border-2 border-green-900 flex-shrink-0'>
                                {/* Project Links */}
                                <div className='flex justify-center items-center mb-3'>
                                    <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-green-500 flex justify-center items-center'>
                                        <a
                                            href={project.source_deploy_link}
                                            target='_blank'
                                            rel='noopener noreferrer'>
                                            <PiShareNetwork className='text-3xl font-bold text-green-600' />
                                        </a>
                                    </div>
                                    <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-green-500 flex justify-center items-center'>
                                        <a
                                            href={project.source_code_link}
                                            target='_blank'
                                            rel='noopener noreferrer'>
                                            <SiGithub className='text-3xl font-bold text-green-600' />
                                        </a>
                                    </div>
                                </div>
                                {/* Project Image */}
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    className='h-[200px] w-[250px] self-center border-2 border-green-100 rounded-2xl mb-3'
                                />
                                {/* Project Name */}
                                <div className='lg:text-2xl text-xl text-green-600 font-extrabold'>
                                    {project.name}
                                </div>
                                {/* Project Description */}
                                <div className='lg:text-center text-sm'>
                                    <span className='text-black'>{project.description}</span>
                                </div>
                            </Tilt>
                        ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={nextProjects}
                    disabled={currentIndex + visibleProjects >= projects.length}
                    className={`absolute right-0 z-10 p-2 mr-2 text-white text-2xl bg-green-600 rounded-full shadow-lg hover:bg-green-700 ${
                        currentIndex + visibleProjects >= projects.length && 'opacity-50 cursor-not-allowed'
                    }`}
                >
                    <MdNavigateNext />
                </button>
            </div>
        </div>
    );
};

export default Project;
