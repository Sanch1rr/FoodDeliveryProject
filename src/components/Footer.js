import React from "react";
import "../style/footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer-background">
      <Container className="d-md-flex upperFooter">
        <Row className="footer-size">
          <Col sm="12" className="w-100 d-flex flex-nowrap ">
            <div className="footer-logo w-100">
              <a href="#" target="_blank" className="flex-nowrap  w-100">
                <img className="food-logo" src="./images/logo.png" alt="logo" />

                <span className="title">Food Delivery</span>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 ms-md-5">
          <Col>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home" className="textlink">
                Нүүр
              </Nav.Link>
              <Nav.Link href="/home" className="textlink">
                Хоолны цэс
              </Nav.Link>
              <Nav.Link href="/home" className="textlink text-sm-nowrap">
                Хүргэлтийн бүс
              </Nav.Link>
            </Nav>
          </Col>
          <Col>
            <Nav.Link href="/home" className="textlink">
              Холбоо барих
            </Nav.Link>
            <Nav.Link href="tel:+97677123456" className="phonelink text-nowrap">
              (976) 77123456
            </Nav.Link>
            <Nav.Link href="tel:+97677123456" className="phonelink text-nowrap">
              (976) 77123456
            </Nav.Link>
          </Col>
        </Row>
      </Container>
      <div className="line d-none d-sm-block w-80"></div>
      <Container>
        <Row>
          <Col className="mt-3 m-md-0 ms-5 col-sm-8 col-md-6">
            <div className="social-container">
              <p className="servicelink d-none d-sm-block">
                Бидэнтэй нэгдээрэй
              </p>
              <a href="http://facebook.com" className="facebook social">
                <img src="./images/facebook.png" alt="" />
              </a>
              <a href="http://instagram.com" className="facebook social">
                <img src="./images/instagram.png" alt="" />
              </a>
              <a href="http://twitter.com" className="facebook social">
                <img src="./images/twitter.png" alt="" />
              </a>
            </div>
          </Col>
          <div className="line-1 d-block d-sm-none"></div>
          <Col className="pt-1 d-inline">
            <Nav defaultActiveKey="/home" as="ul">
              <Nav.Item as="li">
                <Nav.Link href="/home" className="servicelink">
                  Үйлчилгээний нөхцөл
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/home" className="servicelink text-wrap">
                  Нууцлалын бодлого
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col className="top  col-12 ">
            <p className="paragraph ">© 2020 MStars Foods LLC </p>
            <p className="paragraph d-none d-sm-block text-nowrap">
              Зохиогчийн эрх хуулиар хамгаалагдсан.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
