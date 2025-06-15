import React from "react";

const LetterBox = () => {
    return (
        <div className="text-center m-8">
            <p className="text-2xl font-medium text-gray-800">
                Subscribe now & get 20% off
            </p>
            <p className="text-gray-400 mt-4">
                These Clothings Are Made By Hard Working Europian Workers, Not
                Asian Kids.
            </p>
            <form className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 pl-3 border">
                <input
                    className="w-full bg-transparent outline-none px-2"
                    type="email"
                    name="email"
                    id=""
                    placeholder="Enter your email"
                    required
                />
                <button
                    className="text-white bg-black p-2 cursor-pointer active:bg-black active:text-white hover:border-l hover:text-black hover:bg-white"
                    type="submit"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default LetterBox;
