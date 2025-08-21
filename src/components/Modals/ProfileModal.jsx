import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from '../../assets/noProfile.jpg'
import { Pencil } from 'lucide-react'
import Button from '../Button'

function ProfileModal({divContent ,divContentHolder, modalClassName, id, to, modalBoxClassName, titleClassName, title, desClassName, description, btnClassName, btnText, btnholderClassName, type, btnOnClick}) {
  const [preview, setPreview] = useState();
  const ref = React.useRef(null)


  const handleOpenFile = (e) => {
    const file =  URL.createObjectURL(e.target.files[0])

    console.log(file)

  }

  const handleClickFile = () => {
    ref?.current?.click()
  }
  
  
  return (
    <div className={`modal ${modalClassName}`} role='dialog' id={id}>
      <div className={`modal-box ${modalBoxClassName}`}>
        <h3 className={`text-lg font-semibold ${titleClassName}`}>{title}</h3>
        <p className={`py-4 ${desClassName}`}>{description}</p>

        <div className={`${divContentHolder}`}>{divContent}</div>
          <form action="" className='flex flex-col gap-5 justify-evenly'>
            <div className='p-5 flex flex-col items-center justify-center gap-4'>
              <h1>Profile 1</h1>
              <div className='flex flex-col items-center rounded-full'>
                <button onClick={handleClickFile}>
                  <img src={Profile} alt="" className='w-20'/>
                  <input 
                    type="file" 
                    className='hidden' 
                    onChange={handleOpenFile} 
                    ref={ref}
                  />
                </button>
              </div>
              <input type="text" placeholder='name' className='w-auto text-center px-2 py-1'/>
            </div>

            <div className='p-5 flex flex-col items-center justify-center gap-4'>
              <h1>Profile 2</h1>
              <div className='flex flex-col items-center rounded-full'>
                <button onClick={handleClickFile}>
                  <img src={Profile} alt="" className='w-20'/>
                  <input 
                    type="file" 
                    className='hidden' 
                    onChange={handleOpenFile} 
                    ref={ref}
                  />
                </button>
              </div>
              <input type="text" placeholder='name' className='w-auto text-center px-2 py-1'/>
            </div>
          </form>
          
          <Button 
            text="Proceed"
            to="/homepage"
            className="border px-5 rounded-md"
            divclassName="flex justify-center"
          />
      </div>
    </div>
  )
}

export default ProfileModal
