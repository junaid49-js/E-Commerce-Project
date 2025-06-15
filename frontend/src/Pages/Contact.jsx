import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import LetterBox from "../Components/LetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl border-t pt-8">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row md:justify-center m-8">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="p-16 flex flex-col gap-4">
          <p className="font-bold">Our Store</p>
          <p>
            54709 Williams Station
            <br />
            Suite 350, Washington, USA
          </p>
          <p>
            Tel: (415) 555-0132
            <br />
            Email: admin@forever.com
          </p>
          <p className="font-bold">Careers at Forever</p>
          <p>Learn more about our teams and job openings.</p>
          <button className="w-36 p-2 bg-white border cursor-pointer hover:bg-black hover:text-white active:bg-white active:text-black ">
            Explore Jobs
          </button>
        </div>
      </div>
      <LetterBox />
    </div>
  );
};

export default Contact;
