import React, { useState } from "react";
import ReactToPrint from "react-to-print";
import * as Constant from '../utils/Constants'

const barNp = ["103/A", "103/B", "103C", "103E"];
const axios = require("axios");

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
          "GenInfoID": this.props.generalInfoId,
        },
      })
      .then((res) => {
       
        this.setState({ FmList: res.data.FmList });
        this.setState({ mGenInfoReport: res.data.mGenInfoReport });
      })
      .catch((err) => {
        alert(err);
      });

      axios.get(Constant.url+'UKP/rest/endpoints/GetReportWithElementsDsrDetails',{
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
  dateTime(){
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
   // var time = today.getHours() + ":" + today.getMinutes();
   // var datetime = date+' '+time;
   // console.log("DATE--->"+datetime);
    return date;
  }

  render() {
    return (

      
      <div style={{margin:'16px'}}>
       {
      
         document.title=this.state.mGenInfoReport.OwnerName+this.dateTime()
       }
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
              <td>{ new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'INR' }).format(parseFloat(this.state.mGenInfoReport.TotalAmount))}</td>
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
             codeDescription+="<td style='width:10% ;align:left;'>";
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
                  table += "<td style='padding-right: 10px;'>" + v.MainLabel + "</td>";
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
              endResult += "<td style='align:'right''>";
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
              endResult += "<b>Amount:</b> " +" "+(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'INR' }).format(parseFloat(value.mAmount)))
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



       
        <p align="center">
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </p>
       

        <p>
          DETAIL VALUATION OF SUBMERGING STRUCTURES COMING UNDER
          ALAMATTI/NARAYANPUR RESERVIOR
        </p>
      </div>
    );
  }
}

//export default ComponentToPrint123;
