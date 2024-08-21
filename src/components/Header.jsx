import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from './Navbar'
const Header = () => {
    const headerTitle = "Employee"
  return (
    <header>
        <div className=' border-b mb-2 md:mb-5'>
            <div className='flex items-center justify-between py-2 md:py-4 mx-3 md:mx-10'>
                <h2 className='text-2xl font-semibold cursor-pointer'>{headerTitle}<span className='text-red-600'>Tracker</span></h2>
                <GiHamburgerMenu className='text-red-700 scale-110 hover:scale-125 duration-300 cursor-pointer'/>
            </div>
        </div>
        <Navbar/>
    </header>
  )
}

export default Header