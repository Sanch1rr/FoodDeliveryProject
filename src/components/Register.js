import React from "react";
import { Form, Button } from "react-bootstrap";
import "../styles/register.css";
import { userServices } from "../services/userServices";

const handleSubmit = (e) => {
  userServices
    .signUpUser({
      email: e.target[0].value,
      password: e.target[1].value,
      name: e.target[2].value,
      address: e.target[3].value,
    })
    .then((res) => {
      return res.json();
    });
};

export default function Register() {
  return (
    <div>
      <div className="register">
        <div className="register-title">
          <div className="reg d-flex">
            <img src="/images/iconline.svg" alt="" />
            <p
              style={{
                fontWeight: "700",
                margin: "30px 10px",
              }}
            >
              БҮРТГҮҮЛЭХ
            </p>
          </div>
        </div>{" "}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Нэр</Form.Label>
            <Form.Control
              type="text"
              placeholder="Нэрээ оруулна уу."
              autoFocus
              className="register-input"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>И-мэйл</Form.Label>
            <Form.Control
              type="email"
              placeholder="И-мэйл хаягаа оруулна уу."
              autoFocus
              className="register-input"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Хаяг</Form.Label>
            <Form.Control
              type="text"
              placeholder="Хаягаа оруулна уу."
              autoFocus
              className="register-input"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Нууц үг</Form.Label>
            <Form.Control
              type="password"
              placeholder="Нууц үгээ оруулна уу."
              autoFocus
              className="register-input"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
            <Form.Label>Нууц үг давтах</Form.Label>
            <Form.Control
              type="password"
              placeholder="Нууц үгээ давтана уу."
              autoFocus
              className="register-input"
            />
          </Form.Group>
          <div className="register-check d-flex justify-content-center mb-5">
            <input className="register-check-input me-2" type="checkbox" />
            <label className="register-check-label">
              <a href="#!">Үйлчилгээний нөхцөл зөвшөөрөх</a>
            </label>
          </div>
          <Button type="submit">БҮРТГҮҮЛЭХ</Button>
        </Form>
      </div>
    </div>
  );
}
