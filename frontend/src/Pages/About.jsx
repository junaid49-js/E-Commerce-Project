import React from "react";
import Title from "../Components/Title";
import LetterBox from "../Components/LetterBox";
import { assets } from "../assets/assets";

const About = () => {
    return (
        <div>
            <div className="text-center text-2xl border-t pt-8">
                <Title text1={"ABOUT"} text2={"US"} />
            </div>
            <div className="flex flex-col xl:flex-row gap-16 my-10">
                <img
                    className="w-full md:max-w-[450px]"
                    src={assets.about_img}
                    alt=""
                />
                <div className=" md:w-2/4 flex flex-col justify-center gap-5 text-gray-600">
                    <p>
                        Forever was born out of a passion for innovation and a
                        desire to revolutionize the way people shop online. Our
                        journey began with a simple idea: to provide a platform
                        where customers can easily discover, explore, and
                        purchase a wide range of products from the comfort of
                        their homes.
                    </p>
                    <p>
                        Since our inception, we've worked tirelessly to curate a
                        diverse selection of high-quality products that cater to
                        every taste and preference. From fashion and beauty to
                        electronics and home essentials, we offer an extensive
                        collection sourced from trusted brands and suppliers.
                    </p>
                    <p className="font-bold">Our Mission</p>
                    <p>
                        Our mission at Forever is to empower customers with
                        choice, convenience, and confidence. We're dedicated to
                        providing a seamless shopping experience that exceeds
                        expectations, from Browse and ordering to delivery and
                        beyond.
                    </p>
                </div>
            </div>

            <div className="text-xl py-4">
                <Title text1={"Why"} text2={"Choose Us"} />
            </div>

            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance:</b>
                    <p className="text-gray-600">
                        Since our inception, we've worked tirelessly to curate a
                        diverse selection of high-quality products that cater to
                        every taste and preference.
                    </p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenience:</b>
                    <p className="text-gray-600">
                        Since our inception, we've worked tirelessly to curate a
                        diverse selection of high-quality products that cater to
                        every taste and preference.
                    </p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service:</b>
                    <p className="text-gray-600">
                        Since our inception, we've worked tirelessly to curate a
                        diverse selection of high-quality products that cater to
                        every taste and preference.
                    </p>
                </div>
            </div>
            <LetterBox />
        </div>
    );
};

export default About;
