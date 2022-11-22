import React from 'react'
import "./banner.css"
import TitleCom from "../shared/TitleCom";


export default function Banner() {
  return (
    <div className='banner'>
      <div className='wrapperBanner'>
        <TitleCom
          title="Letest Properties of Rent"
          subtitle="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat."
        />
        <div className="background"></div>
        <button className='btn'>Contact Us</button>
      </div>
    </div>
  )
}
