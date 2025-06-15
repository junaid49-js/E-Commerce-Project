import React, { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assets";
import ProductItem from "../Components/ProductItem";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";

const Collection = () => {
    const [showFilter, setShowFilter] = useState(false);
    const { search, setSearch, products } = useContext(ShopContext);
    const [allProducts, setAllProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState("relevance");

    const toggleCategory = (event) => {
        if (category.includes(event.target.value)) {
            setCategory((prev) =>
                prev.filter((item) => item !== event.target.value)
            );
        } else {
            setCategory((prev) => [...prev, event.target.value]);
        }
    };

    const toggleSubCategory = (event) => {
        if (subCategory.includes(event.target.value)) {
            setSubCategory((prev) =>
                prev.filter((item) => item !== event.target.value)
            );
        } else {
            setSubCategory((prev) => [...prev, event.target.value]);
        }
    };

    const applyFilter = () => {
        let productsCopy = products.slice();

        if (category.length > 0) {
            productsCopy = productsCopy.filter((item) =>
                category.includes(item.category)
            );
        }

        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter((item) =>
                subCategory.includes(item.subCategory)
            );
        }

        if (sortType === "low-high") {
            productsCopy.sort((a, b) => a.price - b.price);
        } else if (sortType === "high-low") {
            productsCopy.sort((a, b) => b.price - a.price);
        }

        if (search) {
            productsCopy = productsCopy.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        setAllProducts(productsCopy);
    };

    useEffect(() => {
        applyFilter();
    }, [category, subCategory, sortType, search]);

    const filterClick = () => {
        setShowFilter(showFilter ? false : true);
    };
    return (
        <div className="flex flex-col sm:flex-row gap-8 border-t">
            <div className="flex flex-col sm:flex-row sm:gap-10 gap-1 pt-10">
                <div className="min-w-60">
                    <p
                        onClick={filterClick}
                        className="my-2 text-xl flex items-center justify-between cursor-pointer gap-2"
                    >
                        Filters
                        <img
                            className={`h-3 sm:hidden ${
                                showFilter ? "rotate-90" : ""
                            } transition-transform duration-500`}
                            src={assets.dropdown_icon}
                            alt="drop down icon"
                        />
                    </p>
                    <div
                        className={`border border-gray-300 pl-5 py-3 mt-6 ${
                            showFilter ? "" : "hidden"
                        } block sm:block`}
                    >
                        <p className="mb-3 text-sm font-medium">Categories</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                            <p className="flex gap-2">
                                <input
                                    className="w-3"
                                    type="checkbox"
                                    value={"Men"}
                                    onChange={toggleCategory}
                                    name=""
                                    id=""
                                />
                                Men
                            </p>
                            <p className="flex gap-2">
                                <input
                                    className="w-3"
                                    type="checkbox"
                                    value={"Women"}
                                    onChange={toggleCategory}
                                    name=""
                                    id=""
                                />
                                Women
                            </p>
                            <p className="flex gap-2">
                                <input
                                    className="w-3"
                                    type="checkbox"
                                    value={"Kids"}
                                    onChange={toggleCategory}
                                    name=""
                                    id=""
                                />
                                Kids
                            </p>
                        </div>
                    </div>
                    <div
                        className={`border border-gray-300 pl-5 py-3 mt-6 ${
                            showFilter ? "" : "hidden"
                        } block sm:block `}
                    >
                        <p className="mb-3 text-sm font-medium">Types</p>
                        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                            <p className="flex gap-2">
                                <input
                                    className="w-3"
                                    type="checkbox"
                                    value={"Topwear"}
                                    onChange={toggleSubCategory}
                                    name=""
                                    id=""
                                />
                                Topwear
                            </p>
                            <p className="flex gap-2">
                                <input
                                    className="w-3"
                                    type="checkbox"
                                    value={"Bottomwear"}
                                    onChange={toggleSubCategory}
                                    name=""
                                    id=""
                                />
                                Bottomwear
                            </p>
                            <p className="flex gap-2">
                                <input
                                    className="w-3"
                                    type="checkbox"
                                    value={"Winterwear"}
                                    onChange={toggleSubCategory}
                                    name=""
                                    id=""
                                />
                                Winterwear
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-10 my-2">
                <div className="flex items-center justify-between mb-4">
                    <Title text1={"Our"} text2={"Collection"} />
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className="border rounded p-2"
                        name=""
                        id=""
                    >
                        <option value="relevance">Sort By: Relevence</option>
                        <option value="low-high">Sort By: Low to High</option>
                        <option value="high-low">Sort By: High to Low</option>
                    </select>
                </div>
                <div>
                    <div className="grid {sm:pt-10 grid-cols-2 md:grid-cols-4 gap-4">
                        {allProducts.map((item, index) => (
                            <ProductItem
                                key={index}
                                id={item._id}
                                image={item.image}
                                name={item.name}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;
