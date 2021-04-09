import React from "react";
import { Container } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import MechcompCard from './mechcompCard';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {Link as RouterLink} from "react-router-dom";
import { Link } from 'react-router-dom';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    //type LinkRouter = RouterLinkProps & Omit<LinkProps, "component">
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
    //value: PropTypes.any.isRequired,
  };
  
  
const MechComp = () => {

    
       

  return (
    <div >
      
      <Container >
          
      <Typography component="h5" variant="h5" color="textPrimary" display = "flex" gutterBottom>
        <center>Mechanical Competency </center>
        </Typography>
        <p >
       
        < Divider />
        < Divider />
        
        <MechcompCard />
        <div style={{"margin-left" : "20"}}>
        <p>
        <h2 font-color="green">ThinkSquare Mechanical Division </h2>Since then founded, have been pioneering in advanced simulations in Mechanical Engineering such as CAD/CAM/CAE/CFD.
      
        Physical components which are subjected for validation are mathematically modeled using commercial codes,
        <ul>
          <li>
          The design parameters are being optimized using  Finite Element and Finite Volume Techniques. This helps us to identify the opportunities and potential  failures modes of a system.
          </li> 
          </ul>
          Our validation process involves  optimization of a structure that  includes 
         <ul> 
          <li>
           Topology
          </li>
          <li>
          Shape and topographic 

          </li>
        
        </ul> 
        in order to reduce the cost and weight  of the structure.
        </p>
        </div>


        < Divider />
        < Divider />


        <h3>Our services include:</h3>
        CAE Services (FEA &CFD):<br></br><br></br>
        <u>Finite Element Analysis:</u>
        <ul>
            <li> Mathematical modeling/Meshing </li>
            <li> Linear Static/Non-linear Structural Analysis </li>
            <li> Thermal Analysis </li>
            <li> Explicit and Implicit Dynamic Analysis </li>
            <li> Fatigue Analysis </li>
            <li> Creep Analysis</li>
            <li> Damage Tolerance Analysis </li>
            <li> Composite Analyis </li>
            <li> Fluid Structure interaction </li>
            <li> Linear Eigen Buckling and Post </li>   
            <li> Seismic analysis </li>
            <li> Strain Data Correlation </li>
            <li> NVH for Automotive </li>   
        </ul>

        <u>Fluid Dynamics:</u>

        <ul >
            <li>Mesh for CFD analysis </li>
            <li> Steady & Transient flow </li>
            <li> Aero acoustic </li>
            <li> Airfoil flow and turbine blade simulation </li>
            <li> Boundary layer separation</li>
            <li> Cooling & combustion</li>
            <li> Multiphysics system analysis </li>
           
        </ul>

      {/* <div style={{ padding: 100}} >
      If you want to add any item , can add here/
      </div> */}
      </p>
      </Container>
    </div>
  );
}
export default MechComp;