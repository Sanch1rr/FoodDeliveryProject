import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "../styles/Main.css";

export default function Main() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={100000}>
          <img
            className="slide-mobile w-100 "
            src="/images/m_slide1.png"
            alt="First slide"
          />
          <img
            className="slide-tab w-100 "
            src="/images/t_slide1.png"
            alt="First slide"
          />
          <img
            className="slide-web w-100 "
            src="/images/w_slide1.png"
            alt="First slide"
          />

          <Container>
            <Row className="d-flex align-items-center slide-body">
              <Col className="col-6">
                <img src="/images/slide_food.png" className="mw-100" />
              </Col>
              <Col className="col-6 text-end">
                <div>
                  <h1>
                    MStars Food <br />
                    delivery
                  </h1>
                  <hr
                    style={{
                      height: "3px",
                      color: "#f17228",
                    }}
                  />
                  <p>Хосгүй амтыг хормын дотор хүргэж өгнө</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item interval={30000}>
          <img
            className="slide-mobile w-100 "
            src="/images/m_slide2.png"
            alt="First slide"
          />
          <img
            className="slide-tab w-100 "
            src="/images/t_slide2.png"
            alt="First slide"
          />
          <img
            className="slide-web w-100 "
            src="/images/w_slide2.png"
            alt="First slide"
          />
          <h1
            style={{
              color: "white",
              position: "absolute",
              top: "25%",
              right: "10%",
              textAlign: "end",
            }}
          >
            Сэт хоол гарч <br /> эхэллээ
          </h1>
        </Carousel.Item>
        <Carousel.Item interval={30000}>
          <img
            className="slide-mobile w-100 "
            src="/images/m_slide3.png"
            alt="First slide"
          />
          <img
            className="slide-tab w-100 "
            src="/images/t_slide3.png"
            alt="First slide"
          />
          <img
            className="slide-web w-100 "
            src="/images/w_slide3.png"
            alt="First slide"
          />
          <h1
            style={{
              color: "white",
              position: "absolute",
              top: "25%",
              right: "10%",
            }}
          >
            Тун удахгүй...
          </h1>
        </Carousel.Item>
      </Carousel>

      <div className="features-body mt-0 w-100 pt-5">
        <Container>
          <div className="features d-inline-block w-100 col-12 col-md-4">
            <Row className="d-flex justify-content-around w-100 align-items-center p-3">
              <Col className="col-12 col-md-3 d-flex align-items-center">
                <img src="/images/icontime.svg" alt="" />
                <div className="feature-text">
                  <h4>Шуурхай хүргэлт</h4>
                  <p>30 минутанд таны гарт.</p>
                </div>
              </Col>

              <Col className="col-12 col-md-4 d-flex align-items-center">
                <img src="/images/iconhealth.svg" alt="" />
                <div className="feature-text">
                  <h4>Эрүүл, баталгаат орц</h4>
                  <p>Хамгийн чанартайг танд.</p>
                </div>
              </Col>

              <Col className="col-12 col-md-4 d-flex align-items-center">
                <img src="/images/iconbook.svg" alt="" />
                <div className="feature-text">
                  <h4>Өргөн сонголт</h4>
                  <p>Хамгийн онцгойг танд.</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container>
        <div className="see-foods d-flex justify-content-between align-items-center">
          <div className="food-info d-flex align-items-center">
            <div className="food-info-icon"></div>
            <p> Хямдралтай</p>
          </div>

          <a href="" className="see-all">
            &#8250;
          </a>
        </div>
      </Container>
    </>
  );
}
