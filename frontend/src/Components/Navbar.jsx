import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { showSearch, setShowSearch, getCartCount } = useContext(ShopContext);

    return (
        <div className="">
            <nav className="flex items-center justify-between p-4">
                <NavLink to={"/"}>
                    <img
                        className="w-36 cursor-pointer"
                        src={assets.logo}
                        alt=""
                    />
                </NavLink>
                <ul className="md:flex hidden items-center gap-4">
                    <NavLink
                        className="nav-link flex flex-col items-center gap-1"
                        to={"/"}
                    >
                        <p className="cursor-pointer">HOME</p>
                        <hr className="w-3/4 border-none h-0.5 rounded-full bg-gray-700 " />
                    </NavLink>
                    <NavLink
                        className="nav-link flex flex-col items-center gap-1"
                        to={"/collection"}
                    >
                        <p className="cursor-pointer">COLLECTION</p>
                        <hr className="w-3/4 border-none h-0.5 rounded-full bg-gray-700 " />
                    </NavLink>
                    <NavLink
                        className="nav-link flex flex-col items-center gap-1"
                        to={"/about"}
                    >
                        <p className="cursor-pointer">ABOUT</p>
                        <hr className="w-3/4 border-none h-0.5 rounded-full bg-gray-700 " />
                    </NavLink>
                    <NavLink
                        className="nav-link flex flex-col items-center gap-1"
                        to={"/contact"}
                    >
                        <p className="cursor-pointer">CONTACT</p>
                        <hr className="w-3/4 border-none h-0.5 rounded-full bg-gray-700 " />
                    </NavLink>
                </ul>
                <div className="buttons items-center gap-4 flex">
                    <img
                        onClick={() => setShowSearch(showSearch ? false : true)}
                        className="w-5 sm:block hidden cursor-pointer"
                        src={assets.search_icon}
                        alt=""
                    />

                    <div className="relative group">
                        <img
                            className="w-5 sm:block hidden cursor-pointer"
                            src={assets.profile_icon}
                            alt=""
                        />
                        <div className="absolute hidden group-hover:block dropdown-menu right-0 py-4">
                            <div className="flex flex-col bg-slate-200 w-36 py-3 px-5 gap-2 rounded text-gray-500">
                                <p className="cursor-pointer hover:text-gray-950">
                                    My Profile
                                </p>
                                <NavLink to={"/orders"}>
                                    <p className="cursor-pointer hover:text-gray-950">
                                        My Orders
                                    </p>
                                </NavLink>
                                <NavLink to={"/login"}>
                                    <p className="cursor-pointer hover:text-gray-950">
                                        Log In
                                    </p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <NavLink className="relative" to={"/cart"}>
                        <img
                            className="w-5 sm:block hidden cursor-pointer"
                            src={assets.cart_icon}
                            alt=""
                        />
                        <p className="absolute -right-1 -bottom-1 border rounded-full size-4.5 bg-black text-white sm:flex hidden items-center justify-center text-xs">
                            {getCartCount()}
                        </p>
                    </NavLink>
                    <img
                        onClick={() => setVisible(true)}
                        className="w-5 md:hidden block cursor-pointer"
                        src={assets.menu_icon}
                        alt=""
                    />
                </div>
            </nav>
            <div
                className={`absolute top-0 right-0 bottom-0 overflow-hidden ease-in-out duration-300 bg-white transition-all ${
                    visible ? "w-full" : "w-0"
                }`}
            >
                <div className="flex flex-col m-8 h-screen">
                    <div className="flex">
                        <img
                            onClick={() => setVisible(false)}
                            className="cursor-pointer"
                            src={assets.cross_icon}
                            alt=""
                        />
                        <p>Back</p>
                    </div>
                    <div className="flex  flex-col text-2xl mx-auto items-center justify-center gap-4">
                        <NavLink to={"/"}>
                            <p onClick={() => setVisible(false)}>Home</p>
                        </NavLink>
                        <NavLink to={"/collection"}>
                            <p onClick={() => setVisible(false)}>Collection</p>
                        </NavLink>
                        <NavLink to={"/about"}>
                            <p onClick={() => setVisible(false)}>About</p>
                        </NavLink>
                        <NavLink to={"/contact"}>
                            <p onClick={() => setVisible(false)}>Contact</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
