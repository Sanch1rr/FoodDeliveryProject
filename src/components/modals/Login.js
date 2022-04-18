import { Form, Modal, Button, Nav, Container, NavLink } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../../styles/login.css";
import { userServices } from "../../services/userServices";
import { useNavigate } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [screenSize, setScreenSize] = useState();
  const history = useNavigate();
  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);
  const handleSubmit = (e) => {
    userServices
      .loginUser({
        email: e.target[0].value,
        password: e.target[1].value,
      })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.status);
      });
  };

  return (
    <>
      {screenSize < 992 ? (
        <div className="login-mt">
          <div className="login-title">
            <div className="login d-flex">
              <img src="/images/iconline.svg" alt="" />
              <p
                style={{
                  fontWeight: "700",
                  margin: "30px 10px",
                }}
              >
                НЭВТРЭХ
              </p>
            </div>
          </div>{" "}
          <Form className="" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>И-мэйл</Form.Label>
              <Form.Control
                type="email"
                placeholder="И-мэйл хаягаа оруулна уу."
                autoFocus
                className="login-input"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Нууц үг</Form.Label>
              <Form.Control
                type="password"
                placeholder="Нууц үгээ оруулна уу."
                autoFocus
                className="login-input"
              />
            </Form.Group>
            <a
              href=""
              className="d-flex text-end flex-row-reverse"
              style={{
                textDecoration: "none",
                marginBottom: "25px",
                color: "black",
              }}
            >
              Нууц үгээ мартсан?
            </a>
            <Button type="submit">НЭВТРЭХ</Button>

            <span
              className="d-flex justify-content-center"
              style={{
                fontSize: "12px",
                textDecoration: "underline",
                padding: "10px",
              }}
            >
              эсвэл
            </span>

            <Button
              onClick={() => {
                history("/register");
              }}
            >
              БҮРТГҮҮЛЭХ
            </Button>
          </Form>
        </div>
      ) : (
        <>
          <Nav.Link id="navbar-menu-link" onClick={handleShow}>
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
          <Modal show={show} onHide={handleClose} style={{ fontSize: "14px" }}>
            <Modal.Body>
              <div className="login-title d-flex justify-content-between">
                <div className="login d-flex">
                  <img src="/images/iconline.svg" alt="" />
                  <p
                    style={{
                      fontWeight: "700",
                      margin: "30px 10px",
                    }}
                  >
                    НЭВТРЭХ
                  </p>
                </div>
                <img
                  src="/images/iconclose.svg"
                  alt=""
                  onClick={handleClose}
                  style={{ marginRight: "10px" }}
                />
              </div>{" "}
              <Form className="" onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>И-мэйл</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="И-мэйл хаягаа оруулна уу."
                    autoFocus
                    className="login-input"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Нууц үг</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Нууц үгээ оруулна уу."
                    autoFocus
                    className="login-input"
                  />
                </Form.Group>
                <a
                  href=""
                  className="d-flex text-end flex-row-reverse"
                  style={{
                    textDecoration: "none",
                    marginBottom: "25px",
                    color: "black",
                  }}
                >
                  Нууц үгээ мартсан?
                </a>
                <Button type="submit">НЭВТРЭХ</Button>

                <span
                  className="d-flex justify-content-center"
                  style={{
                    fontSize: "12px",
                    textDecoration: "underline",
                    padding: "10px",
                  }}
                >
                  эсвэл
                </span>

                <Button
                  onClick={() => {
                    handleClose();
                    history("/register");
                  }}
                >
                  БҮРТГҮҮЛЭХ
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
}
export default Login;
