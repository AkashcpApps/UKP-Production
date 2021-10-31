import React, { forwardRef, useRef, useImperativeHandle }  from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AddIcon from '@material-ui/icons/Add';
import GIInputFormContainer from './GIInputFormContainer';


const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function GeneralInputForm() {
    const [refresh, doRefresh] = React.useState(0);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const childRef = React.useRef();

    const handleClickOpen = () => {
        setOpen(true);
      
//        childRef.current.showAlert();
    };

    const handleClose = () => {
       // doRefresh(prev => prev + 1);
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
                New General Information
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            New General Information
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <div>
                    <GIInputFormContainer refresh={refresh}/>
                </div>
            </Dialog>
        </div>
    );
}