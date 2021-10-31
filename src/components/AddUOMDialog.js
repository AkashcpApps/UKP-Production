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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Constants from '../utils/Constants';
import './AddDialog.css';

const str=Constants.url+'UKP/rest/endpoints/InsertUOM';
const axios = require("axios");

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AddNewDistrictDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSave = () => {

        let uomCode=document.getElementById('uomCode').value;
        let uomName=document.getElementById('uomName').value;

        setOpen(false);
        if (
            uomCode != null &&
            uomCode != undefined &&
            uomCode != "" &&
            uomName != null &&
            uomName != undefined &&
            uomName != ""
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
                  Code: uomCode,
                  Name: uomName,
                  creadted_by: "62173014-ec01-4e51-88d7-e6e2a6cb4dd0",
                },
                axiosConfig
              )
              .then((res) => {
                if (res.data.status == true && res.data.statusCode == 200) {
                   toast.success("Successfully inserted");
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
                    Unit of Measurement has been added successfully!
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
                New Unit of Measurement
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" className="dialog-title">Create a New Unit of Measurement</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the details of a new Unit of Measurement to be created.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="uomCode"
                        label="Code"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="uomName"
                        label="Name"
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