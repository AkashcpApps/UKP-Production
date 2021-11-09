import React, { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import * as Constants from '../utils/Constants';
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Refresh';
import Button from '@material-ui/core/Button';
import './DataTable.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const axios = require('axios');

const src = Constants.url+'UKP/rest/endpoints/GetStrElement';

function findAndReplace(object,keyvalue, name) {
    object.map(function (a) {
        if (a.PlanRequired == keyvalue) {
            a.PlanRequired = name
        }
    })
}


const columns = [
    {
        field: 'Code',
        headerName: 'Code',
        headerClassName: 'column-header',
        width: 120,
        editable: true,
    },
    {
        field: 'Name',
        headerName: 'Name',
        headerClassName: 'column-header',
        width: 160,
        editable: true,
    }, {
        field: 'Description',
        headerName: 'Description',
        headerClassName: 'column-header',
        width: 160,
        editable: true,
    },
    {
        field: 'LabelPrefix',
        headerName: 'Label Prefix',
        headerClassName: 'column-header',
        width: 180,
        editable: true,
    }, {
        field: 'UomCode',
        headerName: 'UOMCode',
        headerClassName: 'column-header',
        width: 180,
        editable: true,
    },
    {
        field: 'PlanRequired',
        headerName: 'Plan Required',
        headerClassName: 'column-header',
        width: 180,
        editable: true,
    }, {
        field: 'AreaFormula',
        headerName: 'Area Formula',
        headerClassName: 'column-header',
        width: 180,
        editable: true,
    },
    {
        field: 'VolumeFormula',
        headerName: 'Volume Formula',
        headerClassName: 'column-header',
        width: 150,
        editable: true,
    },
];

const rows = [];

export default function DataTable() {
    const [pageSize, setPageSize] = React.useState(10);
    const [rows, setRows] = React.useState([]);

    const RefreshPage=()=>{
        toast.info("Resfresh");
        axios.get(Constants.url+'UKP/rest/endpoints/GetStrElement')
        .then(function (response) {
           // setRows(response.data)
           setRows([]);

           let value=response.data.mStrElementList;
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

    }

    
    useEffect(() => {
         axios.get(Constants.url+'UKP/rest/endpoints/GetStrElement')
             .then(function (response) {
                // setRows(response.data)

                let value=response.data.mStrElementList;
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
                rowsPerPageOptions={[10, 20, 50, 100]}
                pagination
                disableSelectionOnClick
            />
        </div>
        <ToastContainer/>
        </>
    );
}

