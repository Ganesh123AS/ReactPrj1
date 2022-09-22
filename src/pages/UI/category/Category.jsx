import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./category.css";

import men from "../../../assets/image/men.png";
import women from "../../../assets/image/women.png";
import electronics from "../../../assets/image/electronics.png";
import kids from "../../../assets/image/kids.png";

const categoryData = [
    {
        display: "Men",
        imgUrl: men,
    },
    {
        display: "Women",
        imgUrl: women,
    },
    {
        display: "electronics Items",
        imgUrl: electronics,
    },
    {
        display: "Kids Store",
        imgUrl: kids,
    },
];

const Category = () => {
    return(
        <>
        <Container>
            <Row>
                {
                    categoryData.map( (item, index) => ( 
                <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
                    <div className="category_item d-flex align-items-center gap-4">
                        <div className="category_img">
                            <img src={item.imgUrl} alt="imges"/>
                        </div>
                        <h5>{item.display}</h5>
                    </div>
                </Col>
                    ) )
                }
            </Row>
        </Container>
        </>
    )
}

export default Category;