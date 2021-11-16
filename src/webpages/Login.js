import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import logo from "../images/karnataka-govt-logo.png";
import * as Constants from "../utils/Constants";
import { useHistory } from "react-router-dom";
import Webpages from ".";
import basavaraj from "../images/basavaraj.jpeg";
import ukps from "../images/ukps.jpg";
import {storeSession,getstorageSession} from "../utils/Session";
import { Redirect } from 'react-router';


const axios = require("axios");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const[refs,setrefs]=React.useState(true);
  // localStorage.setItem('login', false);
  //localStorage.clear();
  let result = localStorage.getItem("login");
  const io=()=>{
  //  browserHistory.push('/')
 return(<>
 <Redirect to='/' /></>) ;
    console.log('Data Not Present');
  };
  
  if(getstorageSession()!=null){
    history.push("/transactions/general-information");
    console.log('Data Present');
  }else{
   // history.push('/sessionNotFound');
   // io();
  }
  React.useEffect(() => {
    console.log('Hello from useEffect!');
   // location.reload()
  }, []);
  const refreshPage = ()=>{
    // if(refs==true){
    //  // window.location.reload(false);
    // }
    // setrefs(false);
   
  
 }
 

 // window.location.reload(false);
  
  // }else{
  //   history.push('/');
  // }

  // if(result){
  //   history.push("/transactions/general-information");
  // }
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function submit() {
    let userName = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    axios
      .get(Constants.url + "UKP/rest/endpoints/verifyUser", {
        params: {
          "uname": userName.trim(),
          "pwd": password.trim(),
        },
      })
      .then((res) => {
        if (res.data.statusCode == 200 && res.data.status == true) {
          storeSession(res.data);
          localStorage.setItem('USER_ID', res.data.Id);
          localStorage.setItem('UserRole', res.data.UserRole);            
          console.log("USER_ID -> "+localStorage.getItem('USER_ID'));
          console.log("UserRole -> "+localStorage.getItem('UserRole'));
          history.push("/transactions/general-information");
          //localStorage.setItem('Id', res.data.Id);
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
      {
      
      refreshPage()
      }
      <img src={logo} className="center" width="50" height="150" />
      <img
        src={basavaraj}
        style={{ borderRadius: "50%" }}
        className="topleft"
        width="10%"
        height="auto"
      />
      <img
        src={ukps}
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
            <Form.Label>User Name</Form.Label>
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
            style={{ marginLeft:"8px" ,marginRight:"16px" ,marginBottom:"10px"}}
            disabled={!validateForm()}
            onClick={submit}>
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
