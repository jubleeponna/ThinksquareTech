import React from "react";
//import { lazy } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from '@material-ui/core/Button';
//import * as S from "./styles";
//import logo from '../../images/think2.svg';
import img from '../../images/banner.jpg';
import logo from '../../images/logo.png';
import { makeStyles } from "@material-ui/core/styles";

import {
    AppBar,
    Toolbar,
    List,
    Container
  } from "@material-ui/core";

//const SvgIcon = lazy(() => import("../../common/SvgIcon"));

const useStyles = makeStyles({
    root: {
      boxShadow: "none",
      //backgroundColor: '#76C568',
      backgroundImage:{img}
     } ,
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
       },  
      navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`,
        color: `grey`,
        marginTop: 5,
      },
      linkText: {
        textDecoration: `none`,
        textTransform: `capitalize`,
        marginTop: 10,
        fontSize:20,
        fontStyle:"Tahoma",
        color: `white`
      },
      
        logo: {
          maxWidth: 1500,
          maxHeight: 85,
          marginLeft : 0, 
          marginBottom:20,
          marginTop:10
      }
})

export default function Header() {

  const [anchorEl, setanchorEl] = React.useState(null);
  const [anchorEl2, setanchorEl2] = React.useState(null);

  const handleClose = () => {
    setanchorEl(null);
    setanchorEl2(null);
  }
  
 const handleAeroEngines = () => {
    document.body.style.backgroundImage = "none";
    window.open('/aeroengines',"_self")
 };
  const handleAeroSpace = () => {
    document.body.style.backgroundImage = "none";
    window.open('/aerospace',"_self")
 };
 const handleWindturbines = () => {
  document.body.style.backgroundImage = "none";
  window.open('/windturbines',"_self")
};
const handleGasturbines = () => {
  document.body.style.backgroundImage = "none";
  window.open('/gasturbines',"_self")
};

const handleMechComp = () => {
  document.body.style.backgroundImage = "none";
  window.open('/mechcomp',"_self")
};
const handleSWandIT = () => {
  document.body.style.backgroundImage = "none";
  window.open('/swandit',"_self")
};

  const classes = useStyles();
  
  return (
    <div>
    
      <AppBar position="relative" widtch="10"  className={classes.root} >
        <Toolbar>
        <Container maxWidth="lg" className={classes.navbarDisplayFlex}>  
         
        {/* <S.NavLink to="/"> */}
                {/* <S.LogoContainer > */}
                  {/* <SvgIcon
                    // src="logo_new.svg"
                    src="think2.svg"
                    aria-label="homepage"
                    width="110px"
                    height="100px"
                  /> */}
                  <a href="/">
                   <img src={logo} alt="" width="110px" height="100px" /> 
                  {/* <Button  className={classes.root}>
                  // THINKSQUARE TECHNOLOGIES PVT LTD
                  //  </Button> */}
                  </a>
                {/* </S.LogoContainer> */}
                {/* </S.NavLink> */}
       
        <List  component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}>
                                 
                  <Button 
                  aria-controls="simple-menu" 
                  aria-haspopup = "true" 
                  onClick={ e => setanchorEl(e.currentTarget)} 
                  name="Indistries" 
                  className={classes.linkText} >
                    Industries
                 </Button>
                 <Menu
                  name="indistries"
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose = {() => setanchorEl(null)}
             >
               <MenuItem onClick={handleAeroSpace}>Aero Space & Defence Engineering</MenuItem>
               <MenuItem onClick={handleAeroEngines}>Aero Engines</MenuItem>
               <MenuItem onClick={handleWindturbines}>Automotive</MenuItem>
               <MenuItem onClick={handleGasturbines}>Robotics</MenuItem>
           </Menu>    

          <Button  
          aria-controls="simple-menu" 
          aria-haspopup = "true" 
          onClick={ e => setanchorEl2(e.currentTarget)} 
          name="Conpetencies" 
          className={classes.linkText} >
          Competencies
          </Button>
                <Menu
                name="competencies"
                id="simple-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose = {() => setanchorEl2(null)}
            
            ><MenuItem onClick={handleMechComp}>Mechanical Competency</MenuItem>
             <MenuItem onClick={handleSWandIT}>Software and IT Competencies</MenuItem>
             <MenuItem onClick={handleClose}>Close</MenuItem>
          </Menu>    

         
                 <a href="/services" key="Services"  className={classes.linkText}>
                   <Button  className={classes.linkText}>
                   Services
                   </Button>
                  </a>
                    
                  <a href="/careers" key="Carrers"   target="_self" className={classes.linkText}>
                   <Button  className={classes.linkText}>
                   Careers
                   </Button>
                  </a>

                  <a href="/TAC" key="Trainings"  target="_self" className={classes.linkText}>
                   <Button  className={classes.linkText}>
                   Trainings 
                   </Button>
                  </a>
                  
                  <a href="/contactus" key="contactUS" target="_self" className={classes.linkText}>
                   <Button  className={classes.linkText}>
                  ContactUs
                   </Button>
                  </a>
                  <a href="/clients" key="clients"  target="_self" className={classes.linkText}>
                   <Button  className={classes.linkText}>
                   OurClients
                   </Button>
                  </a>
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  </div>
);
}