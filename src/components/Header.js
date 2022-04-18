import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import "../css/header.css";
import OffCanvasExample from "./modals/BasketSideBar";

export default function Header() {
  const [selected, setSelected] = useState("mainSel");
  const [login, setLogin] = useState(true);
  const [name1, setName] = useState("Hongoroo");
  const [tablet, setTablet] = useState(true);

  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand
          href="#"
          style={{ color: "#f17228", fontWeight: "bold" }}
          className="navbar-logo"
        >
          <img src="./images/iamage.png" alt="" className="header-logo" />
          <span className="menu-text1">Food delivery</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="navbar-toggle "
        />

        <Navbar.Collapse className="justify-content-around" id="navbarScroll">
          <Nav
            id="navbarMenu"
            navbarScroll
            defaultActiveKey="/action1"
            className="nav-collapse"
          >
            <Nav.Link
              id="navbar-menu-text"
              href="#action1"
              onClick={() => setSelected("mainSel")}
              className={selected == "mainSel" ? "activeMen" : "inactiveMen"}
            >
              <span className="menu-text2">НҮҮР</span>
            </Nav.Link>
            <Nav.Link
              id="navbar-menu-text"
              href="#action2"
              onClick={() => setSelected("foodSel")}
              className={selected == "foodSel" ? "activeMen" : "inactiveMen"}
            >
              <span className="menu-text2">ХООЛНЫ ЦЭС</span>
            </Nav.Link>
            <Nav.Link
              id="navbar-menu-text"
              href="#action3"
              onClick={() => setSelected("mapSel")}
              className={selected == "mapSel" ? "activeMen" : "inactiveMen"}
            >
              <span className="menu-text2">ХҮРГЭЛТИЙН БҮС</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex navbar-form">
          <Form id="navbar-menu-search" className="d-flex">
            <svg
              style={{ margin: "15px" }}
              id="form-icon"
              className="search-svg"
              className={`d-${tablet ? "flex" : "none"} d-lg-none`}
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              onClick={() => setTablet(false)}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9062 11.0918L9.07031 8.25586C9 8.20898 8.92969 8.16211 8.85938 8.16211H8.55469C9.28125 7.31836 9.75 6.19336 9.75 4.97461C9.75 2.30273 7.54688 0.0996094 4.875 0.0996094C2.17969 0.0996094 0 2.30273 0 4.97461C0 7.66992 2.17969 9.84961 4.875 9.84961C6.09375 9.84961 7.19531 9.4043 8.0625 8.67773V8.98242C8.0625 9.05273 8.08594 9.12305 8.13281 9.19336L10.9688 12.0293C11.0859 12.1465 11.2734 12.1465 11.3672 12.0293L11.9062 11.4902C12.0234 11.3965 12.0234 11.209 11.9062 11.0918ZM4.875 8.72461C2.78906 8.72461 1.125 7.06055 1.125 4.97461C1.125 2.91211 2.78906 1.22461 4.875 1.22461C6.9375 1.22461 8.625 2.91211 8.625 4.97461C8.625 7.06055 6.9375 8.72461 4.875 8.72461Z"
                fill="#f17228"
              />
            </svg>
            <FormControl
              id="form-control-css"
              type="search"
              placeholder="Хайх"
              aria-label="Search"
              className="form-control"
              className={`d-${tablet ? "none" : "block"} d-lg-block`}
            />
          </Form>
          <div className="d-flex">
            <OffCanvasExample />
            {/* <Nav.Link href="#action4" id="navbar-menu-link">
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
             
            </Nav.Link> */}
            {login ? (
              <Nav.Link
                href="#action5"
                id="navbar-menu-link"
                onClick={() => {
                  setLogin(false);
                }}
              >
                <svg
                  className="logo"
                  style={{ margin: "5px" }}
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.43359 9.0625C8.64062 9.0625 8.28516 9.5 7 9.5C5.6875 9.5 5.33203 9.0625 4.53906 9.0625C2.51562 9.0625 0.875 10.7305 0.875 12.7539V13.4375C0.875 14.1758 1.44922 14.75 2.1875 14.75H11.8125C12.5234 14.75 13.125 14.1758 13.125 13.4375V12.7539C13.125 10.7305 11.457 9.0625 9.43359 9.0625ZM11.8125 13.4375H2.1875V12.7539C2.1875 11.4414 3.22656 10.375 4.53906 10.375C4.94922 10.375 5.57812 10.8125 7 10.8125C8.39453 10.8125 9.02344 10.375 9.43359 10.375C10.7461 10.375 11.8125 11.4414 11.8125 12.7539V13.4375ZM7 8.625C9.16016 8.625 10.9375 6.875 10.9375 4.6875C10.9375 2.52734 9.16016 0.75 7 0.75C4.8125 0.75 3.0625 2.52734 3.0625 4.6875C3.0625 6.875 4.8125 8.625 7 8.625ZM7 2.0625C8.42188 2.0625 9.625 3.26562 9.625 4.6875C9.625 6.13672 8.42188 7.3125 7 7.3125C5.55078 7.3125 4.375 6.13672 4.375 4.6875C4.375 3.26562 5.55078 2.0625 7 2.0625Z"
                    fill="#F17228"
                  />
                </svg>
                <span className="menu-text">Нэвтрэх</span>
              </Nav.Link>
            ) : (
              <NavDropdown title={name1} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Миний булан
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Гарах</NavDropdown.Item>
              </NavDropdown>
            )}
          </div>
        </div>
      </Container>
    </Navbar>
  );
}
