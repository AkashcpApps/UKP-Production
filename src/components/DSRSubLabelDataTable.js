import React, {useEffect} from 'react';
import { DataGrid } from '@material-ui/data-grid';
//import DSRSubLabelDataTable from './Dsrsubla'
import DSRSubLabelDataTable from './DSRSubLabelDataTable'
import './DataTable.css';
import * as Constants from '../utils/Constants'
const axios =require('axios');
const columns = [
    {
        field: 'Code',
        headerName: 'code',
        headerClassName: 'column-header',
        width: 120,
        editable: false,
    },
    {
        field: 'Description',
        headerName: 'Description',
        headerClassName: 'column-header',
        width: 430,
        editable: false,
    }, {
        field: 'Rate',
        headerName: 'Rate',
        headerClassName: 'column-header',
        width: 150,
        editable: true,
    }, {
        field: 'UomID',
        headerName: 'UOM',
        headerClassName: 'column-header',
        width: 150,
        editable: true,
    }, 
];

//const rows = [{id: '1', code: '2.1', description: 'Description', rate: '1000.45', uom: 'Cum'}];
 

export default function DSRSubLabelDataTabel(props) {
    const [pageSize, setPageSize] = React.useState(10);
    const [rows, setRows] = React.useState([]);
    const mainlabelID=props.data;
    //alert("MainLabel "+mainlabelID);
    if(mainlabelID==null || mainlabelID==''){
        console.log(" Empty "+mainlabelID);
    }else{
        console.log("Not Empty "+mainlabelID);
    }
    
    //alert('DSRSubLabelDataTabel '+props.data);
    //console.log('DSRSubLabelDataTabel '+typeof(props.data));

  
// useEffect(()=>{
//     axios.get(Constants.url+'UKP/rest/endpoints/GetSubDsrByDSRMainID',{
//    params:{
//     DSRMain_ID:props.data
//    } 
// })
// .then(res=>{
//     setRows(res.data.mDSRSubList)
    
// }).catch(err=>{
//     alert("Error "+err);

// })
  
// },[props.data])


// useEffect(()=>{
//    let num=1;
//     abc(num);

// },[props.ref]);




// function abc(num) {
//     alert("Function Call "+num);
// }


    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
             getRowId={(r) => r.ID}
                rows={rows}
                rowHeight={80}
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