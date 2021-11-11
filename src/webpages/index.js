import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import Layout from "../components/Layout";

import Sidebar from "../components/Sidebar";
import Login from "./Login";

import { Transactions, GeneralInformation } from "./Transactions";
import {
  MasterData,
  Districts,
  Taluks,
  Villages,
  StructureElements,
  StructureType,
  UOM,
  DSRDetails,
  Depriciation,
} from "./MasterData";

import {
  Settings,
  Register,
  AllUsers,
  UserRoles,
  SendSMS,
  SendEmail,
  UploadFile,
  Config,
  ResetPassword,
} from "./Settings";
import { Utilities, TextEntry, GenerateDrawing } from "./Utilities";
import SystemManager from "./SystemManager";
import SignOut from "./SignOut";


const Webpages = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
		  <Route path='/login' exact component={Login}/>
        <Route path="/transactions" exact component={Transactions} />
        <Route
          path="/transactions/general-information"
          exact
          component={GeneralInformation}
        />
        <Route path="/masterdata" exact component={MasterData} />
        <Route path="/masterdata/districts" exact component={Districts} />
        <Route path="/masterdata/taluks" exact component={Taluks} />
        <Route path="/masterdata/villages" exact component={Villages} />
        <Route
          path="/masterdata/structureelements"
          exact
          component={StructureElements}
        />
        <Route
          path="/masterdata/strucutretype"
          exact
          component={StructureType}
        />
        <Route path="/masterdata/uom" exact component={UOM} />
        <Route path="/masterdata/dsrdetails" exact component={DSRDetails} />
        <Route path="/masterdata/depriciation" exact component={Depriciation} />
        <Route path="/utilities" exact component={Utilities} />
        <Route path="/utilities/textentry" exact component={TextEntry} />
        <Route
          path="/utilities/generatedrawing"
          exact
          component={GenerateDrawing}
        />
        <Route path="/settings" exact component={Settings} />
        <Route path="/settings/register" exact component={Register} />
        <Route path="/settings/allusers" exact component={AllUsers} />
        <Route path="/settings/userroles" exact component={UserRoles} />
        <Route path="/settings/sendsms" exact component={SendSMS} />
        <Route path="/settings/sendemail" exact component={SendEmail} />
        <Route path="/settings/uploadfile" exact component={UploadFile} />
        <Route path="/settings/config" exact component={Config} />
        <Route path="/settings/resetpassword" exact component={ResetPassword} />
        <Route path="/systemmanager" exact component={SystemManager} />
        <Route path='/logout' exact component={SignOut}/>
		
      </Switch>
    </Router>
  );
};
export default Webpages;
