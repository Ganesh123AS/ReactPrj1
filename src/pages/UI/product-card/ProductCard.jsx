import React from "react";
import "./product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cartSlice";


const ProductCard = (props) => {

    const {id, title, image, price} = props.item;

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image,
            price,
        }))
    }


    return(
        <>
        <div className="product_item">
            <div className="product_img">
                <img src={image} alt="product-img" className="w-50" />
            </div>

            <div className="product_content">
                <h4><Link to={`/item/${id}`}>{title}</Link></h4>
                <div className="d-flex align-items-center justify-content-between">
                    <span className="product_price">{price}</span>
                    <button className="addToCart_btn" onClick={addToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductCard;