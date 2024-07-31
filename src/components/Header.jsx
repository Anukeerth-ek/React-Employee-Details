import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from './Navbar'
const Header = () => {
    const headerTitle = "Title"
  return (
    <header>
        <div className=' border-b mb-2 md:mb-5'>
            <div className='flex items-center justify-between py-2 md:py-4 mx-3 md:mx-10'>
                <h2 className='text-2xl font-semibold'>{headerTitle}</h2>
                <GiHamburgerMenu className='text-red-700'/>
            </div>
        </div>
        <Navbar/>
    </header>
  )
}

export default Header