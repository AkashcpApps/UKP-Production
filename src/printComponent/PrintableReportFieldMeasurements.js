import React, { useState } from "react";
import ReactToPrint from "react-to-print";
//import "../App.css";
//import '../printComponent/PrintStyle.css'
import * as Constant from '../utils/Constants'

const barNp = ["103/A", "103/B", "103C", "103E"];
const value = "BK/BK_BAD/BK_BAD_1/103/A, 103/B, 103/C, 103/E";
const axios = require("axios");
//var FMLIST = [];
export default class ComponentToPrintFieldMeasureMents extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  state = {
    FmList: [],
    mGenInfoReport: "",
  };
  componentDidMount() {
    axios
      .get(Constant.url+"UKP/rest/endpoints/GetReportWithElements", {
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
  //  const[FmList,setFmList]=React.useState([]);
  //  const[mGenInfoReport,setmGenInfoReport]=React.useState('');

  //  })
  //  React.useEffect(()=>{
  //   axios.get('http://localhost:8080/UKP/rest/endpoints/GetReportWithElements',{
  //   params:{
  //    GenInfoID:'6CC5E9F0-DC89-4B53-B4D5-DA49D167617A'
  //   }
  // }).then(res=>{
  //  setFmList(res.data.FmList);
  //  FmList.map((value,key)=>{
  //    console.log(value.GeneralInfoID);
  //  })
  // }).catch(err=>{
  //   //alert(err);
  // })

  //  })
  render() {
    return (
      <div style={{margin:'16px'}}>
        <div align="center">
          <p>
            <strong>
              DETAIL VALUATION OF SUBMERGING STRUCTURES COMING UNDER
              ALAMATTI/NARAYANPUR RESERVIOR
            </strong>
          </p>
          <p align="center">
          -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </p>
        </div>

        <div>
          {barNp.map((value, index) => {
            value += ",";
            console.log(value);
          })}
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
          -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </p>
          <p align="center">
          -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </p>
        <table>
          <thead>
            <th align="center">Main Label</th>
            <th align="center">Sub Label</th>
            <th align="center">Description</th>
            <th align="center">X</th>
            <th align="center">Y</th>
            <th align="center">Length</th>
            <th align="center">Breadth / Width</th>
            <th align="center">Height / Depth</th>
            <th align="center">Circu Diameter</th>
            <th align="center">Number of Item</th>
            <th align="center">UOM</th>
            <th align="center">Volume</th>
            <th align="center">Area</th>
          </thead>
          <tbody id="myTable">
            {this.state.FmList.map((item, index) => (
              <tr key={index}>
                <td align="left">{item.MainLabel}</td>
                <td>{item.SubLabel}</td>
                <td>{item.ItemDescription}</td>
                <td>{}</td>
                <td>{}</td>
                <td>{item.L}</td>
                <td>{item.B}</td>
                <td>{item.H}</td>
                <td>{}</td>
                <td>{item.DsrOrder}</td>
                <td>{item.UomCode}</td>
                <td>{item.TotalVolume}</td>
                <td>{item.TotalAreaCalculated}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table width="100%">
          <tr>
            <td width="70%">
              Main Work: 2.EARTH WORK FOR BUILDINGS Sub Work: 2.
            </td>
            <td width="30%">Total Quantity: 10.8</td>
            <td width="5%">Rate (Rs): ₹ 163</td>
            <td width="5%">Amount (Rs): ₹ 1765.53</td>
          </tr>
        </table>
        <p align="center">
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </p>
        {/* <ol>
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
        </ol> */}

        <p>
          DETAIL VALUATION OF SUBMERGING STRUCTURES COMING UNDER
          ALAMATTI/NARAYANPUR RESERVIOR
        </p>
      </div>
    );
  }
}

//export default ComponentToPrint123;
