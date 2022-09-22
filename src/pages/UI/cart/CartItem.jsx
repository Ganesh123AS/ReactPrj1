import React from "react";
import { ListGroupItem } from "reactstrap";

import "./cartitem.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cartSlice";

const CartItem = ({item}) => {

    const {id, title, price, image, quantity, totalPrice} = item;

    const dispatch = useDispatch();

    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image,
        }))
    };

    const decrementItem = () => {
        dispatch(cartActions.removeItem(id))
    };

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    };

    return(
        <>
        <ListGroupItem className="border-0 cart_item">
            <div className="cart_item_info d-flex gap-3">
                <img src={image} alt="product-img" />
                <div className="cart_product_info d-flex align-items-center w-100 gap-4 justify-content-between">
                    <div>
                        <h5 className="cart_product_title">{title}</h5>
                        <p className="d-flex align-items-center gap-5 cart_product_price"> {quantity}x <span>Rs {totalPrice} </span> </p>
                        <div className="d-flex align-items-center gap-3 justify-content-between cart_btn">
                            <span className="increase_btn" onClick={incrementItem}><i className="ri-add-line"></i></span>
                            <span>{quantity}</span>
                            <span className="decrease_btn" onClick={decrementItem}><i className="ri-subtract-line"></i></span>
                        </div>
                    </div>

                    <span className="delete_btn" onClick={deleteItem}><i className="ri-close-line"></i></span>
                </div>
            </div>
        </ListGroupItem>
        </>
    )
}

export default CartItem;