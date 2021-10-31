import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import DSRMainLabelPanel from './DSRMainLabelPanel';
import DSRSubLabelPanel from './DSRSubLabelPanel';

export default function DSREditInfoTabs(props) {
    const[passedData,setPassedData]=React.useState('');
    localStorage.setItem('dsrID', props.data);

 //alert("3 DSREditInfoTabs-->"+props.data);
  //  setPassedData(props.data);

  
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Main Label" value="1" />
                        <Tab label="Sub Label" value="2" />
                    </TabList>
                </Box>
                {
                    //alert("3-->"+props.data)
                }
                <TabPanel value="1"><DSRMainLabelPanel data={props.data} /></TabPanel>
                <TabPanel value="2"><DSRSubLabelPanel /></TabPanel>
            </TabContext>
        </Box>
    );
}