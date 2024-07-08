import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Header() { 
  return (
    <div className='p-5 shadow-sm flex items-center justify-between'>
       <Image src='/logo.svg' alt='logo' width={180} height={100} />
       <div className='md:flex mx-5 items-center gap-6 hidden '>
              <h2 className='hover:scale-105 hover:text-primary'>Home</h2>
              <h2 className='hover:scale-105 hover:text-primary'>Services</h2>
              <h2 className='hover:scale-105 hover:text-primary'>About Us </h2>
       </div>
       <div>
       <Button>
        Get Started
       </Button>
       </div>
    </div>
  )
}

export default Header
