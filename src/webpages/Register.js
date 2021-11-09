import React from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from '@material-ui/core/styles'
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import * as Constants from "../utils/Constants";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
// import FormLabel from '@mui/material/FormLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(2),
            width: "25ch"
        }
    },
    formControl: {
        margin: theme.spacing(3)
    }
}));

export default function RegistrationForm() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');
    const [state, setState] = React.useState({devAdmin: false, admin: false, dataEntry: false});
    const [RoleID, setRoleID] = React.useState('');

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
        const checked = event.target.checked;

        // to get the checked value
        const checkedValue = event.target.value;

        // to get the checked name
        const checkedName = event.target.name;
        setRoleID(checkedName);
        // alert(checked + " " + checkedValue + " " + checkedName);
    };

    const handleRadioChange = (event) => { // alert(event.target.value);
        setValue(event.target.value);
        setRoleID(event.target.value);
    };

    const cleraFiled = () => {
      let firstName = document.getElementById("firstName").value='';
      let lastName = document.getElementById("lastName").value='';
      let emailId = document.getElementById("emailId").value='';
      let mobileNumber = document.getElementById("mobileNumber").value='';
      let userName = document.getElementById("userName").value='';
      let Password = document.getElementById("password").value='';
      let cpassword = document.getElementById("confirm-password").value='';
    };
    
    const nullCheck=(value)=>{
        if(value=='' || value==null|| value==undefined){
            return false;
        }
        else{
            return true;
        }
    }

    const handleIconClicks = (name) => () => {
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let emailId = document.getElementById("emailId").value;
        let mobileNumber = document.getElementById("mobileNumber").value;
        let userName = document.getElementById("userName").value;
        let Password = document.getElementById("password").value;
        let cpassword = document.getElementById("confirm-password").value;
      

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        if(nullCheck(firstName) && nullCheck(lastName) && nullCheck(emailId) && nullCheck(mobileNumber) && nullCheck(userName) && nullCheck(Password)){
        if (Password === cpassword) {
         //   alert(firstName + ' ' + lastName + ' ' + RoleID + ' ' + emailId + ' ' + parseInt(mobileNumber) + ' ' + today + ' ' + userName);
            if ((Password != null && Password != '')) {
                axios.post(Constants.url + 'UKP/rest/endpoints/UserRegistration', {
                    "FirstName": firstName,
                    "MiddleName": "MiddleName",
                    "LastName": lastName,
                    "RoleID": RoleID,
                    "Level": "Level",
                    "Email": emailId,
                    "EmailConfirmed": 0,
                    "PasswordHash": Password,
                    "SecurityStamp": "SecurityStamp",
                    "PhoneNumber": mobileNumber,
                    "PhoneNumberConfirmed": 0,
                    "TwoFactorEnabled": 0,
                    "LockoutEndDateUtc": today,
                    "LockoutEnabled": 0,
                    "AccessFailedCount": 2,
                    "UserName": userName,
                    "VerificationCode": "12354",
                    "VerificationCodeConfirmed": 0
                }).then((res) => {
                    if (res.data.status == true && res.data.statusCode == 200) {
                        toast.success("Successfully Registered");
                        cleraFiled();
                    } else {
                        toast.error("Failed");
                    }
                });
            } else {
                toast.error('Enter all the fields');
            }
        } else {
            toast.error("Different password");
        }
    }else{
        toast.info("Enter all the Fields");
    }
    };

    const {devAdmin, admin, dataEntry} = state;

    return (
        <div className="new-registraion-form">
            <form className={
                    classes.root
                }
                noValidate
                autoComplete="off">
                <div>
                    <TextField required id="firstName" label="First Name"/>
                    <TextField required id="lastName" label="Last Name"/>
                    <TextField required id="emailId" label="Email"/>
                    <TextField id="mobileNumber" label="Mobile Number"/>
                </div>
                <div>
                    <TextField required id="userName" label="User Name"/>
                    <TextField required id="password" label="Password" type="password"/>
                    <TextField required id="confirm-password" label="Confirm Password" type="password"/>
                </div>
                <div className="new-registraion-form-role">
                    <h4>User Role</h4>
                </div>
                <div style={
                    {margin: 8}
                }>
                    <form>
                        <FormControl sx={
                                {m: 3}
                            }
                            component="fieldset"

                            variant="standard">
                            <RadioGroup aria-label="quiz" name="quiz"
                                value={value}
                                onChange={handleRadioChange}>
                                <FormControlLabel value="admin"
                                    control={<Radio/>}
                                    label="Admin"/>
                                <FormControlLabel value="dataEntry"
                                    control={<Radio/>}
                                    label="Data Entry"/>
                            </RadioGroup>
                        </FormControl>
                    </form>
                </div>
                <div style={
                    {
                        paddingLeft: "10px",
                        marginBottom: "10px"
                    }
                }>
                    <Button variant="contained" color="primary"
                        onClick={
                            handleIconClicks("submit")
                    }>
                        Save
                    </Button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
}
