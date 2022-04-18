import React, { useEffect, useState } from "react";
import "../styles/menuMS.css";
import { otherServices } from "../services/otherServices";
import { NavLink } from "react-bootstrap";
import SingleCard from "./SingleCard";
import { Container } from "react-bootstrap";
import { useFood } from "../contexts/FoodContext";
import { Route, Routes } from "react-router-dom";

export default function Menu() {
  const [filterdFoods, setFilteredFoods] = useState([]);
  const [foods, setfoods] = useFood();
  const hool = (e) => {
    setFilteredFoods(foods.filter((food) => food.category == e.target.name));
  };
  console.log(filterdFoods);
  useEffect(() => {
    setFilteredFoods(foods.filter((food) => food.category === "Үндсэн хоол"));
  }, [foods]);
  const sale = () => {
    setFilteredFoods(foods.filter((sales) => sales.discount > 0));
  };
  return (
    <Container className="menu-height">
      <ul className="menu-btns">
        <li>
          <NavLink
            className={
              filterdFoods.category === "Үндсэн хоол" ? "active" : "menu-btn"
            }
            onClick={hool}
            to="/menu/menu1"
            name="Үндсэн хоол"
          >
            Үндсэн хоол
          </NavLink>
        </li>
        <li>
          <NavLink
            className="menu-btn "
            onClick={hool}
            to="menu/menu2"
            name="Салад ба зууш"
          >
            Салад ба зууш
          </NavLink>
        </li>
        <li>
          <NavLink
            className="menu-btn "
            onClick={hool}
            to="/teachers"
            name="Амттан"
          >
            Амттан
          </NavLink>
        </li>
        <li>
          <NavLink
            className="menu-btn"
            onClick={sale}
            to="/courses"
            name="Хямдралтай"
          >
            Хямдралтай
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route
          path="*"
          element={
            <div className="d-flex flex-wrap">
              {filterdFoods.map((food, index) => (
                <SingleCard data={food} key={index} />
              ))}
            </div>
          }
        ></Route>
      </Routes>
    </Container>
  );
}
