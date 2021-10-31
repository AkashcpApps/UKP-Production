import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './AddDialog.css';
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Constants from '../utils/Constants';

const axios = require("axios");

const str=Constants.url+'UKP/rest/endpoints/InsertTextEntry'
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AddNewTextEntryDialog() {
    const [open, setOpen] = React.useState(false);
    const [districts, setDistricts] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setDistricts(event.target.value);
    };

    const handleSave = () => {

        let ID = document.getElementById("ID").value;
        let GeneralInfoID = document.getElementById("GeneralInfoID").value;
        let SerialNo = document.getElementById("SerialNo").value;
        let AreaName = document.getElementById("AreaName").value;
        let Horizontal = document.getElementById("Horizontal").value;
        let Vertical = document.getElementById("Vertical").value;
        if (
            SerialNo != null &&
            SerialNo != undefined &&
            SerialNo != "" && 

            AreaName != null &&
            AreaName != undefined &&
            AreaName != "" && 

            Horizontal != null &&
            Horizontal != undefined &&
            Horizontal != "" && 

            Vertical != null &&
            Vertical != undefined &&
            Vertical != "" 
        ) {
            
          setOpen(false);
    
          const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
            "Access-Control-Allow-Headers":
              "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
          };
    
          let axiosConfig = {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers":
                "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
            },
          };

          axios
            .post(
                str,
              {
                "ID": ID,
                "GeneralInfoID": GeneralInfoID,
                "SerialNo": SerialNo,
                "AreaName":AreaName,
                "Horizontal": Horizontal,
                "Vertical": Vertical
            },
              axiosConfig
            )
            .then((res) => {
              if (res.data.status == true && res.data.statusCode == 200) {
                 toast.success("Successfully inserted");
              }
              else{
                  toast.error("Failed to insert");
              }
              console.log(res.data);
            })
            .catch((err) => {
                toast.error("Error "+err);
              console.log("Errorsss" + err);
            });
        }
    
        return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Taluk has been added successfully!
                </Alert>
            </Snackbar>
        );
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                style={{
                    float: 'left',
                    top: '3px'
                }}
                onClick={handleClickOpen}
            >
                New Text Entry
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" className="dialog-title">Create a New Taluk</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the details of a new taluk to be created.
                    </DialogContentText>
                        {/* <InputLabel id="district-select-label">District</InputLabel>
                        <Select
                            labelId="district-select-label"
                            id="districts"
                            value={districts}
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select> */}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="ID"
                        label="ID"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="GeneralInfoID"
                        label="GeneralInfoID"
                        fullWidth
                    />
                     <TextField
                        autoFocus
                        margin="dense"
                        id="SerialNo"
                        label="SerialNo"
                        fullWidth
                    />
                     <TextField
                        autoFocus
                        margin="dense"
                        id="AreaName"
                        label="AreaName"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Horizontal"
                        label="Horizontal"
                        fullWidth
                    />
                     <TextField
                        autoFocus
                        margin="dense"
                        id="Vertical"
                        label="Vertical"
                        fullWidth
                    />
                     
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSave}
                        variant="contained"
                        color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <ToastContainer/>
        </div>
        
    );
}