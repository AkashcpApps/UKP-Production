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

const str=Constants.url+'UKP/rest/endpoints/InsertStrTypeMst';



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

        let structureTypeCode = document.getElementById("structureTypeCode").value;
        let structureTypeName = document.getElementById("structureTypeName").value;

        if (
            structureTypeCode != null &&
            structureTypeCode != undefined &&
            structureTypeCode != "" &&
            structureTypeName != null &&
            structureTypeName != undefined &&
            structureTypeName != ""
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
            let bodyFormData = new FormData();
            bodyFormData.append("Code", structureTypeCode);
            bodyFormData.append("Name", structureTypeName);
            axios
              .post(
              str,
                {
                  Code: structureTypeCode,
                  Name: structureTypeName,
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
            <Snackbar open={open} autoHideDuration={6000} onClose={handleSave}>
                <Alert onClose={handleSave} severity="success">
                    Structure Type has been added successfully!
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
                New Structure Type
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" className="dialog-title">Create a New Structure Type</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the details of a new Structure Type to be created.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="structureTypeCode"
                        label="Code"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="structureTypeName"
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