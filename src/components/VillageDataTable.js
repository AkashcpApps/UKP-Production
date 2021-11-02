import React, { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import * as Constants from '../utils/Constants';
import AddIcon from '@material-ui/icons/Refresh';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import './DataTable.css';

const axios = require('axios');
//const src = 'http://' + Constants.hostname + '/UKP/rest/endpoints/GetVillageByTaluk?TID=FCB14B93-4F7C-431B-8475-8F6827AB6DCA';
//const src=?';
const columns = [
    {
        field: 'Code',
        headerName: 'Code',
        headerClassName: 'column-header',
        width: 130,
        editable: true,
    },
    {
        field: 'Name',
        headerName: 'Name',
        headerClassName: 'column-header',
        width: 250,
        editable: true,
    },{
        field: 'TalukCode',
        headerName: 'Taluk Code',
        headerClassName: 'column-header',
        width: 150,
        editable: true,
    },
    {
        field: 'TalukCode',
        headerName: 'Taluk Name',
        headerClassName: 'column-header',
        width: 250,
        editable: true,
    }, {
        field: 'DistrictCode',
        headerName: 'District Code',
        headerClassName: 'column-header',
        width: 160,
        editable: true,
    },
    {
        field: 'DistrictName',
        headerName: 'District Name',
        headerClassName: 'column-header',
        width: 250,
        editable: true,
    },
];


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
         axios.get(Constants.url+'UKP/rest/endpoints/GetVillageByTaluk',{
             params:{
                "TID":"FCB14B93-4F7C-431B-8475-8F6827AB6DCA"
             }
         })
             .then(function (response) {
                // setRows(response.data)
                setRows(response.data.mVillageList);
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
                    // alert('Error: ' + error.message);
                 }
             });
     }, []);

     const RefreshPage=()=>{
         toast.info("Resfresh")
        axios.get(Constants.url+'UKP/rest/endpoints/GetVillageByTaluk',{
            params:{
               "TID":"FCB14B93-4F7C-431B-8475-8F6827AB6DCA"
            }
        })
            .then(function (response) {
               // setRows(response.data)
               setRows(response.data.mVillageList);
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
                   // alert('Error: ' + error.message);
                }
            });

     }


     const reFresh=()=>{
       
             axios.get(Constants.url+'UKP/rest/endpoints/GetVillageByTaluk',{
                 params:{
                    "TID":"FCB14B93-4F7C-431B-8475-8F6827AB6DCA"
                 }
             })
                 .then(function (response) {
                    // setRows(response.data)
                    setRows(response.data.mVillageList);
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
                        // alert('Error: ' + error.message);
                     }
                 });
       
    

     };


    return (
        <>
          <div>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                style={{
                    float: 'right',
                    marginRight:6
                    
                }}
                onClick={RefreshPage}>
                Refresh
            </Button>

            </div>
            <br/>
            <br/>
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
        <ToastContainer/>
        </>
    );
}