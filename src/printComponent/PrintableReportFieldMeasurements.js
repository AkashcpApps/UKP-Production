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
    fullReport:[],
    mGenInfoReport: "",
    finalReportPDF:""
   
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

      axios.get('http://59.97.20.208:8080/UKP/rest/endpoints/GetReportWithElementsDsrDetails',{
        params:{
            "GenInfoID":this.props.generalInfoId
        }
    }).then(res=>{
        if(res.data.status==true && res.data.statusCode==200){

           // let datats=res.data.subDsrDetailsWithFM;

           this.setState({fullReport:res.data.subDsrDetailsWithFM});
           console.log("SIZE "+this.state.fullReport.length);
        }

    }).catch(err=>{
        alert("Err "+err)

    })


  }
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
          ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
          <th align="center"><center>Name of Owner or Anubhavadhar</center></th>
            <th align="center"><center>VPC/UKP No</center></th>
            <th align="center"><center>BuildUp Area in Sqm</center></th>
            <th align="center"><center>OpenArea in Sqm</center></th>
            <th align="center"><center>Total Area In Sqm</center></th>
            <th align="center"><center>Estimated Amount In Rs</center></th>
            <th align="center"><center>Age of Structure In Years</center></th>
            <th align="center"><center>Depreciation % age and amount</center></th>
            <th align="center"><center>Net Amount Payable In Rs.</center></th>
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
        <br/>
        <p align="left">
          Struture Type:{" "}
          <strong>{this.state.mGenInfoReport.StrutureTypeName}</strong>
        </p>
        <p>Remarks:</p>
        <p align="center">
          ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </p>
          <p align="center">
          ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </p>
          <p id="fullReportdetails"></p>
         
         
          {
            
            this.state.fullReport.map((value, key) => {
            // let finalReportPDF="";
              let table = "";
              let codeDescription = "";
              let endResult = "";
              let header = "";
              header += "<table border='1' width='100%' style='border-color:black;border-collapse:collapse; margin: auto'>";
              header+="<tr>";
              header += "<th style='width:7.5%'>";
              header += "<center>Main Label </center>";
              header += "</th>";
              header += "<th style='width:7.5%'>";
              header += "<center>Sublabel</center>";
              header += "</th>";
              header += "<th style='width:7.5%'>";
              header += "<center>Description</center>";
              header += "</th>";
              header += "<th style='width:7.5%'>";
              header += "<center>X</center>";
              header += "</th>";
              header += "<th style='width:7.5%'>";
              header += "<center>Y</center>";
              header += "</th>";
              header += "<th style='width:7.5%'>";
              header += "<center>Length</center>";
              header += "</th>";
              header += "<th style='width:7.5%'>";
              header += "<center>Bredth/Width</center>";
              header += "</th>";
              header += "<th style='width:7.5%'>";
              header += "<center>Height/Depth</center>";
              header += "</th>";
              header += "<th style='width:7.5%'>";
              header += "<center>Circu Diagram</center>";
              header += "</th>";
              header += "<th style='width:7.5%'>";
              header += "<center>Number of Item</center>";
              header += "</th>";
              header += "<th style='width:7.5%'>";
              header += "<center>UMO</center>";
              header += "</th>";
              header += "<th style='width:7.5%'>";
              header += "<center>Volume</center>";
              header += "</th>";
              header += "<th style='width:7.5%'>";
              header += "<center>Area</center>";
              header += "</th>";
              header += "</tr></table>";
             // document.write(header);
             this.state.finalReportPDF+=header;
            

      
      
              // codeDescription += "<table border='1' width=100%  style='text-align: center; padding: 10px;'>";
              // codeDescription += "<tr>";
              // codeDescription += "<td width=10%>";
              // codeDescription += value.SubDSrCode;
              // codeDescription += "</td>";
              // codeDescription += " <td width=90%>";
              // codeDescription += value.SubDsrDescription;
              // codeDescription += "</td></tr></table>";
             // document.write(codeDescription);
             
             codeDescription+="<table border=1 width='100%' style=' padding: 10px ;border-collapse:collapse; margin: auto'>";
             codeDescription+="<tr>";
             codeDescription+="<td style='width:10% ;align:left'>";
             codeDescription+=value.SubDSrCode;
             codeDescription+=" </td>";
             codeDescription+="<td style='width:90%;align:left'>";
             codeDescription+= value.SubDsrDescription;
             codeDescription+=" </td>";
             codeDescription+="</tr>";
             codeDescription+="</table>";
             this.state.finalReportPDF+=codeDescription;

            
      
              value.mFmList.map((v, key) => {
                  table += "<tr>";
                  table += "<td style='width:7.5%'>" + v.MainLabel + "</td>";
                  table += "<td style='width:7.5%'>" + v.SubLabel + "</td>";
                  table += "<td style='width:7.5%'>" + v.ItemDescription + "</td>";
                  table += "<td style='width:7.5%'>" + ((v.X)=="9999.00"?"-":v.X)+ "</td>";
                  table += "<td style='width:7.5%'>" + ((v.Y)=="9999.00"?"-":v.Y)+ "</td>";
                  table += "<td style='width:7.5%'>" +  ((v.L)=="9999.00"?"-":v.L) + "</td>";
                  table += "<td style='width:7.5%'>" + ((v.B)=="9999.00"?"-":v.B) + "</td>";
                  table += "<td style='width:7.5%'>" + ((v.H)=="9999.00"?"-":v.H)+ "</td>";
                  table += "<td style='width:7.5%'>" + "  " + "</td>";
                  table += "<td style='width:7.5%'>" + ((v.Q)=="9999.00"?"-":v.Q) + "</td>";
                  table += "<td style='width:7.5%'>" + v.UomCode + "</td>";
                  table += "<td style='width:7.5%'>" + v.TotalVolume + "</td>";
                  table += "<td style='width:7.5%'>" + v.TotalArea + "</td>";
                  table += "<tr/>";
              });
              this.state.finalReportPDF+="<table width='100%' border='1' style='border-color:black;border-collapse:collapse; margin:auto;text-align: center'>"+ table + "</table>";
              
            // document.write();
      
            
              endResult += "<table width='100%' border='1' style='border-color:black;border-collapse:collapse; margin:auto;text-align: center'>";
              endResult += "<tr>";
              endResult += "<td>";
              endResult += "<b>Main Work:</b>" + " "+value.DsrMainDescription;
              endResult += "</td>";
              endResult += "<td>";
              endResult += "<b>Sub Workd:</b> " +" " +value.SubDSrCode;
              endResult += "</td>";
              endResult += "<td>";
              endResult += "<b>Total Quantity: </b>" + " "+value.mTotalQuantity;
              endResult += "</td>";
              endResult += "<td>";
              endResult += "<b>Rate</b> : " +" "+value.SubDsrRate;
              endResult += "</td>";
              endResult += "<td>";
              endResult += "<b>Amount:</b> " +" "+ value.mAmount;
              endResult += "</td>";
              endResult += "</tr>";
              endResult += '<table/>';
              this.state.finalReportPDF+=endResult;
              this.state.finalReportPDF+="<br/>";
              this.state.finalReportPDF+="<p align='center'>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>";
              this.state.finalReportPDF+="<br/>";
              document.getElementById("fullReportdetails").innerHTML = this.state.finalReportPDF; 
              //document.write(endResult);
             // document.write("<br/>");
              //document.write("------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------")
              //document.write("<br/>");
          })
          }



          
        {/* <table>
          <thead>
            <th align="center"><center>Main Label</center></th>
            <th align="center"><center>Sub Label</center></th>
            <th align="center"><center>Description</center></th>
            <th align="center"><center>X</center></th>
            <th align="center"><center>Y</center></th>
            <th align="center"><center>Length</center></th>
            <th align="center"><center>Breadth / Width</center></th>
            <th align="center"><center>Height / Depth</center></th>
            <th align="center"><center>Circu Diameter</center></th>
            <th align="center"><center>Number of Item</center></th>
            <th align="center"><center>UOM</center></th>
            <th align="center"><center>Volume</center></th>
            <th align="center"><center>Area</center></th>
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
        </table> */}
        <p align="center">
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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
