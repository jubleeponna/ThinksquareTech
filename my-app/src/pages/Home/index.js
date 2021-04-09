import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import Team from "../../content/Team.json";
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import FEA from '../../images/FEA.jpg';
//import Tech1 from '../../images/gas.jpg'
//import robo from '../../images/gas.jpg';
import bg4 from '../../images/gimball2.jpg'
//import gimball2 from '../../images/gimball2.jpg'
import banner2 from '../../images/tur.jpg'
import SWandIT from '../../images/SWandIT.png';
import Aircraft from '../../images/Aircraft.jpg';
import MobileDev from '../../images/mobile_dev.jpg';
//import WTT from '../../images/WTT.jpg'
//import IC from '../../images/IC.jpg';
import gasTurbines from '../../images/gimball_jpg.jpg'
import turbo from '../../images/turbo.jpeg';
import VideoModal from "../../common/Video/VideoModal";
import Grid from '@material-ui/core/Grid';

import AeroEngines from '../../images/AeroEngines.jpg'
import AandD from '../../images/AandD.jpg'
import AE1 from '../../images/AE1.jpg'
import AE from '../../images/AE.jpg'
import gimball2 from '../../images/gimball2.jpg'
import auto from '../../images/automotive.png';
import AD from '../../images/AD.jpg';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  { Title: "AeroSpace and Automotive",
    label: 'ThinkSquare has expertise in the areas of CAD /CAE/ CFD solutions ranging from product definition, design, development to integration of complete Aerospace engineering end to end Solutions. We offer services in the field of power and Energy sectors such as wind turbines, steam turbines and industrial gas turbines. Few key design deliverable are transportation fixtures, Jigs, tooling designs etc.',
    imgPath:
      AE1,
  },
  {
    Title: "IT Solutions",
    label: 'ThinkSquare Technologies IT division provide services in the area of web applications and android/IOS/Hybrid mobile applications development to cater the business needs of the wide variety of customers. The team is equipped with full-stack development experience. ThinkSquare Technologies IT division provide services in the area of web applications and android/IOS/Hybrid mobile applications development to cater the business needs of the wide variety of customers. The team is equipped with full-stack development experience. At ThinkSquare Technologies, our engineers excel in front-end as well as back-end technologies to deliver end-to-end solutions to our clients. They are experienced in all phases of development including concept creation to final products delivery. The education and training division provides hands-on training to equip students and young engineers with skills and expertise in the cutting-edge technologies of full-stack development. ', 
    imgPath:
      AandD,
  },
  {
    Title: "Training Offering",
    label: 'Training Offered in the following areas.  "CAD/CAE Training", "Auto CAD",  "Solidworks", "Unigraphics", "CATIA", "Ansys"' ,
    imgPath:
      AeroEngines,
  },
  {
    Title:"Gimbal",
    label: 'A gimbal is a pivoted support that allows the rotation of an object about a single axis. A set of three gimbals, one mounted on the other with orthogonal pivot axes, may be used to allow an object mounted on the innermost gimbal to remain independent of the rotation of its support (e.g. vertical in the first animation). For example, on a ship, the gyroscopes, shipboard compasses, stoves, and even drink holders typically use gimbals to keep them upright with respect to the horizon despite the ship\'s pitching and rolling.',
    imgPath:
     gimball2,
  },
  {
    Title:"Gas Turbines",
    label: 'The gas turbine is the engine at the heart of the power plant that produces electric current. A gas turbine is a combustion engine that can convert natural gas or other liquid fuels to mechanical energy. This energy then drives a generator that produces electrical energy. It is electrical energy that moves along power lines to homes and businesses.',
    imgPath:
      gasTurbines,
  },
  {
    Title:"Wind Turbines",
    label: "A wind turbine, or wind energy converter, is a device that converts the wind's kinetic energy into electrical energy. Wind turbines are manufactured in a wide range of vertical and horizontal axes. The smallest turbines are used for applications such as battery charging for auxiliary power for boats or caravans or to power traffic warning signs. Larger turbines can be used for making contributions to a domestic power supply while selling unused power back to the utility supplier via the electrical grid. Arrays of large turbines, known as wind farms, are becoming an increasingly important source of intermittent renewable energy and are used by many countries as part of a strategy to reduce their reliance on fossil fuels. One assessment claimed that, as of 2009, wind had the \"lowest relative greenhouse gas emissions, the least water consumption demands and... the most favourable social impacts compared to photovoltaic, hydro, geothermal, coal and gas.",
    imgPath:
     //windTurbines,
     turbo,
  }

];

