import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-white'>
        <form className='w-full max-w-sm text-center rounded-xl flex flex-col gap-y-5 p-8 bg-white border border-neutral-200'>
          <h1 className='text-2xl font-semibold text-neutral-800'>REGISTER</h1>

          <div className='flex flex-col'>
            <label htmlFor="username" className='text-left text-neutral-600'>Username:</label>
            <input id='username' type="text" placeholder='enter username' className='input input-bordered w-full'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="password" className='text-left text-neutral-600'>Password:</label>
            <input id='password' type="password" placeholder='password' className='input input-bordered w-full'/>
          </div>

          <button onClick={()=> navigate('/login')} className='btn btn-outline border-[#D6A3B1] text-[#D6A3B1] hover:bg-[#D6A3B1] hover:text-white'>
            Register
          </button>
        </form>
      </div>
    </>
  )
}

export default Register
