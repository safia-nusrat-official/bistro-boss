import sectionBanner from "./assets/contact/banner.jpg";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";

import SectionCover from "./components/SectionCover";
import SectionTitle from "./components/sectionTitle";

export const ContactUs = () => {
  return (
    <div>
      <SectionCover
        banner={true}
        img={sectionBanner}
        title="Contact Us"
        desc="Your feedback matters, and we're here to make every interaction as delightful as our cuisine."
      ></SectionCover>

      <section className="md:mx-28 md:my-12 m-8">
        <SectionTitle
          heading="Our Location"
          sub_heading="Visit Us"
        ></SectionTitle>

        <div className="grid md:grid-cols-3 justify-center gap-4">
          <div className="box">
            <div className=" bg-orange-400 text-white text-2xl p-2 flex justify-center">
              <FaPhone></FaPhone>
            </div>
            <div className="p-4 pt-0 border-2 border-t-0">
              <div className="bg-gray-200 p-6 font-medium text-center">
                <span className="text-xl mb-2">Phone</span>
                <p>+38 (012) 34 56 789</p>
                <p>+88 123456789</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className=" bg-orange-400 text-white text-2xl p-2 flex justify-center">
              <FaLocationDot></FaLocationDot>
            </div>
            <div className="p-4 pt-0 border-2 border-t-0">
              <div className="bg-gray-200 px-4 py-6 font-medium text-center">
                <span className="text-xl mb-2">
                  Address
                </span>
                <p>123 ABS Street, Uni 21, Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className=" bg-orange-400 text-white text-2xl p-2 flex justify-center">
              <IoTimeSharp></IoTimeSharp>
            </div>
            <div className="p-4 pt-0 border-2 border-t-0">
              <div className="bg-gray-200 p-6 font-medium text-center">
                <span className="text-xl mb-2">Working Hours</span>
                <p>Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:mx-28 md:my-12 m-8">
      <SectionTitle
          heading="CONTACT FORM"
          sub_heading="SEnd us a message"
        ></SectionTitle>

        <form className="p-6 bg-gray-300 rounded-md">
          <div className="grid md:grid-cols-2 gap-2">
            <input type="text" className="p-4" placeholder="Enter your name."/>
            <input type="text" className="p-4" placeholder="Enter your email."/>
          </div>
        </form>
      </section>
    </div>
  );
};
