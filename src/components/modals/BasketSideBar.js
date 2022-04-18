import React, { useEffect, useState } from "react";
import { Container, Row, Col, Offcanvas } from "react-bootstrap";
import "../../styles/Basket.css";
import { otherServices } from "../../services/otherServices";

function OffCanvasExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [foodsData, setfoodsData] = useState([]);

  useEffect(() => {
    otherServices
      .getBasketInfo()
      .then((data) => data.json())
      .then((data) => setfoodsData(data.baskets));
  }, []);

  console.log(foodsData);
  let totalPrice = 0;
  const total = () => {
    foodsData.forEach((foods) => {
      totalPrice += foods.quantity * foods.product.price;
    });
  };
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

  total();
  return (
    <>
      <div onClick={handleShow} className=" me-2 mt-2 ms-3">
        <svg
          className="basket logo"
          style={{ margin: "5px" }}
          width="17"
          height="13"
          viewBox="0 0 17 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0469 5H14.0508L10.5234 0.871094C10.2773 0.597656 9.86719 0.570312 9.59375 0.789062C9.32031 1.03516 9.29297 1.44531 9.51172 1.71875L12.3281 5H4.64453L7.46094 1.71875C7.67969 1.44531 7.65234 1.03516 7.37891 0.789062C7.10547 0.570312 6.69531 0.597656 6.44922 0.871094L2.92188 5H0.953125C0.761719 5 0.625 5.16406 0.625 5.32812V5.98438C0.625 6.17578 0.761719 6.3125 0.953125 6.3125H1.44531L2.21094 11.7539C2.29297 12.4102 2.83984 12.875 3.49609 12.875H13.4766C14.1328 12.875 14.6797 12.4102 14.7617 11.7539L15.5273 6.3125H16.0469C16.2109 6.3125 16.375 6.17578 16.375 5.98438V5.32812C16.375 5.16406 16.2109 5 16.0469 5ZM13.4766 11.5625H3.49609L2.78516 6.3125H14.1875L13.4766 11.5625ZM9.15625 7.84375C9.15625 7.48828 8.85547 7.1875 8.5 7.1875C8.11719 7.1875 7.84375 7.48828 7.84375 7.84375V10.0312C7.84375 10.4141 8.11719 10.6875 8.5 10.6875C8.85547 10.6875 9.15625 10.4141 9.15625 10.0312V7.84375ZM12.2188 7.84375C12.2188 7.48828 11.918 7.1875 11.5625 7.1875C11.1797 7.1875 10.9062 7.48828 10.9062 7.84375V10.0312C10.9062 10.4141 11.1797 10.6875 11.5625 10.6875C11.918 10.6875 12.2188 10.4141 12.2188 10.0312V7.84375ZM6.09375 7.84375C6.09375 7.48828 5.79297 7.1875 5.4375 7.1875C5.05469 7.1875 4.78125 7.48828 4.78125 7.84375V10.0312C4.78125 10.4141 5.05469 10.6875 5.4375 10.6875C5.79297 10.6875 6.09375 10.4141 6.09375 10.0312V7.84375Z"
            fill="#F17228"
          />
        </svg>
        <span className="menu-text">Сагс</span>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className="canvasheader">
          <Offcanvas.Title>Таны сагс</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="me-4">
          <Container>
            {foodsData.map((foods) => {
              return (
                <Row>
                  <Col>
                    <img
                      src={
                        `https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com` +
                        foods.product.image
                      }
                      alt=""
                      className="foodimage"
                    />
                  </Col>
                  <Col>
                    {foods.product.name}

                    <div className="price mt-1">{foods.product.price}₮</div>

                    <div className="d-flex mt-2">
                      <button
                        type="button"
                        className="btn "
                        onClick={handleDecrement}
                      >
                        -
                      </button>

                      <span className="counter px-3 mx-2">
                        {foods.quantity}
                      </span>

                      <button
                        type="button"
                        className="btn "
                        onClick={handleIncrement}
                      >
                        +
                      </button>
                    </div>
                  </Col>
                  <div className="canvasline mt-3"></div>
                </Row>
              );
            })}
          </Container>
        </Offcanvas.Body>

        <p className=" mb-3 me-5 text-end">Нийт: {totalPrice}₮</p>
        <div>
          <button type="button" className=" reserve ">
            Захиалах
          </button>
        </div>
      </Offcanvas>
    </>
  );
}

export default OffCanvasExample;
