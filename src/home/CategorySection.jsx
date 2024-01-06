import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import SectionTitle from "../components/section components/SectionTitle";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import { Link } from "react-router-dom";

const CategorySection = () => {
  return (
    <section className="md:mx-28 md:my-8 m-8">
      <SectionTitle
        heading="Order Online"
        sub_heading="From 11:00am to 10:00pm"
      ></SectionTitle>

      <div className="hidden md:flex">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <img src={slide1} alt="" />
            <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 w-full h-full items-end justify-center p-6 font-clash-display text-[#fafafa] flex absolute bottom-0 text-3xl">
              Salads
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img src={slide2} alt="" />
            <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 w-full h-full items-end justify-center p-6 font-clash-display text-[#fafafa] flex absolute bottom-0 text-3xl">
              Pizzas
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img src={slide3} alt="" />
            <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 w-full h-full items-end justify-center p-6 font-clash-display text-[#fafafa] flex absolute bottom-0 text-3xl">
              Soups
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img src={slide4} alt="" />
            <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 w-full h-full items-end justify-center p-6 font-clash-display text-[#fafafa] flex absolute bottom-0 text-3xl">
              Desserts
            </div>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <img src={slide5} alt="" />
            <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 w-full h-full items-end justify-center p-6 font-clash-display text-[#fafafa] flex absolute bottom-0 text-3xl">
              Drinks
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="md:hidden flex">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="relative">
            <Link className="relative" to="/shop/salad">
              <img src={slide1} alt="" />
              <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 w-full h-full items-end justify-center p-6 font-clash-display text-[#fafafa] flex absolute bottom-0 text-3xl">
                Salads
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <Link to="/shop/pizza" className="relative">
              <img src={slide2} alt="" />
              <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 w-full h-full items-end justify-center p-6 font-clash-display text-[#fafafa] flex absolute bottom-0 text-3xl">
                Pizzas
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <Link to="/shop/soup" className="relative">
              <img src={slide3} alt="" />
              <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 w-full h-full items-end justify-center p-6 font-clash-display text-[#fafafa] flex absolute bottom-0 text-3xl">
                Soups
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <Link to="/shop/dessert" className="relative">
              <img src={slide4} alt="" />
              <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 w-full h-full items-end justify-center p-6 font-clash-display text-[#fafafa] flex absolute bottom-0 text-3xl">
                Desserts
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="relative">
            <Link to="/shop/drinks" className="relative">
              <img src={slide5} alt="" />
              <div className="bg-gradient-to-t from-black to-transparent bg-opacity-30 w-full h-full items-end justify-center p-6 font-clash-display text-[#fafafa] flex absolute bottom-0 text-3xl">
                Drinks
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySection;
