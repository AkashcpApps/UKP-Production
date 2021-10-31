import React, { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
//import { DataGrid } from '@mui/x-data-grid';
import * as Constants from '../utils/Constants';

import './DataTable.css';

const axios = require('axios');
//const src = 'http://' + Constants.hostname + '/UKP/rest/endpoints/GetVillageByTaluk?TID=FCB14B93-4F7C-431B-8475-8F6827AB6DCA';
const src=Constants.url+'UKP/rest/endpoints/GetRateOfDepreciation';

function findAndReplace(object,keyvalue, name) {
    object.map(function (a) {
        if (a.Inactive == keyvalue) {
            a.Inactive = name
        }
    })
}

const columns = [
    {
        field: 'NoOfYear',
        headerName: 'No. of Years',
        headerClassName: 'column-header',
        width: 160,
        editable: true,
    },
    {
        field: 'AtOnePercent',
        headerName: 'At 1%',
        headerClassName: 'column-header',
        width: 130,
        editable: true,
    }, {
        field: 'AtOneAndHalfPercent',
        headerName: 'At 1.5%',
        headerClassName: 'column-header',
        width: 130,
        editable: true,
    },
    {
        field: 'AtTwoPercent',
        headerName: 'At 2%',
        headerClassName: 'column-header',
        width: 130,
        editable: true,
    }, {
        field: 'AtFourPercent',
        headerName: 'At 4%',
        headerClassName: 'column-header',
        width: 130,
        editable: true,
    }, {
        field: 'Inactive',
        headerName: 'Inactive',
        headerClassName: 'column-header',
        width: 250,
        editable: true,
    },
    {
        field: '',
        headerName: '',
        headerClassName: 'column-header',
        width: 160,
        editable: true,
    },
];

const rows = [];

export default function DataTable() {
    const [pageSize, setPageSize] = React.useState(30);
    const [rows, setRows] = React.useState([]);

    useEffect(() => {
        /* fetch(`http://ff46-103-98-78-198.ngrok.io/UKP/rest/endpoints/GetAllDistrict`)
             .then(response => {
                 alert(response.data);
                 setRows(response.data.mDistList);
             })
             .catch(error => alert('Error: ' + error)); */
         // GET request using fetch with error handling
         axios.get(src)
             .then(function (response) {
                // setRows(response.data)
               // setRows();
                // alert( "Success: " + response.data);

                let value=response.data.mRateOfDepr;
                findAndReplace(value,1 ,"Yes");
                findAndReplace(value,0 ,"No");
                setRows(value);
             })
             .catch(function (error) {
                 if (error.response) {
                     alert(error.response.data);
                     alert(error.response.status);
                     alert(error.response.headers);
                 } else if (error.request) {
                     alert("Error Request: " + error.request);
                     alert('Error: ' + error.message);
                 } else {
                     // Something happened in setting up the request that triggered an Error
                     alert('Error: ' + error.message);
                 }
             });
     }, []);


    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
               getRowId={(r) => r.ID}
                rows={rows}
                rowHeight={25}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[10, 20, 30, 50]}
                pagination
                disableSelectionOnClick
            />
        </div>
    );
}