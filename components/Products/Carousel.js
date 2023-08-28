import { useState } from "react";
import Slider from "react-slick";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

function Carousel( { producto } ) {
    
      const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <BsFillArrowRightCircleFill />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <BsFillArrowLeftCircleFill />
          </div>
        );
      };
      const [imagesCar, setImagesCar] = useState(producto.images);
      const [imageIndex, setImageIndex] = useState(0);
      console.log(imagesCar)
      const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
      };
  
    return (

      <>
        <div className="App">
            <Slider {...settings}>
                {imagesCar.map((img, idx) => (
                <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    <img src={img.src} alt={img.name} />
                </div>
                ))}
            </Slider>
            </div>
    
      </>
    );
}

export default Carousel