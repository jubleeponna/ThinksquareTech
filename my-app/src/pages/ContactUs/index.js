import React from "react";
//import { lazy } from "react";
import { Container } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import ContactusCard from './contactusCard';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import PropTypes from 'prop-types';
//import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

  
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
  
const ContactUs = () => {

   
  return (
    <div >
      
      <Container >
      <br></br><br></br>    
       <p >
        < Divider />
        < Divider />
       
        <ContactusCard />
      </p>
      </Container>
    </div>
  );
}
export default ContactUs;