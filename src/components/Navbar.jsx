import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='fixed w-full top-0 bg-orange-100 bg-opacity-80'>
                <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-2">
                    <h1>SAM</h1>
                    <div>

                    </div>
                    <div>
                        <ul className={` flex flex-col p-4 md:p-0 text-xl border cursor-pointer border-gray-100 rounded-lg md-flex-row md:space-x-8 md:mt-0 md:border-0`}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
