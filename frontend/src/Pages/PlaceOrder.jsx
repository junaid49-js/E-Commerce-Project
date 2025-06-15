import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";

const PlaceOrder = () => {
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const { navigate } = useContext(ShopContext);

    return (
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
            <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
                <div className="text-xl sm:text-2xl my-3">
                    <Title text1={"Delivery"} text2={"Information"} />
                </div>
                <div className="flex gap-3">
                    <input
                        className="border border-gray-300 rounded py-2 px-4 w-full"
                        placeholder="First Name"
                        type="text"
                    />
                    <input
                        className="border border-gray-300 rounded py-2 px-4 w-full"
                        placeholder="Last Name"
                        type="text"
                    />
                </div>
                <input
                    className="border border-gray-300 rounded py-2 px-4 w-full"
                    placeholder="E-mail address"
                    type="email"
                />
                <input
                    className="border border-gray-300 rounded py-2 px-4 w-full"
                    placeholder="Street"
                    type="text"
                />
                <div className="flex gap-3">
                    <input
                        className="border border-gray-300 rounded py-2 px-4 w-full"
                        placeholder="City"
                        type="text"
                    />
                    <input
                        className="border border-gray-300 rounded py-2 px-4 w-full"
                        placeholder="State"
                        type="text"
                    />
                </div>
                <div className="flex gap-3">
                    <input
                        className="border border-gray-300 rounded py-2 px-4 w-full"
                        placeholder="Zip-Code"
                        type="number"
                    />
                    <input
                        className="border border-gray-300 rounded py-2 px-4 w-full"
                        placeholder="Country"
                        type="text"
                    />
                </div>
            </div>

            <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <CartTotal />
                </div>

                <div className="mt-12">
                    <Title text1={"Payment"} text2={"Method"} />
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div
                            onClick={() => setPaymentMethod("stripe")}
                            className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
                        >
                            <p
                                className={`min-w-4 h-4 border rounded-full ${
                                    paymentMethod === "stripe"
                                        ? "bg-green-500"
                                        : ""
                                }`}
                            ></p>
                            <img
                                className="h-5 mx-4"
                                src={assets.stripe_logo}
                                alt=""
                            />
                        </div>
                        <div
                            onClick={() => setPaymentMethod("razerpay")}
                            className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
                        >
                            <p
                                className={`min-w-4 h-4 border rounded-full ${
                                    paymentMethod === "razerpay"
                                        ? "bg-green-500"
                                        : ""
                                }`}
                            ></p>
                            <img
                                className="h-5 mx-4"
                                src={assets.razorpay_logo}
                                alt=""
                            />
                        </div>
                        <div
                            onClick={() => setPaymentMethod("cod")}
                            className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
                        >
                            <p
                                className={`min-w-4 h-4 border rounded-full ${
                                    paymentMethod === "cod"
                                        ? "bg-green-500"
                                        : ""
                                }`}
                            ></p>
                            <p className="text-gray-500 text-sm font-medium mx-4">
                                Cash On Delivery
                            </p>
                        </div>
                    </div>

                    <div className="w-full text-end mt-8">
                        <button
                            onClick={() => navigate("/orders")}
                            className="bg-black text-white px-16 py-3 text-sm"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;
