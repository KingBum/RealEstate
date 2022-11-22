import React from "react";
import SliderCom from "../shared/SliderCom";
import TitleCom from "../shared/TitleCom";
import "./propertyList1.css";

import { Home1, Home2, Home3, Home4, Home5 } from "../../assets/images/index";

export default function PropertyList1() {
  const ImageSilder = [Home1, Home2, Home3, Home4, Home5]
  
  return (
    <div className="propertyList1">
      <div className="wrapperPropertyList1">
        <TitleCom
          title="Letest Properties of Rent"
          subtitle="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat."
        />
        <div className="slide-container">
          <SliderCom image={ImageSilder} />
        </div>
      </div>
    </div>
  );
}
