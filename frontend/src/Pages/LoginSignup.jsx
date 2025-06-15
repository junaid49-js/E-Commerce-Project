import React, { useState } from "react";

const LoginSignup = () => {
    const [currentState, setCurrentState] = useState("Sign Up");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
    };

    return (
        <form
            onSubmit={onSubmitHandler}
            className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
        >
            <div className="inline-flex items-center gap-2 mb-2 mt-10">
                <p className="text-3xl">{currentState}</p>
                <hr className="border-none h-0.5 w-8 bg-gray-800" />
            </div>
            {currentState === "Sign Up" ? (
                <input
                    className="w-full px-3 py-2 border border-gray-800"
                    type="text"
                    placeholder="Name"
                    required
                />
            ) : null}
            <input
                className="w-full px-3 py-2 border border-gray-800"
                type="email"
                placeholder="Email"
                required
            />
            <input
                className="w-full px-3 py-2 border border-gray-800"
                type="password"
                placeholder="Password"
                required
            />
            <button className="bg-black text-white px-12 py-2" type="submit">
                {currentState}
            </button>
            {currentState === "Sign Up" ? (
                <p>
                    Already have an account?{" "}
                    <span
                        onClick={() => {
                            currentState === "Sign Up"
                                ? setCurrentState("Log In")
                                : setCurrentState("Sign Up");
                        }}
                    >
                        Log in here
                    </span>
                </p>
            ) : (
                <p>
                    Create a new account{" "}
                    <span
                        onClick={() => {
                            currentState === "Log In"
                                ? setCurrentState("Sign Up")
                                : setCurrentState("Log In");
                        }}
                    >
                        Sign Up here
                    </span>
                </p>
            )}
        </form>
    );
};

export default LoginSignup;
