import React from "react";

import { Container } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import {Link as RouterLink} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

import CardMedia from '@material-ui/core/CardMedia';

import { Link } from 'react-router-dom';
import Clients_img from '../../images/Clients.png'

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

  
  const Clients = () => {

  return (
    <div >
      
      <Container >
      <br></br><br></br>    
      
       <p >
       
        < Divider />
        < Divider />
        <br></br><br></br> <br></br><br></br>
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Career"
          height="500"
          image={Clients_img}
          title="ThinkSquareIT"
        />
        
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
        < Divider />

        <h3>Our Clients:</h3>
        
        <ul >
            <li>RAAD </li>
            <li> Krithi Conepts</li>
            <li> AVIEC</li>
            <li> Cranes</li>
            <li> Optimum solutions</li>
            <li>Microtech Group of companies  </li>
                      
        </ul>
      </p>
      </Container>
    </div>
  );
}
export default Clients;