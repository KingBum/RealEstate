import React from "react";
import Slider from "react-slick";

export default function SliderCom({ image }) {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <h2 className="pendingSlider">Best choice for today</h2>
      <div className="slideLine">
        <Slider {...settings}>
          {image.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              {index % 2 === 1 ?  <div className="hotOffer btn">Hot offer</div> : <></> }
              <div className="viewDetailSlider">View Detail</div>
              <img className="imgSlider" src={slideImage} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
