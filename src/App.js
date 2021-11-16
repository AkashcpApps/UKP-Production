import React, {useState} from "react";
//import {storeSession,getstorageSession} from "../utils/Session";
import './App.css';
import Webpages from './webpages';
import Login from "./webpages/Login";
import { useHistory } from "react-router-dom";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import { getstorageSession } from "./utils/Session";
import SessionNotFound from "./components/SessionNotFound";
function App() {
    let history = useHistory();
    // if (getstorageSession() == null) {
    //     console.log('getstorageSession DATA Present');
    //     return (
    //         <div>
    //             <BrowserRouter>
    //                 <Switch>
    //                     <Route exact path='/' component={Login}></Route>
    //                     <Route exact path='/sessionNotFound' component={SessionNotFound}></Route>
    //                 </Switch>
    //             </BrowserRouter>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <div>
    //             <BrowserRouter>
    //                 <Switch>
    //                     <Route exact path='/' component={Login}></Route>
    //                     <Route exact path='/sessionNotFound' component={SessionNotFound}></Route>
    //                     <Route exact path='/transactions/general-information'component={Webpages}></Route>
    //                 </Switch>
    //             </BrowserRouter>
    //         </div>
    //     );
    // }
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login}></Route>
                    <Route exact path='/sessionNotFound' component={SessionNotFound}></Route>
                    <Route exact path='/transactions/general-information'component={Webpages}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );

}

export default App;

