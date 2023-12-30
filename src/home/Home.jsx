import React from "react";
import { Banner } from "./Banner";
import CategorySection from "./CategorySection";
import "./home.css";
import PopularMenu from "./PopularMenu";
import Recommended from "./Recommended";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss</title>
      </Helmet>

      <Banner></Banner>
      <CategorySection></CategorySection>

      <section className="md:mx-28 md:my-12 md:p-20 section-bg bg-fixed">
        <div className="bg-white/75 md:rounded-md backdrop-blur-sm p-8 flex text-center flex-col justify-center items-center">
          <h2 className="text-3xl font-clash-display font-semibold">
            Bistro Boss
          </h2>
          <p className="mt-4">
            Welcome to Bistro Boss, where culinary artistry meets warm
            hospitality. Explore our divine menu curated with passion, offering
            a fusion of global flavors prepared with the freshest ingredients.
            Join us for an unforgettable journey of taste and hospitality.
          </p>
        </div>
      </section>

      <PopularMenu></PopularMenu>

      <section className="w-full bg-gray-900 md:my-12 md:p-20 md:text-4xl text-2xl text-center p-8 font-clash-display font-medium text-white">
        <span>Call Us:</span> +88 0192345678910
      </section>

      <Recommended></Recommended>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
