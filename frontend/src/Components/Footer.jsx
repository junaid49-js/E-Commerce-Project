import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-col grid-cols-[3fr_1fr_1fr] md:grid gap-8 justify-between text-sm mt-40 my-8">
                <div>
                    <Link to={"/"}>
                        <img className="h-8 mb-5" src={assets.logo} alt="" />
                    </Link>

                    <p className="w-full md:w-2/3 text-gray-600">
                        These Clothings Are Made By Hard Working Europian
                        Workers, Not Asian Kids. These Clothings Are Made By
                        Hard Working Europian Workers, Not Asian Kids.
                    </p>
                </div>
                <div className="">
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <Link to={"/"}>
                            <p>Home</p>
                        </Link>
                        <Link to={"/about"}>
                            <p>About</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Careers</p>
                        </Link>
                    </ul>
                </div>
                <div className="">
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <p>+1-212-456-7890</p>
                        <p>contact@foreveryou.com</p>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className="text-center text-sm py-4">
                    Copyright 2025@ forever.com - All Right Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
