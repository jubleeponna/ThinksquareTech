import { lazy } from "react";
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Tech1 from '../../images/gas.jpg'
import robo from '../../images/gas.jpg';
import bg4 from '../../images/gimball2.jpg'
import gimbal1 from '../../images/image.jpg'
import banner2 from '../../images/tur.jpg'
import windTurbines from '../../images/turb.jpg'
import gasTurbines from '../../images/gimball_jpg.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  { Title: "AeroSpace and Automotive",
    label: 'ThinkSquare has expertise in the areas of CAD /CAE/ CFD solutions ranging from product definition, design, development to integration of complete Aerospace engineering end to end Solutions. We offer services in the field of power and Energy sectors such as wind turbines, steam turbines and industrial gas turbines. Few key design deliverable are transportation fixtures, Jigs, tooling designs etc.',
    imgPath:
      Tech1,
  },
  {
    Title: "IT Solutions",
    label: 'ThinkSquare Technologies IT division provide services in the area of web applications and android/IOS/Hybrid mobile applications development to cater the business needs of the wide variety of customers. The team is equipped with full-stack development experience. ThinkSquare Technologies IT division provide services in the area of web applications and android/IOS/Hybrid mobile applications development to cater the business needs of the wide variety of customers. The team is equipped with full-stack development experience. At ThinkSquare Technologies, our engineers excel in front-end as well as back-end technologies to deliver end-to-end solutions to our clients. They are experienced in all phases of development including concept creation to final products delivery. The education and training division provides hands-on training to equip students and young engineers with skills and expertise in the cutting-edge technologies of full-stack development. ', 
    imgPath:
      robo,
  },
  {
    Title: "Training Offering",
    label: 'Training Offered in the following areas.  "CAD/CAE Training", "Auto CAD",  "Solidworks", "Unigraphics", "CATIA", "Ansys"' ,
    imgPath:
      bg4,
  },
  {
    Title:"Gimbal",
    label: 'A gimbal is a pivoted support that allows the rotation of an object about a single axis. A set of three gimbals, one mounted on the other with orthogonal pivot axes, may be used to allow an object mounted on the innermost gimbal to remain independent of the rotation of its support (e.g. vertical in the first animation). For example, on a ship, the gyroscopes, shipboard compasses, stoves, and even drink holders typically use gimbals to keep them upright with respect to the horizon despite the ship\'s pitching and rolling.',
    imgPath:
     gimbal1,
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
     windTurbines,
  }

];

const useStyles = makeStyles((theme) => ({
   root: {
   flexGrow: 1,
  },
  header: {
    display: 'cover',
    alignItems: 'center',
    },
  img: {
    height: 260,
    display: 'cover',
    width: '100%',
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
        }
}));


const Container = lazy(() => import("../../common/Container"));

const Home = () => {


  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
 

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container>
     <div className={classes.root}>
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
                <img className={classes.img} alt="Text" src={step.imgPath} />
           </Paper>
         
          ) : null}
          </div>
          ))}
          
        
      </AutoPlaySwipeableViews>
      </div>
   </Container>
  );
};

export default Home;
