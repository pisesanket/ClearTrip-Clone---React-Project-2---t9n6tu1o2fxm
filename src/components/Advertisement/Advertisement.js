import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Advertisement.css'; 
import image1 from '../../Images/addImage4.png';
import image2 from '../../Images/addImage2.png';
import image3 from '../../Images/addImage3.png'


const AdvertisementSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  const advertisementImages = [
    image1, 
    image2,
    image3
  ];

  return (
    <div className="advertisement-slider-container">
      <Slider {...settings}>
        {advertisementImages.map((image, index) => (
          <div key={index} className="advertisement-slide">
            <img src={image} alt={`Advertisement ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AdvertisementSlider;
