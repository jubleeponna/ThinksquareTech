import React from "react";
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CAD from "../../images/CAD.jpg";
import FEA from "../../images/FEA.jpg";
import FD from "../../images/FD.png";
import Zoom from '@material-ui/core/Zoom';
import "./styles.css";
import Grid from '@material-ui/core/Grid';
import {Link as RouterLink} from "react-router-dom";
import serv from '../../images/serv.png';
import EngA from '../../images/EA.jpg';
import MechEng from '../../images/MechEng.jpg';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const LinkRouter = (props: LinkRouter) => <Link underline="none" component={RouterLink} {...props}/>

  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-$ff{index}`}
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
      card: {
        maxWidth: 350,
        height: 550,
        marginTop: 10,
        margin: "auto",
        transition: "0.4s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
      },
      
      footercard: {
        maxWidth: 1300,
        height: 280,
        marginTop: 10,
        margin: "auto",
        transition: "0.4s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
      },
      media: {
        paddingTop: "46.25%"
      },
      content: {
        textAlign: "left",
        padding: "10"
      },
      divider: {
        margin: "10px"
      },
      heading: {
        fontWeight: "bold"
      },
      subheading: {
        lineHeight: 1.8
      },
      
    

  }));


const Services = () => {

    const classes = useStyles();
   
       

  return (
    <div >
     
       {/* <Divider/>  <Divider/>  
      <Typography component="h5" variant="h5" color="textPrimary" display = "flex" gutterBottom>
        <center>Our Services </center>
        </Typography> */}
        <p >
       
        < Divider />
        < Divider />
        {/* <div className="App"> */}
        <div style={{ padding: 100}} >
       <Grid container spacing={8} justify="center" > 
          <Grid item xs={4}>
             <Zoom in="true" style={{ transitionDelay: '1000ms' }}>
                <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={FEA}
                    />
                <CardContent className={classes.content}>
                <Typography
                      className={"MuiTypography--heading"}
                      variant={"h6"}
                      gutterBottom
                >  Finate Element Analysis
                </Typography>

                <Typography
                     className={"MuiTypography--subheading"}
                     variant={"caption"}
                >
                We are going to learn different kinds of species in nature that live together to form amazing environment.
                <ul>
                  
                <li> Mathematical modeling/Meshing</li>
                <li> Linear Static/Non-linear Structural Analysis</li>
                <li> Thermal Analysis </li>
                <li> Explicit and Implicit Dynamic Analysis </li>
                <li> Fatigue Analysis </li>
                <li> Creep Analysis </li>
                <li> Damage Tolerance Analysis </li>
                <li> Composite Analyis </li>
                <li> Fluid Structure interaction. </li>
                <li> Linear Eigen Buckling and Post  </li>
                <li> Seismic analysis </li>
                <li> Strain Data Correlation.</li>
                <li> NVH for Automotive.</li>


                </ul>
                </Typography>
                {/* <Divider className={classes.divider} light />
                {faces.map(face => (
                  <Avatar className={classes.avatar} key={face} src={face} />
                ))} */}
            </CardContent>
          </Card>
       
      </Zoom> 
      </Grid>  
        <Grid item xs={4}>
          <Zoom in="true" style={{ transitionDelay: '1000ms' }}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={FD}
              />
              <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              > Fluid Dynamics
              </Typography>

              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
              We are going to learn different kinds of species in nature that live together to form amazing environment.
              <ul>
              <li> Mesh for CFD analysis </li>
              <li> Steady & Transient flow </li>
              <li> Aero acoustic </li>
              <li> Airfoil flow and turbine blade simulation </li>
              <li> Boundary layer separation  </li>
              <li> Cooling & combustion </li>
              <li> Multiphysics system analysis </li>
              </ul>
              </Typography>
                {/* <Divider className={classes.divider} light />
                {faces.map(face => (
                <Avatar className={classes.avatar} key={face} src={face} />
                ))} */}
            </CardContent>
            </Card>
            </Zoom>
        </Grid>
        
        <Grid item xs={4}>
          <Zoom in="true" style={{ transitionDelay: '1000ms' }}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={CAD}
              />
              <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              > CAD Services
              </Typography>

              <Typography
                className={"MuiTypography--subheading"}
                variant={"caption"}
              >
              We are going to learn different kinds of species in nature that live together to form amazing environment.
              <ul>
                  <li>2D to 3D conversion </li>
                  <li>3D Modeling </li>
                  <li>Drafting – Part, Assembly, Manufacturing </li>
                  <li>Concept Design </li>
                  <li>Product Design </li>
                  <li>Reverse Engineering </li>
                  <li>Legacy conversion </li>
                  <li>>Details drawing </li>
                  <li>PLM support </li>
               
              </ul>
              </Typography>
                {/* <Divider className={classes.divider} light />
                {faces.map(face => (
                <Avatar className={classes.avatar} key={face} src={face} />
                ))} */}
            </CardContent>
            </Card>
            </Zoom>
        </Grid>


      </Grid>
    </div>

        <Card className={classes.footercard}>
         <CardContent className={classes.content}>
              <Typography
                className={"MuiTypography--heading"}
                variant={"h6"}
                gutterBottom
              > <u>Our Key Strenghts</u>
              </Typography>

          <Typography gutterBottom  component="div">
          <Box  fontFamily="verdana" fontSize="2">
         {/* <u>Our Key Strenghts:</u> */}
      
        <ul>
          <li>
           <b style={{"background-color": "lightgreen"}}>TIMELY DELIVERY</b>:  We adhere strictly to timelines and ensure that each iteration of the app rolls out exactly when it was promised.
          </li> 
          <li>
          <b style={{"background-color": "lightgreen"}}></b>TOP QUALITY DEVELOPMENT: We never skimp on quality, ever. Stakeholders are involved throughout all stages of product development for transparency and conformity.
          </li>
          <li>
          <b style={{"background-color": "lightgreen"}}> TECHNOLOGY </b>: We remain up to date with the latest coding practices and technologies in the industry and strive to implement them in our products.
          </li>
          <li>
          <b style={{"background-color": "lightgreen"}}>WE THINK LONG TERM </b>: Our products are designed to endure and so is the relationship with our clients.
          </li>
          <li>
          <b style={{"background-color": "lightgreen"}}>GREAT PEOPLE</b>: Our dedicated team of developers are experienced, well-trained and driven. They consistently put their best foot forward.
          </li>
          </ul>
          </Box>
          </Typography>
          </CardContent>
          </Card>
        < Divider />
      < Divider />
    </p>
     
    </div>
  );
}
export default Services;