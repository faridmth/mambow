import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
//
import img1 from '../images/carousel/1.jpg'
import img2 from '../images/carousel/2.jpg'
import img3 from '../images/carousel/3.jpg'
import img4 from '../images/carousel/4.jpg'
import img5 from '../images/carousel/5.jpg'
import img6 from '../images/carousel/6.jpg'
import img7 from '../images/carousel/7.jpg'
import img8 from '../images/carousel/8.jpg'
import img9 from '../images/carousel/9.jpg'
import img10 from '../images/carousel/10.jpg'
const CarouselComponent = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
   <div className="overflow-hidden w-3/4 md:w-2/3 h-[430px]">
     <Slider {...settings}>
      <div>
        <Image
          src={img1}
          alt='zzz'
          className="rounded-sm border-4 border-[#ded7c0] opacity-80 hover:opacity-95 "
        />
      </div>
      <div>
        <Image
          src={img2}
          alt='zzz'
          className="rounded-sm border-4 border-[#ded7c0]  opacity-80 hover:opacity-95"
        />
      </div>
      <div>
        <Image
          src={img3}
          alt='zzz'
          className="rounded-sm border-4 border-[#ded7c0]  opacity-80 hover:opacity-95"
        />
      </div>
      <div>
        <Image
          src={img4}
          alt='zzz'
          className="rounded-sm border-4 border-[#ded7c0] opacity-80 hover:opacity-95"
        />
      </div>
      

    </Slider>
   </div>
  )
}

export default CarouselComponent
