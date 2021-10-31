import React from "react";
import ReactToPrint from "react-to-print";
import * as Constants from "../utils/Constants";
import "../App.css";
import '../printComponent/PrintStyle.css'
import * as Constant from '../utils/Constants'
const barNp = ["103/A", "103/B", "103C", "103E"];
const value = "BK/BK_BAD/BK_BAD_1/103/A, 103/B, 103/C, 103/E";

const axios = require("axios");



class PrintableReportGI extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    FmList: [],
    mGenInfoReport: "",
  };

  componentDidMount() {
    axios
      .get(Constants.url + "UKP/rest/endpoints/GetReportWithElements", {
        params: {
          GenInfoID: this.props.generalInfoId,
        },
      })
      .then((res) => {
        this.setState({ FmList: res.data.FmList });
        this.setState({ mGenInfoReport: res.data.mGenInfoReport });
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <div style={{ margin: "16px" }}>
        <div align="center">
          <p>
            UPPER KRISHNA PROJECT
            <br />
            RESETTLEMENT AND REHABILITATION
            <br />
            GENERAL ABSTRACT OF STRUCTURE VALUATION
          </p>
          <p align="center">
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </p>
        </div>
        <div>
          {/* {barNp.map((value, index) => {
            value += ",";
            console.log(value);
          })} */}
          <p>
            Reference (VPC/UKP Number):{" "}
            <strong>{this.state.mGenInfoReport.Reference}</strong> Structure
            Code: <strong>{this.state.mGenInfoReport.StructureTypeCode}</strong>
            <br />
            <p>
              District:<strong> {this.state.mGenInfoReport.DistName}</strong>{" "}
              Taluk: <strong> {this.state.mGenInfoReport.TalukName}</strong>{" "}
              Village: <strong>{this.state.mGenInfoReport.VillageName}</strong>{" "}
              Date of 11(1) Notification:{" "}
              <strong>{this.state.mGenInfoReport.DateOfNotification}</strong>
            </p>
          </p>
        </div>

        <table>
          <thead>
            <th align="center">Name of Owner or Anubhavadhar</th>
            <th align="center">VPC/UKP No</th>
            <th align="center">BuildUp Area in Sqm</th>
            <th align="center">OpenArea in Sqm</th>
            <th align="center">Total Area In Sqm</th>
            <th align="center">Estimated Amount In Rs</th>
            <th align="center">Age of Structure In Years</th>
            <th align="center">Depreciation % age and amount</th>
            <th align="center">Net Amount Payable In Rs.</th>
          </thead>
          <tbody id="myTable">
            <tr>
              <td>{this.state.mGenInfoReport.OwnerName}</td>
              <td>{this.state.mGenInfoReport.Reference}</td>
              <td>{this.state.mGenInfoReport.TotalBuiltUpArea}</td>
              <td>{this.state.mGenInfoReport.OpenArea}</td>
              <td>{this.state.mGenInfoReport.TotalArea}</td>
              <td>{this.state.mGenInfoReport.TotalBuiltUpArea}</td>
              <td>{this.state.mGenInfoReport.AgeOfStructure}</td>
              <td>{this.state.mGenInfoReport.Depreciation}</td>
              <td>{this.state.mGenInfoReport.TotalAmount}</td>
            </tr>
          </tbody>
        </table>
        <p align="left">
          Struture Type:{" "}
          <strong>{this.state.mGenInfoReport.StrutureTypeName}</strong>
        </p>
        <p>Remarks:</p>

        <p align="center">
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </p>
        <ol>
          <li>
            Certified that the valuation is based in the measurements taken &
            plans and estimates prepared in the office of the Asst. Executive
            Engineer Rehabilitation Sub Division No:
          </li>
          <li>
            Certified that the necessary depreciation charge has been deducted
          </li>
          <li>
            Certified that the rates adopted for Valuation of the structure are
            as per Sanctioned Schedule of Rates of Belgaum P.W.D circle and
            approved Data Rates by S.E.,U.K.P – R&R Prevailing on the Date of
            11(1) Notification of L.A. Act i.e. date of 11(1) Notification
          </li>

          <li>
            Certified that the Strata met with has been classified after actual
            verification at site
          </li>
          <li>
            Certified that the cost of Total site area has not been considered
            in the valuation (need confirmation) by SLAO separately
          </li>
        </ol>

        <p>Measurement Taken and Estimate Prepared By tes asdasd</p>
      </div>
    );
  }
}

export default PrintableReportGI;
