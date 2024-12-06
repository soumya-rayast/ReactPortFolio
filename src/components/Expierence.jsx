import React from 'react';

const data = [
    {
        companyName: "ZarvisGenix",
        role: "Full Stack Web Developer Intern",
        date: "May 2024 – August 2024",
        tech: "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    },
    {
        companyName: "EnropeSolutions",
        role: "Frontend Developer Intern",
        date: "November 2024 – December 2024",
        tech: "React.js, Firebase",

    }
];

const Experience = () => {
    return (
        <div id='experience' className='flex flex-col items-center lg:mt-20 mt-10 p-10'>
            <h2 className='text-4xl font-bold mb-8 text-green-800'>Experience</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl'>
                {data.map((item, index) => (
                    <div 
                        key={index} 
                        className='p-6 rounded-xl border-2 border-green-800 hover:border-black shadow-lg hover:shadow-green-800 transition duration-300 h-full flex flex-col justify-between'
                    >
                        <div>
                            <h3 className='text-2xl font-semibold text-green-600'>{item.role}</h3>
                            <p className='text-gray-800 mt-1 font-medium'>{item.companyName}</p>
                            <p className='text-gray-600 italic'>{item.date}</p>
                            <p className='text-sm mt-3 font-semibold'>
                                Technologies: <span className='text-green-500'>{item.tech}</span>
                            </p>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
