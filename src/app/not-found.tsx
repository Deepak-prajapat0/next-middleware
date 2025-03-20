'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../public/home.png'
import { useRouter } from 'next/navigation'


const NotFound = () => {
const navigate = useRouter()
  return (
    <div className='flex flex-col h-screen  items-center w-full justify-center'>
      {/* <img src="/invalid.png" alt="" /> */}
      <Image src={logo} height={100} width={450} alt='not found'/>
<button onClick={()=>navigate.push('/')} className='bg-black text-white px-4 py-1 rounded-md' >Go Back</button>
</div>
  )
}

export default NotFound