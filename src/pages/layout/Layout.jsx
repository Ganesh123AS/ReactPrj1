import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routers from "../../routes/Routers";

import { useSelector } from "react-redux";

import Carts from "../UI/cart/Carts.jsx";

const Layout = () => {

    const showCart = useSelector((state) => state.cartUi.cartIsVisible);

    return(
        <>
        <Header />

        {
            showCart && <Carts />
        }

        

        <div>
        <Routers />
        </div>
        
        <Footer />
        </>
    );
};

export default Layout;