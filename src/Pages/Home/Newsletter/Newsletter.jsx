import React from "react";
import { HiAnnotation } from "react-icons/hi";

const Newsletter = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="mb-10 pl-4 border-l-4  border-green-600">
        <h1 className="font-bold text-3xl text-green-600">Our News Letter</h1>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center  gap-5  lg:gap-28 ">
        <div className="flex ">
          <div>
            <HiAnnotation className="text-5xl pr-2 text-green-500"></HiAnnotation>
          </div>
          <div>
            <p className="font-bold text-green-500">
              Join our newsletter for £10 offs
            </p>
            <h1 className="font-bold text-3xl">
              Get our emails for info on new items, sales and much more.
            </h1>
            <p>
              Register now to get latest updates on promotions & coupons. Don’t
              worry, we not spam!
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-5">
            <input
              type="text"
              className="border-2 w-full p-3 rounded-lg"
              placeholder="Enter Email Address"
            />
            <button className="btn bg-green-500 border-0">Subscribe</button>
          </div>
          <p>
            <small>
              By subscribing you agree to our{" "}
              <span className="text-green-500">
                {" "}
                Terms & Conditions and Privacy & Cookies Policy.
              </span>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
