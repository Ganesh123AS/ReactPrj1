import React from "react";

import { ListGroup } from "reactstrap";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

import "./carts.css";

import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/cartUiSlice";

const Carts = () => {

    const dispatch = useDispatch();

    const cartProducts = useSelector( (state) => state.cart.cartItems);

    const totalAmount = useSelector( (state) => state.cart.totalAmount);

    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    };

    return(
        <>
        <div className="cart_container">
            <ListGroup className="cart">

                <div className="cart_close">
                    <span onClick={toggleCart}><i className=" ri-close-fill "></i></span>
                </div>

                <div className="cart_item_list">
                    {
                        cartProducts.length === 0 ? (<h5 className="text-center mt-5">No Items Added To Cart</h5>)
                         : ( cartProducts.map( (item, index) => (
                            <CartItem item={item} key={index} />
                        ) ))
                    };                   
                </div>

                <div className="cart_bottom d-flex align-items-center justify-content-between">
                    <h5>Subtotal Amount: <span>Rs {totalAmount}</span> </h5>
                    <button><Link to="/checkout" onClick={toggleCart}>Checkout</Link></button>
                </div>
            </ListGroup>
        </div>
        </>
    )
}

export default Carts;