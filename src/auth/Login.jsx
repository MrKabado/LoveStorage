import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'
import NoProfileImg from '../assets/noProfile.jpg'

function Login() {
  const [selectImage, setSelectImage] = useState(false);
  const [proceed, setProceed] = useState(false)
  const Navigate = useNavigate();
  
  const handleProceed = (e) => {
    e.preventDefault();
    if (selectImage == false) {
      alert('Please select an account first');
      return;
    }

    Navigate("/homepage");
    console.log('low');
    
  };

  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-white'>
        <form className='w-full max-w-sm text-center rounded-xl flex flex-col gap-y-5 p-8 shadow-md m-5'>
          <h1 className='text-2xl font-semibold text-neutral-800'>LOGIN</h1>

          <div className='flex flex-col'>
            <label htmlFor="username" className='text-left text-neutral-600'>Username:</label>
            <input id='username' type="text" placeholder='enter username' className='input input-bordered w-full'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="password" className='text-left text-neutral-600'>Password:</label>
            <input id='password' type="password" placeholder='password' className='input input-bordered w-full'/>
          </div>

          <button className='btn btn-outline border-[#D6A3B1] text-[#D6A3B1] hover:bg-[#D6A3B1] hover:text-white'>
            <a href="#my_modal">
              Log In
            </a>
          </button>
          <Link to={'/register'} className='text-sm text-neutral-500 hover:text-[#D6A3B1]'>
            Register
          </Link>
        </form>
      </div>


      <Modal 
        id="my_modal"
        title="Who's Using?"
        titleClassName="text-center"
        description="Select an account:"
        desClassName="text-center"
        btnText="Proceed"
        btnClassName="shadow-md w-50"
        btnholderClassName=" flex justify-center"
        divContentHolder="p-3"
        btnOnClick={handleProceed}
        divContent={
          <div className='flex flex-row justify-evenly'>
            <div className='w-fit flex flex-col items-center justify-center'>
              <h1>User 1</h1>

              <button className='border-transparent border-4 focus:border-green-600 rounded-full' onClick={() => {
                setSelectImage(true)
                console.log("Hi")
              }}>
                <img 
                  src={NoProfileImg} 
                  className='w-20 rounded-full'
                />
              </button>
            </div>

            <div className='w-fit flex flex-col items-center justify-center'>
              <h1>User 2</h1>
              
              <button className='border-transparent border-4 focus:border-green-600 rounded-full' onClick={() => {
                setSelectImage(true)
                console.log("Hi")
              }}>
                <img 
                  src={NoProfileImg} 
                  className='w-20 rounded-full'
                />
              </button>
            </div>
          </div>   
        }
      />
    </>
  )
}

export default Login
