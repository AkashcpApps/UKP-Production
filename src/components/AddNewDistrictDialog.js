import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Constants from '../utils/Constants';



import "./AddDialog.css";
import { Container } from "@material-ui/core";
const axios = require("axios");
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

  const str=Constants.url+'UKP/rest/endpoints/InsertDistrict'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AddNewDistrictDialog() {
  const [open, setOpen] = React.useState(false);
  const [district, setdistrict] = React.useState("");
  //const notify = () => toast("Wow so easy!");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSave = (e) => {
    let districtCode = document.getElementById("districtCode").value;
    let districtName = document.getElementById("districtName").value;
    if (
      district != null &&
      districtCode != undefined &&
      districtCode != "" &&
      districtName != null &&
      districtName != undefined &&
      districtName != ""
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
      bodyFormData.append("Code", districtCode);
      bodyFormData.append("Name", districtName);
      axios.post(Constants.url+'UKP/rest/endpoints/InsertDistrict',
          {
            "Code": districtCode,
            "Name": districtName,
            "creadted_by": "62173014-ec01-4e51-88d7-e6e2a6cb4dd0",
          }
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
                    District has been added successfully!
                </Alert>
            </Snackbar>
       );
  };

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
              float: "left",
              top: "3px",
            }}
            onClick={handleClickOpen}
          >
            New District
          </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className="dialog-title">
          Create a New District
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the details of a new district to be created.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="districtCode"
            label="Code"
            fullWidth
          />
          <TextField margin="dense" id="districtName" label="Name" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer/>
    </div>
  );
}
