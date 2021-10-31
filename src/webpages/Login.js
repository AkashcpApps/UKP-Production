import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import logo from "../images/karnataka-govt-logo.png";
import * as Constants from "../utils/Constants";
import { useHistory } from "react-router-dom";
import Webpages from ".";
import img2 from "../images/basavaraj.jpeg";
import img3 from "../images/ukps.jpg";

const axios = require("axios");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  // localStorage.setItem('login', false);
  //localStorage.clear();
  let result = localStorage.getItem("login");

  // if(result){
  //   history.push("/transactions/general-information");
  // }
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function submit() {
    let userName = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    // if (userName === "admin" && password === "admin123") {
    //   history.push("/transactions/general-information");
    // }
    axios
      .get(Constants.url + "UKP/rest/endpoints/verifyUser", {
        params: {
          uname: userName,
          pwd: password,
        },
      })
      .then((res) => {
        if (res.data.statusCode == 200 && res.data.status == true) {
       //  alert('Success');
          history.push("/transactions/general-information");
          //localStorage.setItem('login', true);
         // alert("Success");
        } else {
          // history.push("/transactions/general-information");
          // localStorage.setItem('login', true);
         // alert("Failed");
         alert("Wrong username and password");
          console.log("Error");
        }
      })
      .catch((err) => {
        alert("Error " + err);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <img src={logo} className="center" width="50" height="150" />
      <img
        src={img2}
        style={{ borderRadius: "50%" }}
        className="topleft"
        width="10%"
        height="auto"
      />
      <img
        src={img3}
        style={{ borderRadius: "50%" }}
        className="topright"
        width="10%"
        height="auto"
      />

      <div>
        <h3 style={{ textAlign: "center" }}>
          ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲೆ | BAGALKOTE DISTRICT
        </h3>
        <h3 style={{ textAlign: "center" }}>Upper Krishna Project</h3>
      </div>
      <div className="rcorners2">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              id="name"
              type="text"
              value={email}
              style={{ marginLeft:8,marginRight:16 }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              style={{ marginLeft:8,marginRight:16 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            className='Loginbutton'
            type="submit"
            style={{ marginLeft:8,marginRight:16 }}
            disabled={!validateForm()}
            onClick={submit}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
