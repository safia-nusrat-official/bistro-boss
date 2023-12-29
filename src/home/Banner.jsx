import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slide1 from "./../assets/home/banner-img-1.jpg";
import slide2 from "./../assets/home/banner-img-2.jpg";
import slide3 from "./../assets/home/banner-img-3.png";
import slide4 from "./../assets/home/banner-img-4.jpg";
import slide5 from "./../assets/home/banner-img-5.png";
import slide6 from "./../assets/home/banner-img-6.png";

export const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showArrows={true}
      swipeable={true}
      showStatus={false}
    >
      <div>
        <img src={slide1} />
      </div>
      <div>
        <img src={slide2} />
      </div>
      <div>
        <img src={slide3} />
      </div>
      <div>
        <img src={slide4} />
      </div>
      <div>
        <img src={slide5} />
      </div>
      <div>
        <img src={slide6} />
      </div>
    </Carousel>
  );
};
