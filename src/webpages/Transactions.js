import React from "react";
import DataTable from "../components/DataTable";
import "bootstrap/dist/css/bootstrap.min.css";
import GeneralInputForm from "../components/GeneralInputForm";

import "./Transactions.css";

export const Transactions = () => {
  return (
    <div>
      <div style={{ marginLeft: "260px" }}>
        <h3>General Information</h3>
      </div>
      <div className="generalInformationInputForm">
        <GeneralInputForm />
      </div>
      <div className="InformationDataGrid">
        <DataTable />
      </div>
    </div>
  );
};

export const GeneralInformation = () => {
  return (
    <div>
      <div style={{ marginLeft: "260px" }}>
        <h3>General Information</h3>
      </div>
      <div className="generalInformationInputForm">
        <GeneralInputForm />
      </div>
      <div className="InformationDataGrid">
        <DataTable />
      </div>
    </div>
  );
};
