import React from "react";
import "../App.css";
import Helmet from "../pages/helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import offer1 from "../assets/image/offer1.jpg";
import offer2 from "../assets/image/offer2.jpg";
import offer3 from "../assets/image/offer3.jpg";
import Category from "../pages/UI/category/Category";

import featureImg01 from "../assets/image/featureImg01.png";
import featureImg02 from "../assets/image/featureImg02.png";
import featureImg03 from "../assets/image/featureImg03.png";

import Product from "../assets/product/Product";
import ProductCard from "../pages/UI/product-card/ProductCard";

import jacket1 from "../assets/image/jacket1.jpg";
import jacket2 from "../assets/image/jacket2.jpg";
import jacket3 from "../assets/image/jacket3.jpg";
import { useEffect, useState } from "react";

import delivery from "../assets/image/delivery.jpg";


const featureData = [
    {
        title: "Quick Delivery",
        imgUrl: featureImg01,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, corporis!",
    },
    {
        title: "Super Dine In",
        imgUrl: featureImg02,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, corporis!",
    },
    {
        title: "Easy Pick Up",
        imgUrl: featureImg03,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, corporis!",
    },
];


const Home = () => {

    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(Product)

    const [hotToday, setHotToday] = useState([])
    useEffect( () => {
        const filteredHot = Product.filter( item => item.category === "hot" )
        const hotFood = filteredHot.slice(0,4)
        setHotToday(hotFood)
    }, [] )


    useEffect( () => {

        if (category === "ALL"){
            setAllProducts(Product)
        }

        if (category === "men's clothing"){
            const filteredProducts = Product.filter( item => item.category === "men's clothing" )
            setAllProducts(filteredProducts)
        }

        if (category === "women's clothing"){
            const filteredProducts = Product.filter( item => item.category === "women's clothing" )
            setAllProducts(filteredProducts)
        }

        if (category === "electronics"){
            const filteredProducts = Product.filter( item => item.category === "electronics" )
            setAllProducts(filteredProducts)
        }

        if (category === "kids"){
            const filteredProducts = Product.filter( item => item.category === "kids" )
            setAllProducts(filteredProducts)
        }

    }, [category] )


    return(
        <>
        <Helmet title="Home">
            <section className="sectiom_body">
                <Container>
                    <Row>
                        
                        <Col className="carosel_img" lg="8" md="8">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={offer1} className="d-block w-100" alt="offer" />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={offer2} className="d-block w-100" alt="offer" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={offer3} className="d-block w-100" alt="offer" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                        </Col>


                        <Col lg="4" md="4">
                            <div className="deal text-center">
                            <h2>HURRY UP</h2>
                            <h4>Grab the Best Deal</h4>
                            <h5>Valid Till Sep-30</h5>
                            <div className="time_left">
                            <span>110</span><span>days</span><span>15</span><span>hr</span><span>20</span><span>Min</span> <br />
                            <button className="botton btn btn-danger btn-outline-success">Buy Now</button><br />
                            <button className="botton btn btn-danger btn-outline-success">Show Products</button>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorum maiores impedit 
                                accusantium omnis ut placeat, tenetur dicta illum harum distinctio accusamus at eveniet 
                                obcaecati animi odio quibusdam saepe modi.</p>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="mt-5 pt-0">
                <Category />
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h4 className="feature_subtitle" >What We Serve</h4>
                            <h2 className="feature_title">Just Sit Back At Home</h2>
                            <h1 className="feature_title" >We Will <span>Take Care</span> Of You!</h1>
                            <p className="mb-1 mt-4 feature_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, delectus.
                                 Ducimus dolorem.</p>
                                 <p className="feature_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, delectus.
                                 Ducimus dolorem.</p>
                        </Col>

                        {
                            featureData.map( (item,index) =>(
                                <Col lg="4" md="4" key={index} className="mt-5">
                            <div className="feature_item text-center px-5 py-3">
                                <img src={item.imgUrl} alt="feature_img" className="w-20 mb-3"/>
                                <h4 className="fw-bold mb-3">{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </Col>
                            ) )
                        }
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <h2 className="text-center">Popular Items</h2>
                        </Col>
                        <Col lg="12">
                            <div className="item_category d-flex align-items-center gap-4 justify-content-center">
                               
                                <button className= {`all_btn ${category === "ALL" ?  "itemBtnActive" : "" }`}
                                onClick={ () => setCategory("ALL") }>All</button>

                                <button className={`d-flex align-items-center gap-3 ${category === "men's clothing" ?  "itemBtnActive" : "" } `}
                                onClick={ () => setCategory("men's clothing") }>
                                    <img src={jacket1} alt="Mens Jacket" />Men's Clothing</button>

                                <button className={`d-flex align-items-center gap-3 ${category === "women's clothing" ?  "itemBtnActive" : "" } `} 
                                onClick={ () => setCategory("women's clothing") }>
                                    <img src={jacket2} alt="Mens Jacket" />Women's Clothing</button>

                                <button className={`d-flex align-items-center gap-3 ${category === "electronics" ?  "itemBtnActive" : "" } `}
                                onClick={ () => setCategory("electronics") }>
                                    <img src={jacket3} alt="Mens Jacket" />Electronics</button>

                                    <button className={`d-flex align-items-center gap-3 ${category === "kids" ?  "itemBtnActive" : "" } `}
                                onClick={ () => setCategory("kids") }>
                                    <img src={jacket3} alt="Mens Jacket" />Kids</button>

                            </div>
                        </Col>


                        {
                            allProducts.map( item => (
                                <Col lg="3" md="4" key={item.id} className="mt-5">
                            <ProductCard item={item}/>
                        </Col>
                            ) )
                        }
                        
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                    <Col lg="6" md="6">
                    <img className="w-100" src={delivery} alt="jacket" />
                    </Col>
                    <Col lg="6" md="6">
                        <h1>Wanna Taste</h1>
                        <h2>We Deliver Food Items Too</h2>
                        <h3><span>Enjoy The Offer</span></h3>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <p><i className="ri-checkbox-circle-line"></i>Fresh And Tasty Food</p>
                </button>
                </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quia vero 
                    inventore rerum autem vel, reprehenderit fuga perspiciatis aliquam atque 
                    aperiam nihil culpa at amet tenetur quae a fugiat. Accusantium minus</p>
            </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <p><i className="ri-checkbox-circle-line"></i>Fresh And Tasty Food</p>
                </button>
                </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quia vero 
                    inventore rerum autem vel, reprehenderit fuga perspiciatis aliquam atque 
                    aperiam nihil culpa at amet tenetur quae a fugiat. Accusantium minus</p>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <p><i className="ri-checkbox-circle-line"></i>Fresh And Tasty Food</p>
                </button>
                </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quia vero 
                    inventore rerum autem vel, reprehenderit fuga perspiciatis aliquam atque 
                    aperiam nihil culpa at amet tenetur quae a fugiat. Accusantium minus</p>
            </div>
            </div>
            </div>
                </Col>
                </Row>
                </Container>
            </section>
        
            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-2">
                            <h2>Today's Hot</h2>
                        </Col>

                        {
                            hotToday.map( item => (
                                <Col lg="3" md="4" key={item.id}>
                                    <ProductCard item={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>

            <section>
                
            </section>
        </Helmet>
        </>
    )
}

export default Home;