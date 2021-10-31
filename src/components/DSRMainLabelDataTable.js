import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import * as Constants from '../utils/Constants'
import './DataTable.css';

const axios =require('axios');

const columns = [
    {
        field: 'Code',
        headerName: 'Code',
        headerClassName: 'column-header',
        width: 180,
        editable: true,
    },
    {
        field: 'Description',
        headerName: 'Description',
        headerClassName: 'column-header',
        width: 490,
        editable: true,
    }, {
        field: 'IsDsr',
        headerName: 'isDsr',
        headerClassName: 'column-header',
        width: 180,
        editable: true,
    }, 
];

//const rows = [];

export default function DSRMainLabelDataTable(props) {
    const [pageSize, setPageSize] = React.useState(10);
    const [rows, setRows] = React.useState([]);
    const[dsr,setdsr]=React.useState([]);
   // alert("POROPS--->"+props.data);
   let dsrID= localStorage.getItem('dsrID');
  //alert("IIIIIIIIIIID"+dsrID);
    React.useEffect(()=>{
        axios.get(Constants.url+'UKP/rest/endpoints/GetMainDsrByDSRID',{
       params:{
        DSR_ID:dsrID
       } 
    })
    .then(res=>{
        setRows(res.data.mDSRMainList)
        
    }).catch(err=>{
        alert("Error "+err);
 
    })}) 

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