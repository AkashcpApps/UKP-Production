import React from 'react';
import ReactToPrint from 'react-to-print';
import Button from 'react-bootstrap/Button';
import FloorPlan from '../components/GenerateFloorPlan';

import  DetailedReportGeneralInfo  from './PrintableReportGI';
import  '../webpages/Login.css';

class PrintFloorPlan extends React.PureComponent {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => {
             return  <Button style={{margin:50}} variant="primary" className='topright' imageUrl="https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png">
                 Print</Button>;
            }}
            content={() => this.componentRef}
          />
          <FloorPlan ref={el => (this.componentRef = el)} generalInfoID={this.props.generalInfoID} ownerName={this.props.ownerName} structureCode={this.props.structureCode}  />
        </div>
      );
    }
  }

 export default PrintFloorPlan;