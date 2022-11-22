import React from 'react'
import Car from "../../assets/images/Car.png"
import Bathtub from "../../assets/images/Bathtub.png"
import ArrowsOut from "../../assets/images/ArrowsOut.png"
import Add from "../../assets/images/Add.png"
import Love from "../../assets/images/Love.png"
import Share from "../../assets/images/Share.png"

export default function CardItem({image, title, price, avatar , owner}) {
  return (
    <div className='cardItem'>
        <div className='boxImageCardItem'>
            <img className='imageCardItem' src={image} alt="" />
        </div>
        <div className="boxCardItem">
            <div className="titleCardItem">{title}</div>
            <div className="readMoreCardPropertice">$ {price}</div>
            <div className='InfoCardItem'>
                <div className='InfoDetailCardItem'>
                    <img src={Car} alt="" />
                    <span>4</span>
                </div>
                <div className='InfoDetailCardItem'>
                    <img src={Bathtub} alt="" />
                    <span>4</span>
                </div>
                <div className='InfoDetailCardItem'>
                    <img src={ArrowsOut} alt="" />
                    <span>205m</span>
                </div>
            </div>
            <div className="bottomInfoCardItem">
                <div className='avatarBox'>
                    <img className='avatarCardItem' src={avatar} alt="" />
                    <div className="nameOwner">{owner}</div>
                </div>
                <div className="actionCardItem">
                    <img className='iconMedium iconActions' src={Share} alt="" />
                    <img className='iconMedium iconActions' src={Love} alt="" />
                    <img className='iconMedium iconActions' src={Add} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
