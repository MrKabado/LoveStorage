import React from 'react'
import { Link } from 'react-router-dom'
import heartImage from '../assets/love.png'
import Button from '../components/Button'

function LandingPage() {
  return (
    <>
      <div className='min-h-screen bg-white flex items-center justify-center'>
        <div className='w-full max-w-3xl px-6 py-16 text-center space-y-6'>
          <h1 className='text-4xl font-semibold text-neutral-800'>Love Storage</h1>
          <h2 className='text-base md:text-lg text-neutral-500'>"Where memories live forever, store the faces you’ll never forget"</h2>
          <p className='text-neutral-600'>
            Welcome to Love Storage, your personal space to safely keep the moments that matter. Whether it's your family, friends, or someone special, preserve every smile, every embrace, and every memory. Because love deserves to be remembered—forever.
          </p>

          <div className='flex justify-center'>
            <img src={heartImage} alt="Heart" className='w-40 md:w-48' />
          </div>

          <Button
            to='/login'
            className='btn btn-outline border-[#D6A3B1] text-[#D6A3B1] hover:bg-[#D6A3B1] hover:text-white'
            text='Get Started!'
          />
        </div>
      </div>
    </>
  )
}

export default LandingPage
