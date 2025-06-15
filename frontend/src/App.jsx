import { useState } from "react";
import Navbar from "./Components/Navbar";
import Collection from "./Pages/Collection";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import PlaceOrder from "./Pages/PlaceOrder";
import Orders from "./Pages/Orders";
import SearchBar from "./Components/SearchBar";
import { ToastContainer, toast } from "react-toastify";

function App() {
    return (
        <div className="app px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <ToastContainer />
            <Navbar />
            <SearchBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginSignup />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
