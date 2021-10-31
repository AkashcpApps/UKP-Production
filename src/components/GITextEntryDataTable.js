import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import * as Constants from '../utils/Constants';
import axios from 'axios';
import './DataTable.css';
//const src = 'http://' + Constants.hostname + 'UKP/rest/endpoints/GetTextEntry';
const src=Constants.url+'UKP/rest/endpoints/GetTextEntry';
const columns = [
    {
        field: 'SerialNo',
        headerName: 'Sl No',
        headerClassName: 'column-header',
        width: 120,
        editable: true,
    },
    {
        field: 'AreaName',
        headerName: 'Area Name',
        headerClassName: 'column-header',
        width: 160,
        editable: true,
    }, {
        field: 'Horizontal',
        headerName: 'Horizontal',
        headerClassName: 'column-header',
        width: 150,
        editable: true,
    }, {
        field: 'Vertical',
        headerName: 'Vertical',
        headerClassName: 'column-header',
        width: 150,
        editable: true,
    }, {
        field: 'HorizontalWall1',
        headerName: 'Horizontal Wall1',
        headerClassName: 'column-header',
        width: 180,
        editable: true,
    }, {
        field: 'HorizontalWall2',
        headerName: 'Horizontal Wall2',
        headerClassName: 'column-header',
        width: 180,
        editable: true,
    }, {
        field: 'VerticalWall1',
        headerName: 'Vertical Wall1',
        headerClassName: 'column-header',
        width: 180,
        editable: true,
    }, {
        field: 'VerticalWall2',
        headerName: 'Vertical Wall2',
        headerClassName: 'column-header',
        width: 180,
        editable: true,
    },
];

const rows = [];

export default function DataTable(props) {
    const [pageSize, setPageSize] = React.useState(10);
    const [rows, setRows] = React.useState([]);
    
    React.useEffect(() => {
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
                setRows(response.data.mTextEntryList);
                // alert( "Success: " + response.data);
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

     React.useEffect(() => {
        axios.get(src)
             .then(function (response) {
                // setRows(response.data)
                setRows(response.data.mTextEntryList);
                // alert( "Success: " + response.data);
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
      }, [props.refresh]);

    return (
        <div style={{ height: 580, width: '100%' }}>
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