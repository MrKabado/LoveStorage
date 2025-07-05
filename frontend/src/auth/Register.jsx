import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  return (
    <>
      <div className='h-screen flex items-center justify-center bg-[#f4ecee]'>
        <form className='w-[500px] h-auto text-center shadow-2xs rounded-lg flex flex-col gap-y-5 p-5 bg-white'>
          <h1 className='text-[40px] text-[#a13434] font-bold'>REGISTER</h1>

          <div className='flex flex-col'>
            <label htmlFor="username" className='text-left text-[#a13434] font-semibold'>Username:</label>
            <input id='username' type="text" placeholder='enter username' className='border p-2 rounded-lg border-[#a13434]'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="password" className='text-left text-[#a13434] font-semibold'>Password:</label>
            <input id='password' type="password" placeholder='password' className='border p-2 rounded-lg border-[#a13434]'/>
          </div>

          <button onClick={()=> navigate('/login')} className='border p-2 rounded-lg bg-[#dc5656] text-white hover:bg-[#a13434] transition duration-300 cursor-pointer'>
            Register
          </button>
        </form>
      </div>
    </>
  )
}

export default Register
