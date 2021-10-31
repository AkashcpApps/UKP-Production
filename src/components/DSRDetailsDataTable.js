import React, { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles'
import * as Constants from '../utils/Constants';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import DSREditFormContainer from './DSREditFormContainer';
import './DataTable.css';

const axios = require('axios');
const src=Constants.url+'UKP/rest/endpoints/GetDsr';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const columns = [
    // {
    //     field: 'ID',
    //     headerName: 'ID',
    //     headerClassName: 'column-header',
    //     width: 300,
    //     editable: true,
    // },
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
        width: 800,
        editable: true,
    }
];

const rows = [];

export default function DataTable() {
    const [pageSize, setPageSize] = React.useState(30);
    const [rows, setRows] = React.useState([]);
     const [open, setOpen] = React.useState(false);
 const classes = useStyles();
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
                     // Something happened in setting up the request that triggered an Error
                     alert('Error: ' + error.message);
                 }
             });
     }, []);

     //let passdata;

     const[passdata,setpassdata]=React.useState('');

const handleCellDoubleClick = (params, event) => {
       // alert(event + " $$$ " + params.row.ID);
      //params.row.code
      localStorage.removeItem('dsrID');
      setpassdata(params.row.ID);
      //alert("TEST DATA -->"+passdata);
    //  passdata=params.row.code;
        setOpen(true);
    };
 const handleClose = () => {
        setOpen(false);
    };
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
                onCellDoubleClick={handleCellDoubleClick}
            />
            <div>
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Edit District Schedule Rate
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <div>
                       
                        <DSREditFormContainer data={passdata}/>
                    </div>
                </Dialog>
            </div>
        </div>
      
    );
}