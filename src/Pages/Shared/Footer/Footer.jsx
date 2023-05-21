import React from "react";
import logo from "/logo.png";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="pt-16">
      <footer className="footer p-10 bg-green-50 text-base-content">
        <div>
          <img className="w-80" src={logo} alt="" />
          <p>
            BrainBuilders is a dynamicand innovative
            <br />
            company dedicated to creating educational resources <br /> and
            programs that inspire young minds.
          </p>
        </div>
        <div>
          <span className="footer-title">Category</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <a className="link link-hover">Bangladesh Mirpur, Dhaka-12</a>
          <a className="link link-hover">098449404049</a>
          <a className="link link-hover">yourmail@gmail.com</a>
          <span className="flex gap-9 my-3 text-2xl">
            <FaFacebook></FaFacebook>
            <FaGoogle></FaGoogle>
            <FaInstagram></FaInstagram>
          </span>
        </div>
      </footer>
      <div className="footer footer-center p-4 bg-green-500 text-white tracking-wide ">
        <div>
          <p>Copyright © 2023 - All right reserved by BrainBuilders</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
