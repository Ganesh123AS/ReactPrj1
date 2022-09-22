import React, { useState } from "react";
import Helmet from "../pages/helmet/Helmet";
import CommonSecton from "../pages/UI/comon-secrion/CommonSection";

import "../App.css";

import { Container, Row, Col } from "reactstrap";

import Product from "../assets/product/Product";
import ProductCard from "../pages/UI/product-card/ProductCard";

import ReactPaginate from "react-paginate";

const AllProducts = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber, setPageNumber] = useState(0)

    const searchedProduct = Product.filter( (item) => {
        if (searchTerm.valueOf === "" ) return item;
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        }
        else {
            console.log("not found");
        }
    })

    const productPerPage = 8
    const visitedPage = pageNumber * productPerPage
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)

    const pageCount = Math.ceil(Product.length / productPerPage)

    const changePage = ( {selected} ) => {
        setPageNumber(selected)
    }

    return(
        <>
        <Helmet title="All Products">
            <CommonSecton title="All Products" />

        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6" sm="6">
                        <div className="search_widget d-flex align-items-center justify-content-between w-50">
                            <input type="text" placeholder="I am looking for....." 
                            value={searchTerm} onChange={ (e) => setSearchTerm(e.target.value) } />
                            <span> <i className="ri-search-line"></i> </span>
                        </div>
                    </Col>
                    <Col lg="6" md="6" sm="6">
                        <div className="sorting_widget text-end">
                            <select className="w-50">
                                <option>Default</option>
                                <option value="ascending">Alphabetical A-Z</option>
                                <option value="descending">Alphabetical Z-A</option>
                                <option value="high-price">High Price</option>
                                <option value="low-price">Low Price</option>
                            </select>
                        </div>
                    </Col>

                    {
                        displayPage.map( (item) => (
                            <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
                                <ProductCard item={item} />
                            </Col>
                        ) )
                    }

                    <div>
                        <ReactPaginate
                        pageCount = {pageCount}
                        onPageChange = {changePage}
                        previousLabel = {"Prev"}
                        nextLabel = {"Next"}
                        containerClassName = "paginationBttns" />
                    </div>


                </Row>
            </Container>
        </section>
        </Helmet>
        </>
    )
}

export default AllProducts;