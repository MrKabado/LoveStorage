import React from 'react'

function ImageCard({src, alt, description}) {
  return (
    <div className='flex flex-col items-center justify-center w-fit'>
      <img src={src} alt={alt} className='w-20 object-cover'/>
      <p>{description}asd</p>
    </div>
  )
}

export default ImageCard
