import React from "react";
import { useHistory } from "react-router-dom";
import {storeSession,getstorageSession,clearSessionData} from "../utils/Session";

export default function SignOut(){
    let history = useHistory();

    clearSessionData();
    localStorage.removeItem('USER_ID');
    localStorage.removeItem('UserRole');

    if(getstorageSession()!=null){
        history.push("/transactions/general-information");
      }else{
        history.push('/');
      }

}