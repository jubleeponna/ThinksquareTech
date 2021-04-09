import React from "react";
import { Container } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import CareersCard from './careersCard';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import styled from "styled-components";


import {Link as RouterLink} from "react-router-dom";
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
  
  // function a11yProps(index) {
  //   return {
  //     id: `scrollable-auto-tab-${index}`,
  //     'aria-controls': `scrollable-auto-tabpanel-${index}`,
  //   };
  // }
  
  const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457"
    }
  };
  const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 400px 30px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};
  
  const Careers = () => {

  return (
    <div >
      
      <Container >
      <br></br><br></br>    
      
      <Button theme="pink" >
          Join With Us - Do your Best Work Ever
          </Button>
       <p >
       
        < Divider />
        < Divider />
        <CareersCard />
        < Divider />

        <h3>Vacancies:</h3>
        
        <ul >
            <li> Software Deveoper </li>
            <li> Mechanical graduate- Must pursue more than 70% </li>
            <li> Project Trainee </li>
                      
        </ul>
      </p>
      </Container>
    </div>
  );
}
export default Careers;