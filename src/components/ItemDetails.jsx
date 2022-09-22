import React, { useState, useEffect } from "react";

import Product from "../assets/product/Product";
import { useParams } from "react-router-dom";
import Helmet from "../pages/helmet/Helmet";
import CommonSecton from "../pages/UI/comon-secrion/CommonSection";
import { Container,Row, Col } from "reactstrap";

import ProductCard from "../pages/UI/product-card/ProductCard";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";

import "../App.css";

const ItemDetails = () => {

    const [tab, setTab] = useState("description")

    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [reviewMsg, setReviewMsg] = useState("");

    const {id} = useParams()
    const dispatch = useDispatch();

    const product = Product.find(product => product.id === id)
    const [previewImg, setPreviewImg] = useState(product.image)
    const {title, price, category, description, image} = Product;

    const relatedProduct = Product.filter( (item) => category === item.category)

    const addItem = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                price,
                image,
            })
        )
    }

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(enteredName, enteredEmail, reviewMsg)
    }

    useEffect( () => {
        setPreviewImg(product.image)
    }, [Product] )

    useEffect( () => {
        window.scrollTo(0,0)
    }, [product] )

    return(
        <>
        <Helmet titlle="Product-details">
        <CommonSecton title={title} />

        <section>
            <Container>
                <Row>
                    <Col lg="2" md="2">
                        <div className="product_images">
                            <div className="img_item mb-2" onClick={ () => setPreviewImg(Product.image) }>
                                <img src={product.image} alt="image" className="w-50" />
                            </div>
                            <div className="img_item mb-2" onClick={ () => setPreviewImg(Product.image) }>
                                <img src={product.image} alt="image" className="w-50" />
                            </div>
                            <div className="img_item mb-2" onClick={ () => setPreviewImg(Product.image) }>
                                <img src={product.image} alt="image" className="w-50" />
                            </div>
                        </div>
                    </Col>

                    <Col lg="4" md="4">
                        <div className="product_main_img">
                            <img src={previewImg} alt="image" className="w-100" />
                            </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="single_product_content">
                            <h2 className="product_title mb-3">{title}</h2>
                            <span className="product_price">Rs {price}</span>
                            <p className="category mb-5">Category: <span>{category}</span></p>
                            <button onClick={addItem} 
                            className="addToCart_btn">Add To Cart</button>
                        </div>
                    </Col>

                    <Col lg="12">
                        <div className="tabs d-flex align-items-center gap-5 py-3">
                            <h5 className={` ${tab === "description" ?  "tab_active" : "" }`} 
                            onClick={ () => setTab("description") }>Description</h5>
                            <h6 className={` ${tab === "review" ?  "tab_active" : "" }`} 
                             onClick={ () => setTab("review") }>Review</h6>
                        </div>

                        {
                            tab === "description" ? (<div className="tab_content">{description}</div>)
                            :  (<div className="tab_form">
                            <div className="review">
                                <p className="user_name mb-0">Sameer Bhatt</p>
                                <p className="user_email"> Bhattsameer127@gmail.com</p>
                                <p className="feedback_text">Great Product</p>
                            </div>
                            <div className="review">
                                <p className="user_name mb-0">Sameer Bhatt</p>
                                <p className="user_email"> Bhattsameer127@gmail.com</p>
                                <p className="feedback_text">Great Product</p>
                            </div>
                            <div className="review">
                                <p className="user_name mb-0">Sameer Bhatt</p>
                                <p className="user_email"> Bhattsameer127@gmail.com</p>
                                <p className="feedback_text">Great Product</p>
                            </div>

                            <form className="form" onSubmit={submitHandler}>
                                <div className="form_group">
                                    <input type="text" 
                                    placeholder="Enter Your Name" 
                                    onChange={(e) => setEnteredName(e.target.value)} required
                                    />
                                </div>
                                <div className="form_group">
                                    <input type="text" placeholder="Enter Your Name" 
                                    onChange={(e) => setEnteredEmail(e.target.value)}
                                    required/>
                                </div>
                                <div className="form_group">
                                    <twxtarea rows={5} type="text" 
                                    placeholder="Enter Your Name" 
                                    onChange={(e) => setEnteredEmail(e.target.value)}
                        required/>
                                </div>

                                <button type="Submit" className="addToCart_Btn">Submit</button>
                            </form>
                        </div>
                        )}
                    </Col>

                    <Col lg="12" className="mb-5 mt-4">
                        <h2 className="related__Product-title">You Might Also Like</h2>
                    </Col>

                    {
                        relatedProduct.map( (item) => (
                            <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                                <ProductCard item={item} />
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </section>
        </Helmet>
        </>
    )
}

export default ItemDetails;