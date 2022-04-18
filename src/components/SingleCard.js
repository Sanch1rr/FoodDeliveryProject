import React from "react";
import "../styles/singleCardZul.css";

export default function SingleCard(props) {
  return (
    <div className="d-flex">
      <div className="card">
        <div className="hover">
          <img src={props.data.image} alt="" />
          <a href="" className="basket-text">
            Сагслах
          </a>
        </div>
        <div className="discount">
          <p class="activePrice">{props.data.discount + "%"}</p>
          <img className="card-img" src={props.data.img} />
        </div>

        <div className="card-desc">
          <p className="card-name">{props.data.name}</p>
          <span className="price">
            {props.data.price - (props.data.price * props.data.discount) / 100}
            {"₮"}
          </span>
          <strike className="price-strike">${props.data.price}</strike>
        </div>
      </div>
    </div>
  );
}
