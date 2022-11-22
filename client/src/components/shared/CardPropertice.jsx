import React from 'react'

export default function CardPropertice({image, title}) {
  return (
    <div className='cardPropertice'>
        <img className='iconBig' src={image} alt="" />
        <div className="titleCardPropertice">{title}</div>
        <div className="subCardPropertice">We do a free evaluation to be sure you want to start selling.</div>
        <div className='readMoreCardPropertice'>Read more</div>
    </div>
  )
}
