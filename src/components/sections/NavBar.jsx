import React from 'react'
import logo from '../../images/logo.svg'
export default function NavBar() {
  return (
    <nav className='flex justify-between items-center p-whitespacex md:px-40'>
        <img src={logo} className='w-24' alt="" />
        <button className='btn font-semibold text-xl'>Sign up</button>
    </nav>
  )
}
