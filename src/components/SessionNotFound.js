import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

export default function SessionNotFound(){
    let history = useHistory();
    const redirect=()=>{
        history.push('/');
    };
    return(<>
 
    <center >
        <h2>401</h2>
    <h3>UnAuthorization Session</h3>
    <p>please login again</p>
    <Button
            className='Loginbutton'
            type="submit"
            style={{ width:'100px',marginLeft:"8px" ,marginRight:"16px" ,marginBottom:"10px"}}
            onClick={redirect}>
            Login Page
          </Button>
    </center>
  
   
    </>);
}