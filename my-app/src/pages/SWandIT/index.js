import React from "react";
import { Container } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import SWandITCard from './swanditCard';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SW from "../../images/SW.jpg";
import {Link as RouterLink} from "react-router-dom";
import serv from '../../images/serv.png';
import EngA from '../../images/EA.jpg';
import MechEng from '../../images/MechEng.jpg';
import { Link } from 'react-router-dom';

function TabPanel(props) {
    
    const { children, value, index, ...other } = props;
    const LinkRouter = (props: LinkRouter) => <Link underline="none" component={RouterLink} {...props}/>

  
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
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    

    appbr: {
        background : '#6600CC'
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
        width: 300,
        backgroundImage: `url(${serv})`
      },
      img:{
      width: 50,
      height: 50
      },
      imgcenter:{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "20%"
        },
        
    control: {
        padding: theme.spacing(2),
      },
    

  }));

const SWandIT = () => {

    const classes = useStyles();
    
  return (
    <div >
      {/* <Header /> */}
      <Container >
       <Divider/>  <Divider/>  
      <Typography component="h5" variant="h5" color="textPrimary" display = "flex" gutterBottom>
        <center>Software and IT competency </center>
        </Typography>
        <p >
       
        < Divider />
        < Divider />
        
        <SWandITCard />
        <div>
        <p>
        <Typography gutterBottom variant="h6" component="h2" color="blue">
        <u>Software and IT Division</u>
        </Typography>
        ThinkSquare Technologies IT division provide services in the area of web applications and android/IOS/Hybrid mobile applications development to wide variety of customers to address their business needs. The team is equipped with full-stack development experience.
        <br></br><br></br>
        {/* <div className="App" style={{ backgroundColor: "green" }}> */}
        <div>
         <img  src={SW} alt="src"  class={classes.imgcenter}/>
         </div>
         <br></br><br></br>
         <div>
           <ul>
             <li>
           Web Application Development: AngularJS, ReactJS
           </li>
           <li>
           MOBILE APPLICATION DEVELOPMENT : Andriod ,iOS ,Flutter, ReactNative
           </li>
           <li>
           Enterprise Web Applications:   Open Source, NodeJS, Fullstack  
           </li>
           </ul>
         </div>
         <br></br>

      
          <Typography gutterBottom  component="div">
          <Box  fontFamily="verdana" fontSize="2">
         <u>Our Key Strenghts:</u>
      
        <ul>
          <li>
           TIMELY DELIVERY:  We adhere strictly to timelines and ensure that each iteration of the app rolls out exactly when it was promised.

          </li> 
          <li>
          TOP QUALITY DEVELOPMENT: We never skimp on quality, ever. Stakeholders are involved throughout all stages of product development for transparency and conformity.
          </li>
          <li>
          SMART TECHNOLOGY: We remain up to date with the latest coding practices and technologies in the industry and strive to implement them in our products.
          </li>
          <li>
          WE THINK LONG TERM: Our products are designed to endure and so is the relationship with our clients.
          </li>
          <li>
          GREAT PEOPLE: Our dedicated team of developers are experienced, well-trained and driven. They consistently put their best foot forward.
          </li>
          </ul>
          </Box>
          </Typography>
              
               
        </p>
        </div>


        < Divider />
        < Divider />

      {/* <div style={{ padding: 100}} >
      If you want to add any item , can add here/
      </div> */}
      
      </p>
      </Container>
    </div>
  );
}
export default SWandIT;