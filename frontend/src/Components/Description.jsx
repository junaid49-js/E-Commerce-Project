import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";

const Description = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [productDescription, setProductDescription] = useState(false);

  const fetchProductDescription = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductDescription(item);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductDescription();
  }, [productId]);

  return productDescription ? (
    <div className="pt-10">
      <div className="border-t border-b  transition-opacity ease-in duration-500 opacity-100 ">
        <p className="text-2xl font-medium p-2">Description</p>
        <p className="text-gray-500 p-2">{productDescription.bigDescription}</p>
      </div>
    </div>
  ) : (
    <div className="opacity-0">Product</div>
  );
};

export default Description;
