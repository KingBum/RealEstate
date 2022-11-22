import React from 'react'
import "./topheader.css"
import {Gmail, Phone, Quiz, Insta, In, Be, Fb} from "../../assets/images/index"

export default function TopHeader() {
  return (
    <div className='topHeader'>
      <div className='leftTopHeader'>
        <img className='iconSmall' src={Gmail} alt="" />
        <span className='bold'>Email us at :</span>
        <span>example@gmail.com</span>
      </div>
      <div className="rightTopHeader">
        <div className="iconRightHeader">
          <img className='iconMedium' src={Fb} alt="" />
          <img className='iconMedium' src={Quiz} alt="" />
          <img className='iconMedium' src={In} alt="" />
          <img className='iconMedium' src={Insta} alt="" />
          <img className='iconMedium' src={Be} alt="" />
          <div className='lineHeader'></div>
          <img className='iconSmall' src={Phone} alt="" />
          <div className='numberHeader'>123-4567-890</div>
        </div>
      </div>
    </div>
  )
}
