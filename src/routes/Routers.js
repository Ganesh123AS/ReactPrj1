import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Service from "../components/Service";
import Cart from "../components/Cart";
import Login from "../components/Login";
import Register from "../components/Register";
import AllProducts from "../components/AllProducts";

const Routers = () => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Navigate to="/home" />}> </Route>
            <Route path="/home" element={<Home />} > </Route>
            <Route path="/about" element={<About />} > </Route>
            <Route path="/service" element={<Service />} > </Route>
            <Route path="/contact" element={<Contact />} > </Route>
            <Route path="/cart" element={<Cart />} > </Route>
            <Route path="/login" element={<Login />} > </Route>
            <Route path="/register" element={<Register />} > </Route>
            <Route path="/products" element={<AllProducts />} > </Route>
        </Routes>
        </>
    )
}

export default Routers;