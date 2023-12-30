import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col text-[#fafafa]">
      <div className="w-full grid md:grid-cols-2">
        <div className="bg-slate-700 md:pl-10 py-10 flex items-center flex-col md:justify-end justify-center">
          <h3 className="text-4xl mb-4 font-clash-display font-medium">Contact Us</h3>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        <div className="bg-gray-900 md:pl-10 py-10 flex items-center flex-col md:justify-start justify-center">
          <h3 className="text-4xl mb-4 font-clash-display font-medium">Follow Us</h3>
          <p>Join us on our social media</p>
          <div className="flex gap-4 text-4xl mt-4">
            <a href="https://www.facebook.com/">
              <FaFacebookF></FaFacebookF>
            </a>
            <a href="https://twitter.com/">
              <FaTwitter></FaTwitter>
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram></FaInstagram>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 w-full bg-[#191919] text-center">
        Copyright © BistroBoss. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
