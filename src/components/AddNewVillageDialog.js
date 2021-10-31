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
import VillageDataTable from './VillageDataTable';

import "./AddDialog.css";
const axios = require("axios");

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AddNewDistrictDialog() {
  const [open, setOpen] = React.useState(false);
  const [districts, setDistricts] = React.useState("");
  const [district, setdistrict] = React.useState([]);
  const [districtID, setdistrictID] = React.useState("");
  const [districtCode, setdistrictCode] = React.useState("");
  const[talukID,setTalukID]=React.useState("");
  const[talukCode,setTalukCode]=React.useState("");
  const[taluk,setTaluk]=React.useState([]);

  React.useEffect(() => {
    axios
      .get(Constants.url + "UKP/rest/endpoints/GetAllDistrict")
      .then((res) => {
        if (res.data.status == true && res.data.statusCode == 200) {
          setdistrict(res.data.mDistList);
        }
      });
  }, []);

  React.useEffect(()=>{
      axios.get(Constants.url+'UKP/rest/endpoints/GetTalukByDist',{
          params:{
            "Dist_ID":"9B527BC6-2FCC-4C06-9895-161B984F1F75"
          }
      }).then(res=>{
          setTaluk(res.data.mDistList);
      })

  },[]);

  const handleChangedistrict = (e) => {
   // districts(e.target.value);
    setdistrictID(e.target.value);
    district.map((value, index) => {
      if (value.ID === e.target.value) {
        setdistrictCode(value.Code);
      }
    });
  };

  const handleChangedTaluk = (e) => {
    // districts(e.target.value);
     setTalukID(e.target.value);
     taluk.map((value, index) => {
       if (value.ID === e.target.value) {
         setTalukCode(value.Code);
       }
     });
   };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setDistricts(event.target.value);
  };

  const handleSave = () => {
//let districtId=document.getElementById('DistrictID').value;
let districtCode=document.getElementById('DistrictCode').value;
//let talukID=document.getElementById('TalukID').value;
let talukCode=document.getElementById('TalukCode').value;
let villageCode=document.getElementById('villageCode').value;
let villageName=document.getElementById('villageName').value;
alert(districtCode+' '+districtID+' '+talukCode+' '+talukID+' '+talukCode+'_'+villageCode+' '+villageName);
setOpen(false);
axios.post(Constants.url+'UKP/rest/endpoints/InsertVillage',{
    "Code": talukCode+'_'+villageCode,
    "Name": villageName,
    "DistrictID": districtID,
    "DistrictCode": districtCode,
    "TalukID":talukID,
    "TalukCode": talukCode,
    "CreatedBy": "1F9FF498-8B99-40C8-8C31-07752E781959",
    "ModifiedBy": "1F9FF498-8B99-40C8-8C31-07752E781959"  
}).then(res=>{
    if(res.data.status==true && res.data.statusCode==200){
        toast.success("Successfully inserted");
       // VillageDataTable.reFresh();
    }
    else{
        toast.error("Failed to Insert")
    }

}).catch(err=>{
    toast.error("Error "+err);
})




    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Village has been added successfully!
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
        New Village
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className="dialog-title">
          Create a New Village
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the details of a new village to be created.
          </DialogContentText>
          <InputLabel id="district-select-label" style={{ paddingTop: "10px" }}>
            District
          </InputLabel>
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
            margin="dense"
            value={districtID}
            id="DistrictID"
            disabled={true}
            label="DistrictID"
            fullWidth
          /> */}
          <TextField
            margin="dense"
            value={districtCode}
            id="DistrictCode"
            disabled={true}
            label="DistrictCode"
            fullWidth
          />
          <InputLabel id="taluk-select-label" style={{ paddingTop: "10px" }}>
            Taluk
          </InputLabel>
          <Select
            labelId="taluk-select-label"
            id="taluks"
            value={talukID}
            onChange={handleChangedTaluk}
            fullWidth
          >
            {taluk.map((test, key) => (
              <MenuItem key={key} value={test.ID}>
                {test.Name}
              </MenuItem>
            ))}
          </Select>

          {/* <TextField 
          margin="dense"
           id="TalukID" 
           disabled={true}
           value={talukID}
           label="TalukID" 
           fullWidth /> */}
          <TextField
            margin="dense"
            id="TalukCode"
            disabled={true}
            value={talukCode}
            label="TalukCode"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="villageCode"
            label="Village Code"
            fullWidth
          />
          <TextField
            margin="dense"
            id="villageName"
            label="Village Name"
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
