import React from "react";


    export  function storeSession(data){
        localStorage.setItem('sessionData',JSON.stringify(data));
        //localStorage.getItem('someItemsList');
        console.log("Stored Data "+localStorage.getItem('sessionData'));
        console.log("Stored Data "+localStorage.getItem('sessionData').length);
       
    }

    export   function getstorageSession(){
      return localStorage.getItem('sessionData');
    }

    export function clearSessionData(){
      localStorage.removeItem('sessionData');
    }
    
 
