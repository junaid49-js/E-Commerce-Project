import React, { useContext, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } =
        useContext(ShopContext);

    const location = useLocation();

    return showSearch && location.pathname == "/collection" ? (
        <div className="border-t border-b text-center bg-gray-100">
            <div className="inline-flex items-center justify-center border-gray-400 mx-3 my-6 gap-4 w-full sm:w-1/2  py-2 px-5 border rounded-full overflow-hidden">
                <input
                    className="flex-1 bg-inherit outline-none"
                    type="text"
                    name="searchbar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    id=""
                    placeholder="Search....."
                />
                <img className="w-4" src={assets.search_icon} alt="" />
            </div>
            <img
                className="inline w-3 cursor-pointer"
                onClick={() => setShowSearch(false)}
                src={assets.cross_icon}
                alt=""
            />
        </div>
    ) : null;
};

export default SearchBar;