const useStyles = makeStyles((theme) => ({

  div1:{
    flex : "33.33%" ,
    padding: "5px"
  },

   root: {
  //   //maxWidth: 1800,
      display:'flex',
      flexGrow: 1,
      },
  header: {
    display: 'cover',
    alignItems: 'center',
    //height: 100,
    //width: 500,
    //paddingLeft: theme.spacing(4),
     //backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 500,
    display: 'cover',
    //maxWidth: 100
    //overflow: 'hidden',
    width: '100%',
  },
   gridimg:{
    width :"350" ,
    height :"250",
    border : "0",
    //align : "center"
   },

  centered  : {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },

  Frontpage1: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2),
    //marginTop: 100,
    //marginLeft: 100,
    backgroundImage: `url(${banner2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  Frontpage1Content: {
    position: 'relative',
    marginTop : 0,
    fontSize:8,
    padding: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5),
      paddingRight:0,
    },
  },
  
    container : {
          position: "absolute",
         "text-align": "center",
         color: "white"
        },
        h1 : {
          margin: "0",
          padding: "0"
        },
        
        popup  : {
          position: "fixed",
          width: "100",
          height: "100",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          margin: "auto",
          "background-color": "rgba(0,0,0, 0.5)"
        },

        popup_inner  : {
          position: "absolute",
          left: "25%",
          right: "25%",
          top: "25%",
          bottom: "25%",
          margin: "auto",
          background: "white"
        },
        row : {
          display: "flex"
        },
        
        column : {
          flex: "33.33%",
          padding: "5px"
        },

        
        details: {
          display: 'flex',
          flexDirection: 'column',
        },
        content: {
          flex: '1 0 auto',
          //backgroundColor: '#76C568',
           //backgroundImage: `url(${gimbal1})`
        
        },
        cover: {
          width: 151,
          height: 230
        },
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
        },
        controls: {
          display: 'flex',
          alignItems: 'center',
          paddingLeft: theme.spacing(1),
          paddingBottom: theme.spacing(1),
        },
        playIcon: {
          height: 38,
          width: 38,
        },

      }));

//==================================================------

//const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {


  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);


  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container>
     <div className={classes.root} >
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
         
        {tutorialSteps.map((step, index) => (
         <div key={step.label}>
         {Math.abs(activeStep - index) <= 2 ? (
                 
            <Paper className={classes.Frontpage1}  >
                <div className={classes.overlay}   />
                <a target="/contactus" href="/contactus">
                  <img className={classes.img} alt="Text" src={step.imgPath} />
                </a>  
            </Paper>
         
          ) : null}
          </div>
          ))}
          
        
      </AutoPlaySwipeableViews>
      </div>


      <ScrollToTop />
      <div style={{ backgroundImage: `url(${bg4})` } 
  }> </div>
      <div>
      <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        subtitle={IntroContent.subtitle}
        content={IntroContent.text}
        button={IntroContent.button}
        //icon="developer.svg"
        //icon="Aircraft2.jpg"
        icon = "techs.jpg"
        id="intro"
      />
      </div>
      <div>
     
     
      <div style={{ padding: 100}} >
      <ContentBlock
        type="right"
        title={MissionContent.title}
        subtitle={MissionContent.subtitle}
        content={MissionContent.text}
        icon="FEAandFD.png"
        id="mission"
      />

<ContentBlock
        type="left"
        title={AboutContent.title}
        subtitle={AboutContent.subtitle}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="SWandIT.png"
        id="about"
      />
</div>
       {/* Simgle image video centered
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        >
         <ReactPlayer
          url="https://www.youtube.com/watch?v=ug50zmP9I7s"
          />
      </div> */}

<div style={{ padding: 50}} >
   <Grid container spacing={8} justify="center" > 
     <Grid item xs={4}>
         <a href="/services" target="new">
             <img width="350" height="250" border="0" align="center" className={classes.gridimg}  src={FEA}  alt="" />
         </a>
         <p> Finate Element Analysis</p>
     </Grid>  
        <Grid item xs={4}>
           <a href="/mechcomp" target="new">s
             <img width="350" height="250" border="0" align="center"  src={auto} alt="" />
           </a>
           <p> Automotives </p>
        </Grid>
        
        <Grid item xs={4}>
          <a href="/services" target="new">
             <img width="350" height="250" border="0" align="center"  src={AE} alt="" />
          </a>
          <p> AeroSpace and Defence</p>
        </Grid>

        <Grid item xs={4}>
          <a href="/swandit" target="new">
             <img width="350" height="250" border="0" align="center"  src={SWandIT} alt="" />
          </a>
          <p> Software and IT </p>
        </Grid>
        <Grid item xs={4}>
          <a href="/aerospace" target="new">
             <img width="350" height="250" border="0" align="center"  src={AD} alt="" />
          </a>
          <p> Aero Engines</p>
        </Grid>
        

      </Grid>
    </div>


    <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />



<div style={ {margin:"1.5rem 0rem 2rem 3rem"}}>

   <Grid container spacing={8} justify="center" > 
     <Grid item xs={4}>
      <VideoModal
        videoId="X3RW6nuLnfc"
        imageId={turbo}
        msg="About Our Technologies">
      </VideoModal>
     </Grid>
     <Grid item xs={4}>
        <VideoModal
        videoId="Nrc5-DbDeNI"
        imageId={Aircraft}
        msg="Our Success Stories">
      </VideoModal>
     </Grid>
     <Grid item xs={4}>
      <VideoModal
        videoId="ZyiZ-78edUc"
        imageId={MobileDev}
        msg="Client Testimonials">
      </VideoModal>
      </Grid>
    </Grid>
  </div>

  <br></br><br></br>  <br></br><br></br>
     
    <div >
      <ContentBlock
        type="left"
        title={Team.title}
        subtitle={Team.subtitle}
        content={Team.text}
        icon="team.jpg"
        id="Team"
      />
      {/* <ContactFrom
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
      </div>
       </div>
    </Container>
   
  );
};

export default Home;
