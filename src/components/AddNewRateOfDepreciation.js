import React, { useEffect } from 'react';
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Constants from '../utils/Constants';

import './AddDialog.css';
const axios = require('axios');
const str=Constants.url+'UKP/rest/endpoints/InsertStandRateDepreciation';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AddNewDistrictDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSave = () => {
        let number_of_years=document.getElementById('noOfYears').value;
        let atPercent1=document.getElementById('atPercent1').value;
        let atPercent1_5=document.getElementById('atPercent1_5').value;
        let atPercent2=document.getElementById('atPercent2').value;
        let atPercent4=document.getElementById('atPercent4').value;
        let description=document.getElementById('description').value;

        if (
            number_of_years != null &&
            number_of_years != undefined &&
            number_of_years != "" &&

            atPercent1 != null &&
            atPercent1 != undefined &&
            atPercent1 != "" &&

            atPercent1_5 != null &&
            atPercent1_5 != undefined &&
            atPercent1_5 != "" &&

            atPercent2 != null &&
            atPercent2 != undefined &&
            atPercent2 != "" &&

            atPercent4 != null &&
            atPercent4 != undefined &&
            atPercent4 != "" &&

            description != null &&
            description != undefined &&
            description != "" 
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
                    "NoOfYear": number_of_years,
                    "AtOnePercent": atPercent1,
                    "AtOneAndHalfPercent": atPercent1_5,
                    "AtTwoPercent":atPercent2,
                    "AtFourPercent":atPercent4,
                    "Description":description,
                    "Inactive":"1",
                    "CreatedBy":"158c6170-35c1-4ccb-9082-08e0559ff38d"
                }
                ,
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
            else{
                alert("Enter all fields...!")
            }
        return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleSave} severity="success">
                    Rate of Depreciation has been added successfully!
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
                New Rate of Depreciation
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" className="dialog-title">Create a Rate of Depreciation</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the details of a new Rate of Depreciation to be created.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="noOfYears"
                        label="No. of Years"
                        type="number"
                        fullWidth
                    />
                   
                    <TextField
                        margin="dense"
                        id="atPercent1"
                        label="At 1%"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="atPercent1_5"
                        label="At 1.5%"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="atPercent2"
                        label="At 2%"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="atPercent4"
                        label="At 4%"
                        fullWidth
                    />
                     <TextField
                        margin="dense"
                        id="description"
                        label="Description"
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