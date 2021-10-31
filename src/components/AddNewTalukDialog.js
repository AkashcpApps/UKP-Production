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
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import * as Constants from "../utils/Constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./AddDialog.css";
const axios = require("axios");
const str = Constants.hostname + "UKP/rest/endpoints/InsertVillage";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AddNewDistrictDialog() {
  const [open, setOpen] = React.useState(false);
  const [districts, setDistricts] = React.useState([]);
  const [district, setdistrict] = React.useState([]);
  const [districtID, setdistrictID] = React.useState("");
  const [districtCode, setdistrictCode] = React.useState("");

 


  const handleChangedistrict = (e) => {
    setdistrictID(e.target.value);
    district.map((value, index) => {
      if (value.ID === e.target.value) {
        setdistrictCode(value.Code);
      }
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setDistricts(event.target.value);
  };

  React.useEffect(() => {
    axios
      .get(Constants.url + "UKP/rest/endpoints/GetAllDistrict")
      .then((res) => {
        if (res.data.status == true && res.data.statusCode == 200) {
          setdistrict(res.data.mDistList);
        }
      });
  }, []);

  const handleSave = () => {
    // let Code = document.getElementById("Code").value;
    // let Name = document.getElementById("Name").value;

    //let DistrictID = document.getElementById("DistrictID").value;

    let DistrictCode = document.getElementById("DistrictCode").value;

    let TalukID = document.getElementById("TalukID").value;

    let TalukCode = document.getElementById("TalukCode").value;

    if (
      TalukID != null &&
      TalukID != undefined &&
      TalukID != "" &&
      DistrictCode != null &&
      DistrictCode != undefined &&
      DistrictCode != "" &&

      TalukCode != null &&
      TalukCode != undefined &&
      TalukCode != ""

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
        .post(Constants.url + "UKP/rest/endpoints/InsertTaluk", {
          Code: TalukID,
          Name: TalukCode,
          DistrictID: districtID,
          DistrictCode: districtCode,
          CreatedBy: "1F9FF498-8B99-40C8-8C31-07752E781959",
          ModifiedBy: "1F9FF498-8B99-40C8-8C31-07752E781959",
        })
        .then((res) => {
          if (res.data.status == true && res.data.statusCode == 200) {
            toast.success("Successfully inserted");
          }
          console.log(res.data);
        })
        .catch((err) => {
          toast.error("Error " + err);
          console.log("Errorsss" + err);
        });
    } else {
      alert("Enter all fields...!");
    }
    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Taluk has been added successfully!
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
        New Taluk
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className="dialog-title">
          Create a New Taluk
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the details of a new taluk to be created.
          </DialogContentText>
          <InputLabel id="district-select-label">District</InputLabel>
          <Select
            labelId="district-select-label"
            id="districts"
            value={districtID}
            onChange={handleChangedistrict}
            fullWidth
          >
            {district.map((test, key) => (
              <MenuItem key={key} value={test.ID}>
                {test.Name}
              </MenuItem>
            ))}
          </Select>
          {/* <TextField
                        autoFocus
                        margin="dense"
                        id="Code"
                        label="Code"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="Name"
                        label="Name"
                        fullWidth
                    /> */}
          {/* <TextField
            margin="dense"
            id="DistrictID"
            disabled={true}
            value={districtID}
            label="DistrictID"
            fullWidth
          /> */}
          <TextField
            margin="dense"
            disabled={true}
            value={districtCode}
            id="DistrictCode"
            label="DistrictCode"
            fullWidth
          />
          <TextField
                        margin="dense"
                        id="TalukID"
                        label="TalukID"
                        fullWidth
                    />
                     <TextField
                        margin="dense"
                        id="TalukCode"
                        label="TalukCode"
                        fullWidth
                    />
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
      <ToastContainer />
    </div>
  );
}
