import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/image/logo.jpg";
import "../footer/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <>
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3" md="4" sm="6">
                        <div className="logo footer_logo text-start">
                            <img src={logo} alt="logo" />
                            <h5>Explore Us</h5>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, qui. </p>
                        </div>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                        <h4 className="footer_title">Delivery Time</h4>
                        <ListGroup>
                            <ListGroupItem className="delivery_time_item border-0 ps-0">
                                <span>Monday - Thursday</span>
                                <p>10:00am - 05:00pm</p>
                            </ListGroupItem>
                            <ListGroupItem className="delivery_time_item border-0 ps-0">
                                <span>Friday</span>
                                <p>10:00am - 01:00pm</p>
                            </ListGroupItem>
                            <ListGroupItem className="delivery_time_item border-0 ps-0">
                                <span>Saturday</span>
                                <p>Offday</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                    <h4 className="footer_title">Delivery Time</h4>
                        <ListGroup>
                            <ListGroupItem className="delivery_time_item border-0 ps-0">
                                <span>Monday - Thursday</span>
                                <p>10:00am - 05:00pm</p>
                            </ListGroupItem>
                            <ListGroupItem className="delivery_time_item border-0 ps-0">
                                <span>Friday</span>
                                <p>10:00am - 01:00pm</p>
                            </ListGroupItem>
                            <ListGroupItem className="delivery_time_item border-0 ps-0">
                                <span>Saturday</span>
                                <p>Offday</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg="3" md="4" sm="6">
                    <h4 className="footer_title">Delivery Time</h4>
                        <ListGroup>
                            <ListGroupItem className="delivery_time_item border-0 ps-0">
                                <span>Monday - Thursday</span>
                                <p>10:00am - 05:00pm</p>
                            </ListGroupItem>
                            <ListGroupItem className="delivery_time_item border-0 ps-0">
                                <span>Friday</span>
                                <p>10:00am - 01:00pm</p>
                            </ListGroupItem>
                            <ListGroupItem className="delivery_time_item border-0 ps-0">
                                <span>Saturday</span>
                                <p>Offday</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col lg="6" md="6">
                        <p className="copyright">Copyright -@2022, Website made by Sameer Bhatt.<br></br> All Right Reserved</p>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="social_media d-flex gap-4 align-items-center justify-content-end">
                            <p className="follow">Follow:</p>
                            <span><Link to="https://www.facebook.com"><i className="ri-facebook-line"></i></Link></span>
                            <span><Link to="https://www.twitter.com"><i className="ri-twitter-line"></i></Link></span>
                            <span><Link to="https://www.instagram.com"><i className="ri-instagram-line"></i></Link></span>
                            <span><Link to="https://www.whatsapp.com"><i className="ri-whatsapp-line"></i></Link></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    )
}
export default Footer;