import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Call2Action from './Call2Action'

const Navbar = () => {
  return (
    <div className='mb-0 z-50 relative py-2 shadow bg-white'>
        <div className='flex justify-between items-center !max-w-7xl !mx-auto py-4 px-4 lg:px-0'>
            <Logo />
            <Menu />
            <Call2Action />
        </div>
    </div>
  )
}

export default Navbar