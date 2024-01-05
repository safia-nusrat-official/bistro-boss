import { FaQuoteLeft } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import SectionTitle from "../components/sectionTitle";
import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="md:mx-28 md:my-12 my-8">
      <SectionTitle
        heading="Testimonials"
        sub_heading="What our clients say"
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews &&
          reviews.map((review) => (
            <SwiperSlide key={review?.name}>
              <div className="px-12 md:px-20 text-center flex flex-col items-center justify-center">
                <Rating style={{ maxWidth: 180 }} value={review?.rating} readOnly />
                <FaQuoteLeft className="mt-4 text-8xl"></FaQuoteLeft>
                <p className="my-4">{review?.details}</p>
                <span className="text-2xl uppercase text-yellow-400 font-medium">
                  {review?.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
