import React from 'react'
import { Link } from 'react-router-dom'
import StockProfile from '../../assets/noProfile.jpg'
import { Upload } from 'lucide-react'

function InsertImage({divContent ,divContentHolder, modalClassName, id, to, modalBoxClassName, titleClassName, title, desClassName, description, btnClassName, btnText, btnholderClassName, type, btnOnClick}) {
  return (
    <div className={`modal ${modalClassName}`} role='dialog' id={id}>
      <div className={`modal-box ${modalBoxClassName}`}>
        <h3 className={`font-semibold ${titleClassName}`}>{title}</h3>
        <p className={`py-4 ${desClassName}`}>{description}</p>

        <div className={`${divContentHolder} flex flex-col overflow-y-auto`}>
        
          {/* HEADER */}
         <div className='flex gap-5 justify-between items-center'>
          <div className='flex gap-5'>
            <img 
              src={StockProfile} 
              alt="Stock Profile" 
              className='w-12 border-2 border-green-600 rounded-full'
            />
            <div className='flex items-center'>
              <h1>Jerson Jay</h1>
            </div>
          </div>

          <div>
            <h1>07/23/23</h1>
            <h1>9:45pm</h1>
          </div>
         </div>

          {/* BODY */}
          <form action="" className='flex flex-col gap-5 p-2'>
            <input 
              type="text" 
              placeholder='Title'
              className='p-1 shadow rounded-sm'
            />
            <input 
              type="text" 
              placeholder='Caption'
              className='p-1 shadow rounded-sm'
            />

            <div className='border-dashed border-2 border-black w-full h-50 rounded-md flex flex-col justify-center items-center'>
              <button>
                <Upload 
                  className='w-10 h-10'
                />
              </button>
              <a href="" className='underline text-blue-600'>
                Click here to upload
              </a>
              <p>Upload your memorable memories</p>
            </div>
          </form>

          {divContent}
        </div>




        {/* BUTTON */}
        <div className={`modal-action ${btnholderClassName}`}>
          {to ? (
            <Link to={to} className={`btn ${btnClassName}`}>
            {btnText}
          </Link>
          ) : (
            <button type={type} className={`btn ${btnClassName}`} onClick={btnOnClick}>
              {btnText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default InsertImage
