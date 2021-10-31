import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import * as Constants from "../utils/Constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function RegistrationForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    devAdmin: false,
    admin: false,
    dataEntry: false,
  });
  const[RoleID ,setRoleID]=React.useState('');

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    const checked = event.target.checked;

    // to get the checked value
    const checkedValue = event.target.value;

    // to get the checked name
    const checkedName = event.target.name;
    setRoleID(checkedName);
   // alert(checked + " " + checkedValue + " " + checkedName);
  };

  const handleIconClicks = (name) => () => {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let emailId = document.getElementById("emailId").value;
    let mobileNumber = document.getElementById("mobileNumber").value;
    let userName = document.getElementById("userName").value;
    let Password = document.getElementById("password").value;
    let cpassword = document.getElementById("confirm-password").value;
    var MyDate = new Date();
    var MyDateString= ('0' + MyDate.getDate()).slice(-2) + '/'
    + ('0' + (MyDate.getMonth()+1)).slice(-2) + '/'
    + MyDate.getFullYear();

   // alert(MyDateString);


    // let date =
    //   new Date().getDate() +
    //   "/" +
    //   new Date().getMonth()+''.length==1: +
    //   "/" +
    //   new Date().getFullYear();
    if (Password === cpassword ) {

      alert(firstName+' '+lastName+' '+RoleID+' '+emailId+' '+parseInt(mobileNumber)+' '+MyDateString+' '+userName);
        if( (Password!=null && Password!=''))
        {
      axios
        .post(Constants.url+'UKP/rest/endpoints/UserRegistration',
        {
          "FirstName": firstName,
          "MiddleName": "MiddleName",
          "LastName": lastName,
          "RoleID": RoleID,
          "Level": "Level",
          "Email": emailId,
          "EmailConfirmed": 0,
          "PasswordHash": "PasswordHash",
          "SecurityStamp": "SecurityStamp",
          "PhoneNumber":mobileNumber,
          "PhoneNumberConfirmed": 0,
          "TwoFactorEnabled": 0,
          "LockoutEndDateUtc": "10/11/1985",
          "LockoutEnabled": 0,
          "AccessFailedCount": 2,
          "UserName": userName,
          "VerificationCode": "12354",
          "VerificationCodeConfirmed": 0
        })
        .then((res) => {
          if (res.data.status == true && res.data.statusCode == 200) {
            toast.success("Successfully Registered");
          } else {
            toast.error("Failed");
          }
        });
    }else{
        toast.error('Enter all the fields');
    } }else {
      toast.error("Different password");
    }
  };

  const { devAdmin, admin, dataEntry } = state;

  return (
    <div className="new-registraion-form">
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField required id="firstName" label="First Name" />
          <TextField required id="lastName" label="Last Name" />
          <TextField required id="emailId" label="Email" />
          <TextField id="mobileNumber" label="Mobile Number" />
        </div>
        <div>
          <TextField required id="userName" label="User Name" />
          <TextField required id="password" label="Password" type="password" />
          <TextField
            required
            id="confirm-password"
            label="Confirm Password"
            type="password"
          />
        </div>
        <div className="new-registraion-form-role">
          <h4>User Role</h4>
        </div>
        <div>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Assign Role</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={devAdmin}
                    onChange={handleChange}
                    name="devAdmin"
                  />
                }
                label="Dev Admin"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={admin}
                    onChange={handleChange}
                    name="admin"
                  />
                }
                label="Admin"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={dataEntry}
                    onChange={handleChange}
                    name="dataEntry"
                  />
                }
                label="Data Entry"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div style={{ paddingLeft: "10px", marginBottom: "10px" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleIconClicks("submit")}
          >
            Save
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
