import React from "react";
import { assets } from "../assets/assets";

const Policies = () => {
  return (
    <div className="flex items-center text-center justify-around p-12 m-8 flex-wrap">
      <div className="flex flex-col items-center justify-center">
        <img className="m-6 h-12" src={assets.exchange_icon} alt="" />
        <p className="font-bold">Easy Exchange Policy</p>
        <p>We offer hassle free exchange policy</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img className="m-6 h-12" src={assets.quality_icon} alt="" />
        <p className="font-bold">7 Day Return Policy</p>
        <p>We provide 7 day free return policy</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img className="m-6 h-12" src={assets.support_img} alt="" />
        <p className="font-bold">Best Customer Support</p>
        <p>We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default Policies;
