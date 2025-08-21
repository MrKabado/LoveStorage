import React from 'react'
import ImageCard from '../components/Card/ImageCard'
import Profile from '../assets/noProfile.jpg'
import Button from '../components/Button'
import { ChevronDown, ImagePlus } from 'lucide-react'
import InsertImage from '../components/Modals/InsertImage'
import { Link, useNavigate } from 'react-router-dom'

function Homepage() {
  const images = [
    {  
      id: 1,
      title: "image 1",
      imageSource: Profile,
    },
    {  
      id: 2,
      title: "image 2",
      imageSource: Profile,
    },
    {
      id: 3,
      title: "image 3",
      imageSource: Profile,
    },
    {
      id: 4,
      title: "image 4",
      imageSource: Profile,
    }
  ]
  return (
    <div className='flex flex-col gap-5'>
      <div className='m-10 h-full flex flex-col items-center shadow-md p-3 rounded-lg'>
        <h1 className='text-center font-bold text-[30px]'>HI AKO PA BA?</h1>
        <div className='h-max m-3 grid grid-cols-3 gap-10'>
        {images.map((value, index) => 
          index < 3 && (
            <ImageCard 
              key={index} 
              src={value.imageSource}
              alt={value.title}
            />
          )
        )}
        </div>
        
        <Button 
          text="View More"
          icon={<ChevronDown className='w-full'/>}
          className="w-full flex flex-col justify-center"
          divclassName="w-[50%] flex justify-center"
        />
      </div>

      <div className='flex flex-col justify-center items-center shadow-md rounded-lg m-10'>
        <h1 className='text-center text-2xl font-semibold'>Insert Another Memories</h1>
        <a href="#insert_image_modal" id='my_modal' className='modal_toggle m-15'>
          <Button 
            icon={
              <ImagePlus 
                className='w-10 h-10'
              />
            }
            type="button"
          />
        </a>
      </div>

      <InsertImage 
        title="Upload Memories"
        titleClassName="text-3xl text-center font-bold"
        id="insert_image_modal"

        btnText="Done"
        btnholderClassName='flex justify-center'
        btnClassName='w-full shadow-md'
        type="button"
        btnOnClick={() => {
          window.location.reload();
        }}
      />
    </div>
  )
}

export default Homepage