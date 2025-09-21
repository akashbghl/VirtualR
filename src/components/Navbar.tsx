import { useState } from 'react'
import logo from '../assets/logo.png'
import {navItems} from '../constants'
import { Menu, X } from 'lucide-react';
const Navbar = () => {
  const [mobileMenuOpen,setMobileMenuOpen] = useState(false);
  const toggleNavbar = ()=>{
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
      <div className="container px-4 md:px-12 mx-auto relative text-sm">
        <div className="flex justify-between items-center">

          {/* logo */}
          <div className="flex items-center flex-shrink-0">
            <img className='h-10 w-10' src={logo} alt="logo" />
            <span className='text-xl tracking-light'>VirtualR</span>
          </div>

          {/* menu */}
          <ul className='hidden lg:flex ml-14 space-x-12'>
            {
              navItems.map((item,index)=>(
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))
            }
          </ul>
            {/* Right buttons */}
          <div className='hidden lg:flex justify-center space-x-2 items-center'>
            <a href="#" className='py-2 px-3 border border-neutral-700 rounded-md '>Sign In</a>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-red-800 py-2 px-3 border border-neutral-500 rounded-md '>
              Create an account</a>
          </div>

          {/* Responsive Hamburger*/}
          <div className='lg:hidden md:flex flex-col justify-end'>
            <button onClick={toggleNavbar}>
              {mobileMenuOpen? <X/> : <Menu/>}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className='fixed right-0 z-20 bg-neutral-900 w-1/2 p-12 flex flex-col justify-center items-center lg:hidden'>
            <ul>
              {navItems.map((item,index)=>(
                <li key={index} className='py-4'>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className='flex flex-col space-y-4'>
              <a href="#" className='py-2 px-3 border border-neutral-700 rounded-md'>Sign In</a>
            <a href="#" className='text-xs bg-gradient-to-r from-orange-500 to-red-800 py-2 px-3 border border-neutral-500 rounded-md '>Create an account</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
