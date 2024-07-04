import React from 'react'
import { GrGithub, GrLinkedinOption, GrMail, GrPhone } from 'react-icons/gr'

const Footer = () => {
  return (
    <div className='w-[screen ] bg-black'>
        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href="https://www.linkedin.com/in/soumya-rayast-075430217/" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-green-600'>
                    <GrLinkedinOption className='text-white'/>
                </div>
                <span className='text-white ml-1 mt-[0.1rem]  text-sm'>
                    Soumya Rayast
                </span>
            </a>
            <a href="https://github.com/soumya-rayast" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-green-600'>
                    <GrGithub className='text-white'/>
                </div>
                <span className='text-white ml-1 mt-[0.1rem]  text-sm'>
                    soumya-rayast
                </span>
            </a>
            <a href="/" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-green-600'>
                    <GrPhone className='text-white'/>
                </div>
                <span className='text-white ml-1 mt-[0.1rem] text-sm'>
                    79098XXXX
                </span>
            </a>
            <a href="/" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-green-600'>
                    <GrMail className='text-white'/>
                </div>
                <span className='text-white ml-1 mt-[0.1rem] text-sm'>
                    rayastsoumya@gmail.com
                </span>
            </a>
        </div>
      
    </div>
  )
}

export default Footer
