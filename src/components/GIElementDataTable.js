import React, {useEffect} from 'react';
import {DataGrid} from '@material-ui/data-grid';
import './DataTable.css';
import * as Constants from '../utils/Constants';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Refresh';
const axios = require('axios');
const src = Constants.url + 'UKP/rest/endpoints/GetFieldMeasuremntByGenInfoID';


const columns = [
    {
        field: 'SerialNo',
        headerName: 'Sl No',
        headerClassName: 'column-header',
        width: 120,
        editable: true
    },
    {
        field: 'DsrOrder',
        headerName: 'DsrOrder',
        headerClassName: 'column-header',
        width: 120,
        editable: true
    },
    {
        field: 'ItemDescription',
        headerName: 'Description',
        headerClassName: 'column-header',
        width: 160,
        editable: true
    },
    {
        field: 'MainLabel',
        headerName: 'Main Label',
        headerClassName: 'column-header',
        width: 130,
        editable: true
    }, {
        field: 'SubLabel',
        headerName: 'Sub Label',
        headerClassName: 'column-header',
        width: 130,
        editable: true
    }, {
        field: 'L',
        headerName: 'Length',
        headerClassName: 'column-header',
        width: 130,
        editable: true
    }, {
        field: 'B',
        headerName: 'Breadth',
        headerClassName: 'column-header',
        width: 130,
        editable: true
    }, {
        field: 'H',
        headerName: 'Height',
        headerClassName: 'column-header',
        width: 130,
        editable: true
    }, {
        field: 'Q',
        headerName: 'Quantity',
        headerClassName: 'column-header',
        width: 130,
        editable: true
    }, {
        field: 'VolumeFormula',
        headerName: 'Formula',
        headerClassName: 'column-header',
        width: 130,
        editable: true
    }, {
        field: 'TotalAreaCalculated',
        headerName: 'Total Area',
        headerClassName: 'column-header',
        width: 150,
        editable: true
    }, {
        field: 'TotalVolumeCalculated',
        headerName: 'Total Volume',
        headerClassName: 'column-header',
        width: 150,
        editable: true
    }, {
        field: 'Code',
        headerName: 'Code',
        headerClassName: 'column-header',
        width: 130,
        editable: true
    }, {
        field: 'DSRArea',
        headerName: 'DSR Area',
        headerClassName: 'column-header',
        width: 150,
        editable: true
    }, {
        field: 'DSRVolume',
        headerName: 'DSR Volume',
        headerClassName: 'column-header',
        width: 150,
        editable: true
    },
];

const rows = [];


export default function DataTable(props) { // alert(props.ref);
    const [pageSize, setPageSize] = React.useState(10);
    const [rows, setRows] = React.useState([]);

    let gridInfoID = localStorage.getItem('generalInfoID');
    // alert('gridInfoID------->'+gridInfoID);

    React.useEffect(() => { // alert("Function called");
        axios.get(src, {
            params: {
                'GenInfoID': gridInfoID
            }
        }).then(function (response) {
            setRows(response.data.mFieldMeasurementList);
        }).catch(function (error) {
            if (error.response) {
                alert(error.response.data);
                alert(error.response.status);
                alert(error.response.headers);
            } else if (error.request) {
                alert("Error Request: " + error.request);
                alert('Error: ' + error.message);
            } else {
                alert('Error: ' + error.message);
            }
        });

    });

    // React.useEffect(() => { // alert("Function called");
    //     axios.get(src, {
    //         params: {
    //             'GenInfoID': gridInfoID
    //         }
    //     }).then(function (response) {
    //         setRows(response.data.mFieldMeasurementList);
    //     }).catch(function (error) {
    //         if (error.response) {
    //             alert(error.response.data);
    //             alert(error.response.status);
    //             alert(error.response.headers);
    //         } else if (error.request) {
    //             alert("Error Request: " + error.request);
    //             alert('Error: ' + error.message);
    //         } else {
    //             alert('Error: ' + error.message);
    //         }
    //     });

    // }, [])


    return (
        <div style={
            {
                height: 460,
                width: '100%'
            }
        }>

{/* <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                style={{
                    float: 'right',
                    marginRight:6
                    
                }}
                >
                Refresh
            </Button> */}
            <br/>
            <DataGrid getRowId={
                    (r) => r.ID
                }
                rows={rows}
                rowHeight={25}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={
                    (newPageSize) => setPageSize(newPageSize)
                }
                rowsPerPageOptions={
                    [10, 20, 30, 50]
                }
                pagination
                disableSelectionOnClick
                components={
                    {}
                }/>
        </div>
    );
}

