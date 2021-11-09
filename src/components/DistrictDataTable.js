import React, { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import * as Constants from '../utils/Constants';
import AddIcon from '@material-ui/icons/Refresh';
import Button from '@material-ui/core/Button';

import './DataTable.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const axios = require('axios');

const columns = [
    {
        field: 'Code',
        headerName: 'Code',
        headerClassName: 'column-header',
        width: 200,
        editable: true,
    },
    {
        field: 'Name',
        headerName: 'Name',
        headerClassName: 'column-header',
        width: 880,
        editable: true,
    },
];

const src = Constants.url+'UKP/rest/endpoints/GetAllDistrict';


export default function DataTable() {
    const [pageSize, setPageSize] = React.useState(30);
    const [rows, setRows] = React.useState([]);

    const RefreshPage=()=>{
        toast.info("Refresh")
        axios.get(src)
        .then(function (response) {
           // setRows(response.data)
           setRows([]);
           setRows(response.data.mDistList);
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
             
                alert('Error: ' + error.message);
            }
        });


    };

    useEffect(() => {
        axios.get(src)
            .then(function (response) {
               // setRows(response.data)
               setRows(response.data.mDistList);
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
                 
                    alert('Error: ' + error.message);
                }
            });
    }, []);

    //alert(rows);

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

