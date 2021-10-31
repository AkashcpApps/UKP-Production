import React from 'react';
import ReactToPrint from 'react-to-print';
import  DetailedReportGeneralInfo  from './PrintableReportGI';
import Button from 'react-bootstrap/Button';
import  '../webpages/Login.css';

class ReportGeneralInfo extends React.PureComponent {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => {
             return  <Button style={{margin:50}} variant="primary" className='topright' imageUrl="https://demos.telerik.com/kendo-ui/content/shared/icons/sports/snowboarding.png">Print</Button>;
            }}
            content={() => this.componentRef}
          />
          <DetailedReportGeneralInfo ref={el => (this.componentRef = el)} generalInfoId={this.props.generalInfoId} />
        </div>
      );
    }
  }

 export default ReportGeneralInfo;