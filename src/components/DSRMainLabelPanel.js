import React from "react";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as Constants from "../utils/Constants";

import DSRMainLabelDataTable from "./DSRMainLabelDataTable";

import "./AddDialog.css";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function TextEntryPanel() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [uomId, setUomId] = React.useState([]);
  const [description, setDescription] = React.useState("");
  const[IsDsr,setIsDsr]=React.useState(0)

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {};

  const handleSave = () => {
    let dsrId = document.getElementById("dsrId").value;
    let dsrCode = document.getElementById("dsrCode").value;
    let description = document.getElementById("description").value;
  //  alert(dsrId + " " + dsrCode + " " + description);

    axios
      .post(Constants.url + "UKP/rest/endpoints/InsertDSRMain", {
        DsrID: dsrId,
        Code: dsrCode,
        Description: description,
        IsDsr: IsDsr,
        CreatedBy: "D99FF689-7F83-4ACB-9E4D-C3128C79154B",
        ModifiedBy: "D99FF689-7F83-4ACB-9E4D-C3128C79154B",
        DsrOrder: 1,
      })
      .then((res) => {
          if(res.data.status==true && res.data.statusCode==200){
              //alert('Inserted')
              toast.success('success');
          }
          else{
            //  alert('Failed')
            toast.success('Failed to insert');
          }


      })
      .catch((err) => {
        toast.error('Failed to insert '+err);
      });

    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Text Entry has been added successfully!
        </Alert>
      </Snackbar>
    );
  };
  const checkeds = (event) => {
    let res = event.target.checked;
    if(res==true){
        setIsDsr(1);
    }else{
        setIsDsr(0);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div class="add-new-element-main-form">
        <div class="text-entry-main-form">
          <TextField
            autoFocus
            margin="dense"
            id="dsrId"
            label="DSR Id"
            value="640D7C0B-0D42-4272-8A8B-866BD86EA748"
            style={{ marginLeft: "20px", width: "250px" }}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            margin="dense"
            id="dsrCode"
            label="Code"
            style={{ marginLeft: "30px", width: "250px" }}
          />
          <FormControlLabel
            id="isDsr"
            style={{ marginTop: "20px", marginLeft: "20px", width: "140px" }}
            control={<Checkbox />}
            onChange={checkeds}
            label="Is DSR"
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            style={{ marginLeft: "20px", width: "90%", height: "50px" }}
          />
          <div>
            <Button
              onClick={handleClose}
              variant="contained"
              color="primary"
              style={{ margin: "10px", float: "right" }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              variant="contained"
              color="primary"
              style={{ margin: "10px", float: "right" }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>

      <div class="add-new-element-main-form">
        <div style={{ marginTop: "20px" }}>
          <DSRMainLabelDataTable />
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}
