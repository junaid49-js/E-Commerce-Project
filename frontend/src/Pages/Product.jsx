import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import Description from "../Components/Description";

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState("");
    const [size, setSize] = useState("");

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.image[0]);
                return null;
            }
        });
    };

    useEffect(() => {
        fetchProductData();
    }, [productId]);

    return productData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18%] w-full">
                        {productData.image.map((item, index) => (
                            <img
                                onClick={() => setImage(item)}
                                onMouseEnter={() => setImage(item)}
                                src={item}
                                key={index}
                                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                                alt=""
                            />
                        ))}
                    </div>
                    <div className="w-full sm:w-[80%]">
                        <img className="w-full h-auto" src={image} alt="" />
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2">
                        {productData.name}
                    </h1>
                    <div className="flex items-center gap-1 mt-2">
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img
                            src={assets.star_dull_icon}
                            alt=""
                            className="w-3 5"
                        />
                        <p className="pl-2">(122)</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">
                        {currency}
                        {productData.price}
                    </p>
                    <p className="mt-5 text-gray-500 md:w-4/5">
                        {productData.description}
                    </p>
                    <div className="flex flex-col gap-4 my-8">
                        <p>Select Size</p>
                        <div className="flex gap-2">
                            {productData.sizes.map((item, index) => (
                                <button
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 bg-gray-100 cursor-pointer ${
                                        item === size
                                            ? "bg-gray-800 text-white"
                                            : ""
                                    }`}
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={() => addToCart(productData._id, size)}
                        className="bg-black text-white py-2 px-8 active:bg-gray-700 text-sm"
                    >
                        ADD TO CART
                    </button>
                    <hr className="mt-8 sm:w-4/5" />
                    <div className="mt-5 text-sm flex flex-col gap-1 text-gray-500">
                        <p>100% Original Product</p>
                        <p>Cash on delivery is available on this product</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
            <Description />
        </div>
    ) : (
        <div className="opacity-0">Product</div>
    );
};

export default Product;
