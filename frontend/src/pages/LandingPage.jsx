import React from 'react'
import { Link } from 'react-router-dom'
import heartImage from '../assets/love.png'

function LandingPage() {
  return (
    <>
      <div className='h-screen flex items-center justify-center bg-[#f4ecee]'>
        <div className='w-[80%] h-auto text-center shadow-2xs rounded-lg flex flex-col gap-y-5 p-5 bg-white'>
          <h1 className='text-[40px] text-[#a13434] font-bold' >Love Storage</h1>
          <h1 className='text-[30px] text-[#a13434] font-semibold'>"Where memories live forever, store the faces you’ll never forget"</h1>
          <p className='text-[20px] text-[#a13434]'>
            Welcome to Love Storage, your personal space to safely keep the moments that matter. Whether it's your family, friends, or someone special, preserve every smile, every embrace, and every memory. Because love deserves to be remembered—forever.
          </p>

          <div className='flex items-center justify-center w-auto bg-[#f7e4e4] p-3 rounded-md'>
            <img src={heartImage} alt="" className='w-50'/>
          </div>

          <Link to='/login' className='border p-2 rounded-lg bg-[#dc5656] text-white hover:bg-[#a13434] transition duration-300'>
            Get Started!
          </Link>
        </div>        
      </div>
    </>
  )
}

export default LandingPage
