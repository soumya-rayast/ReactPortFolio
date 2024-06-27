import React from 'react'
import { GrLinkedinOption } from 'react-icons/gr'

const Footer = () => {
  return (
    <div className='w-[screen ] bg-black'>
        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href="/" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                    <GrLinkedinOption className='text-white'/>
                </div>
                <span className='text-white ml-1 mt-[0.1rem]'>
                    Soumya Rayast
                </span>
            </a>
            <a href="/" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                    <GrLinkedinOption className='text-white'/>
                </div>
                <span className='text-white ml-1 mt-[0.1rem]'>
                    Soumya Rayast
                </span>
            </a>
            <a href="/" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                    <GrLinkedinOption className='text-white'/>
                </div>
                <span className='text-white ml-1 mt-[0.1rem]'>
                    Soumya Rayast
                </span>
            </a>
            <a href="/" target='blank' className='text-lg flex flex-row text-violet-300'>
                <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                    <GrLinkedinOption className='text-white'/>
                </div>
                <span className='text-white ml-1 mt-[0.1rem]'>
                    Soumya Rayast
                </span>
            </a>
        </div>
      
    </div>
  )
}

export default Footer
