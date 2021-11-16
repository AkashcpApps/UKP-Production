import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import InfoIcon from '@material-ui/icons/Info';
import DvrIcon from '@material-ui/icons/Dvr';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ReceiptIcon from '@material-ui/icons/Receipt';
import TextRotationNoneIcon from '@material-ui/icons/TextRotationNone';
import LaunchIcon from '@material-ui/icons/Launch';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SmsIcon from '@material-ui/icons/Sms';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import RestoreIcon from '@material-ui/icons/Restore';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// {
//   Id: "1",
//   Name: "DevAdmin"
//   },
//   {
//   Id: "2",
//   Name: "Admin"
//   },
//   {
//   Id: "3",
//   Name: "DataEntry"
//   }


let value=0;


// if(digit==0){
//   value=1; 
// }
//let digit=2;
export let  SidebarData=[];
if(localStorage.getItem('UserRole')!=null && localStorage.getItem('UserRole')!=undefined){

const digit=localStorage.getItem('UserRole');
console.log("UserRole sideBar -> "+localStorage.getItem('UserRole'));
if(digit==2)
{
   SidebarData= [
  {
    title: "Transactions",
    path: "/transactions",
        icon: <ReceiptIcon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "General Information",
        path: "/transactions/general-information",
            icon: <InfoIcon />,
      },
    ],
  },
  {
    title: "Master Data",
    path: "/masterdata",
      icon: <DvrIcon />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Districts",
        path: "/masterdata/districts",
            icon: <FormatListBulletedIcon />,
        cName: "sub-nav",
      },
      {
        title: "Taluks",
        path: "/masterdata/taluks",
          icon: <FormatListBulletedIcon />,
        cName: "sub-nav",
      },
      {
        title: "Villages",
        path: "/masterdata/villages",
          icon: <FormatListBulletedIcon />,
      },{
        title: "Structure Elements",
        path: "/masterdata/structureelements",
          icon: <FormatListBulletedIcon />,
        cName: "sub-nav",
      },
      {
        title: "Structure Type",
        path: "/masterdata/strucutretype",
          icon: <FormatListBulletedIcon />,
        cName: "sub-nav",
      },
      {
        title: "UOM",
        path: "/masterdata/uom",
          icon: <FormatListBulletedIcon />,
      },{
        title: "DSR Details",
        path: "/masterdata/dsrdetails",
          icon: <FormatListBulletedIcon />,
        cName: "sub-nav",
      },
      {
        title: "Depriciation",
        path: "/masterdata/depriciation",
          icon: <FormatListBulletedIcon />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Utilities",
    path: "/utilities",
    icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Text Entry",
        path: "/utilities/textentry",
            icon: <TextRotationNoneIcon />,
        cName: "sub-nav",
      },{
        title: "Generate Drawing",
        path: "/utilities/generatedrawing",
            icon: <LaunchIcon />,
        cName: "sub-nav",
      },
	],
  },
  {
    title: "Settings",
    path: "/settings",
      icon: <SettingsIcon />,
  
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Register",
        path: "/settings/register",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "All Users",
        path: "/settings/allusers",
          icon: <GroupAddIcon />,
      },{
        title: "User Roles",
        path: "/settings/userroles",
          icon: <GroupAddIcon />,
      },
      {
        title: "Send SMS",
        path: "/settings/sendsms",
          icon: <SmsIcon />,
      },{
        title: "Send Email",
        path: "/settings/sendemail",
          icon: <AlternateEmailIcon />,
      },
      {
        title: "Upload File",
        path: "/settings/uploadfile",
          icon: <CloudUploadIcon />,
      },{
        title: "Config",
        path: "/settings/config",
          icon: <SettingsSystemDaydreamIcon />,
      },
      {
        title: "Reset Password",
        path: "/settings/resetpassword",
          icon: <RestoreIcon />,
      },
    ],
  },
  {
    title: "System Manager",
    path: "/systemmanager",
    icon: <IoIcons.IoMdHelpCircle />,
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <ExitToAppIcon/>,
  },
];
}else{
  SidebarData= [
    {
      title: "Transactions",
      path: "/transactions",
          icon: <ReceiptIcon />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
    
      subNav: [
        {
          title: "General Information",
          path: "/transactions/general-information",
              icon: <InfoIcon />,
        },
      ],
    },
    {
      title: "Logout",
      path: "/logout",
      icon: <ExitToAppIcon/>,
    },
    
    
  ];


}
}
