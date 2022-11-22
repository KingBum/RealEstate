import React from 'react'
import CardPropertice from '../shared/CardPropertice'
import TitleCom from '../shared/TitleCom'
import "./propertice1.css"
import IconHome1 from "../../assets/images/iconHome1.png"
import IconHome2 from "../../assets/images/iconHome2.png"
import IconHome3 from "../../assets/images/iconHome3.png"
import IconHome4 from "../../assets/images/iconHome4.png"

export default function Propertice1() {
  return (
    <div className='Propertice1'>
        <div className="wrapperPropertice1">
            <TitleCom
            title="Propertice by Local"
            subtitle="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat."
            />
            <div className="optionPropertice">
                <CardPropertice image={IconHome1} title="Sell your home"/>
                <CardPropertice image={IconHome3} title="Sell your home"/>
                <CardPropertice image={IconHome2} title="Sell your home"/>
                <CardPropertice image={IconHome4} title="Sell your home"/>
            </div>
        </div>
    </div>
  )
}
