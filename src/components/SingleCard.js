import React from "react";
import "../styles/singleCardZul.css";

export default function SingleCard(props) {
  return (
    <div className="d-flex">
      <div className="card">
        <div className="hover">
          <img src="../images/basket_icon.svg" alt="" />
          <a href="" className="basket-text">
            Сагслах
          </a>
        </div>

        <div className="discount">
          <p
            class={`${
              props.data.discount > 0 ? "activePrice" : "disp-noactive"
            }`}
          >
            {props.data.discount + "%"}
          </p>
          <img
            className="card-img"
            src={`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${props.data.image}`}
          />
        </div>

        <div className="card-desc">
          <p className="card-name">{props.data.name}</p>
          <span className="price">
            {props.data.price - (props.data.price * props.data.discount) / 100}
            {"₮"}
          </span>
          <strike
            className={`${
              props.data.discount > 0 ? "price-strike" : "disp-noactive"
            }`}
          >
            {props.data.price}
          </strike>
        </div>
      </div>
    </div>
  );
}
