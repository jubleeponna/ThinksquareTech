import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Slide } from '@material-ui/core';

import contactus from '../../images/contactus.jpg';
//import about from 'Data/about.json';

const useStyles = makeStyles({
  root: {
    maxWidth: 750,
    marginTop : 10,
    marginLeft : 250,
    color : "blue"
    
  },
});

export default function ContactusCard() {
  const classes = useStyles();

  return (
      <>
    <Slide
  in
  direction="up"
  timeout={1000}
  style={{transform: 'translateY(12px)'}}
>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contact US"
          height="250"
          image={contactus}
          title="ThinkSquare Technologies"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           How to reach us?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {/* {about.ContactUS} */}
          PLease call  at  080-6677556677. 
          <br></br><br></br>
          Please note: ThinkSquare Technologies monitors messages only in business hours and it may take a business day or more for a response, depending on your enquiry.
      <br></br><br></br>
      Email:   placeholder@thinksquareTechnologies.com
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Get More detail
        </Button>
      </CardActions>
    </Card>
    </Slide>
    </>
  );
}