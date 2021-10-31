import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
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
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import * as Constants from '../utils/Constants';

import './AddDialog.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(1),
    },
}));


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AddNewDistrictDialog() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [uomId, setUomId] = React.useState([]);
    const [state, setState] = React.useState({
        length: true,
        diameter: true,
        quantity: true,
        plan: true,
        circumference: true,
        crossSection: true,
        heightDepth: true,
        breadthWidthThickness: true,
        x: true,
        y: true,
        orientationField: true,
        quantity: true,
    });


    const { length, diameter, plan, circumference, crossSection, heightDepth, breadthWidthThickness, x, y, orientationField, quantity } = state;
    const error = [length, diameter, plan, circumference, crossSection, heightDepth, breadthWidthThickness, x, y, orientationField, quantity].filter((v) => v).length !== 2;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleSave = () => {
        return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Structure Element has been added successfully!
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
                New Structure Element
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" className="dialog-title">Create a New Structure Element</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the details of a new structure element to be created.
                    </DialogContentText>
                    <div style={{ padding: '5px' }}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="structureCode"
                            label="Code"
                            style={{ margin: '10px', width: '150px' }}
                        />
                        <TextField
                            margin="dense"
                            id="structureName"
                            label="Name"
                            style={{ margin: '10px', width: '150px'  }}
                        />
                        <TextField
                            margin="dense"
                            id="labelPreFix"
                            label="LablePreFix"
                            style={{ margin: '10px', width: '150px'  }}
                        />
                        <TextField
                            margin="dense"
                            id="description"
                            label="Description"
                            style={{ margin: '10px', width: '490px'  }}
                        />
                    </div>
                    <div style={{width: '580px'}}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={length} onChange={handleChange} name="length" />}
                                    label="Length" required='true'
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={diameter} onChange={handleChange} name="diameter" />}
                                    label="Diameter"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={plan} onChange={handleChange} name="plan" />}
                                    label="Plan"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={x} onChange={handleChange} name="x" />}
                                    label="X"
                                />
                            </FormGroup>
                        </FormControl>
                        <FormControl required error={error} component="fieldset" className={classes.formControl}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={heightDepth} onChange={handleChange} name="heightDepth" />}
                                    label="Height Depth"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={circumference} onChange={handleChange} name="circumference" />}
                                    label="Circumference"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={crossSection} onChange={handleChange} name="crossSection" />}
                                    label="Cross Section"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={y} onChange={handleChange} name="y" />}
                                    label="Y"
                                />
                            </FormGroup>
                        </FormControl>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox checked={breadthWidthThickness} onChange={handleChange} name="breadthWidthThickness" />}
                                    label="Breadth Width Thickness"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={orientationField} onChange={handleChange} name="orientationField" />}
                                    label="Orientation"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={quantity} onChange={handleChange} name="quantity" />}
                                    label="Quantity"
                                />
                            </FormGroup>
                        </FormControl>
                    </div>
                    <div style={{ padding: '5px' }}>
                        <InputLabel id="uomId-select-label">Uom ID</InputLabel>
                        <Select
                            label="Uom ID"
                            id="uomId"
                            value={uomId}
                            onChange={handleChange}
                            style={{ marginTop: '0px', width: '150px' }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <TextField
                            margin="dense"
                            id="volumeFormula"
                            label="Volume Formula"
                            style={{ marginLeft: '15px', marginTop: '-13px', width: '160px' }}
                        />
                        <TextField
                            margin="dense"
                            id="areaFormula"
                            label="Area Formula"
                            style={{ marginLeft: '15px', marginTop: '-13px', width: '160px' }}
                        />
                    </div>
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
        </div>
    );
}