import React from "react";
//import { lazy } from "react";

import Divider from '@material-ui/core/Divider';
import AeroenginesCard from './aeroenginesCard';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
//import DD from "../../common/Dialog/Dialogue.json";

// These are for grid


//import Grid from '@material-ui/core/Grid';
//import Paper from '@material-ui/core/Paper';
import serv from '../../images/serv.png';
import EngA from '../../images/EA.jpg';
import MechEng from '../../images/MechEng.jpg';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },

    appbr: {
        //background : '#6600CC'
        background : '#76C568'
    },
    paper1: {
        height: 100,
        width: 210,
        backgroundImage: `url(${EngA})`
      },
      paper2: {
        height: 100,
        width: 230,
        backgroundImage: `url(${MechEng})`
      },
      paper3: {
        height: 100,
        width: 155,
        backgroundImage: `url(${serv})`
      },
      img:{
      width: 50,
      height: 50
      },
    control: {
        padding: theme.spacing(2),
      }
      

  }));

// export default function App() {
//  const Dialogue = lazy(() => import("../../common/Dialog"));
const AeroEngines = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    //const [spacing, setSpacing] = React.useState(10); // For Grid
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
       

  return (
    <div >
      {/* <Header /> */}
      {/* <Container > */}
      <br></br> <br></br>
      <Typography component="h5" variant="h5" color="textPrimary" display = "flex" gutterBottom>
        <center>Aero Engines </center>
        </Typography>
        <p >
       
        < Divider />
        
        <AeroenginesCard />
        <p></p>
        {/* // Adding More information        */}
        <AppBar position="static" className={classes.appbr}>
        <Tabs marginLeft="10"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="white"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Specialization" {...a11yProps(1)} />

          {/* <Tab label="Services" {...a11yProps(2)} /> */}
          {/* <Tab label="Client Testimonials" {...a11yProps(3)} />
          <Tab label="Testimonials" {...a11yProps(4)} />
          <Tab label="Insights" {...a11yProps(5)} />
          <Tab label="Engage" {...a11yProps(6)} />
          <Tab label="Item Seven" {...a11yProps(7)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      Think Square Technologies is a global engineering services company offering end-to-end engineering solutions across the field of AeroEngines
      With unprecedented levels of demand and overall growth in Aero Engine industry, there are many new challenges ahead that companies need to carefully navigate in order to reap the related benefits.

With more than two decades of experience in Aero Engineering, ThinkSquare Technologies is committed to solving these challenges, by delivering proven, powerful solutions on a global scale to support every line of business and integrate every phase of the product lifecycle—from product conceptualization to engine maintenance and support as well as everything in between.


 
      </TabPanel>

      <TabPanel value={value} index={1}>
       
       <ul>
         <li>Compressor Performance Analysis in CFD</li>
         <li>Mass flow rate prediction</li>
         <li> Heat flow analysis</li>
         <li> Heat exchanger – Thermal analysis. </li>
         <li> Pneumatic valve – Static and Modal analysis</li>
         <li> Transformer analysis – OBE and SSE condition</li>
       </ul>
       <br></br> <br  ></br>
       Contact:<br></br>
      ThinkSquare Technologies pvt ltd
      
      </TabPanel>


      {/* <TabPanel value={value} index={2}>
      <div style={{ padding: 100}} >
      <Grid container spacing={8} justify="center" > 
          <Grid item xs={4}>
            <Dialogue
            title={DD.Aero_bar1_title}
            Modaltitle={DD.Aero_bar1_Modaltitle}
            Modalcontent={DD.Aero_bar1_Modalcontent}
            />
            <Paper className={classes.paper1} />
            </Grid>
        
        
           <Grid item xs={4}>
           <Dialogue
            title={DD.Aero_bar2_title}
            Modaltitle={DD.Aero_bar2_Modaldata1}
            Modalcontent={DD.Aero_bar2_Modalcontent}
            />
            <Paper className={classes.paper2} />
           </Grid>

           <Grid item xs={4}>
           <Dialogue
            title={DD.Aero_bar3_title}
            Modaltitle={DD.Aero_bar3_Modaldata1}
            Modalcontent={DD.Aero_bar3_Modalcontent }
            />
           <Paper className={classes.paper3} />
                   {/* </Link>  OPEN here JUB */}
  {/*}         </Grid>
   </Grid> 
   </div>
      
      </TabPanel>
      <TabPanel value={value} index={3}>
       <p>
       "The gimbal works, yes, and has some neat features, but it has issues which is why I had to mark it down to only 2 stars and return it. The biggest issue is the horrible camera mount. Instead of using a common GoPro or sport cam mount, it uses a difficult to use strap clamp, which looks like it will break at some point. It does not fit the new GoPro 8. The mounting technique is very irritating because it doesn't allow the use of their nice camera charging port on many models of cameras unless you turn the camera upside down and then you lose access to either the power button or shutter button, again this wouldn't happen if they used a regular GoPro mount. It is difficult to mount and unmount the camera, far worse than the GoPro frame. While sitting on a table, the gyro drifted and the camera slowly rotated. My initial tests didn't show much if any improvement over the GoPro Hyper Smooth stabilization. You would use this more for smooth panning. I had to return it. I would at least wait until one is available with a regular GoPro mount."
       <br></br> <br  ></br>
       ---- By   	Wildman
       </p>
      </TabPanel> */}
     
        </p>
      
    </div>
  );
}
export default AeroEngines;