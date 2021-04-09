import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import careersimg from '../../images/careersimg.jpg'


const useit = makeStyles({
  root: {
    maxWidth: 2000,
    marginTop : 10,
    color : "orange"
    
  },
});

export default function careersCard() {
  const classes = useit();

  return (
      <>
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=" Mechanical Competency"
          height="360"
          width="1500"
          
          image={careersimg}
          title="careers"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          We build Smart people
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
              Since then founded, have been pioneering in advanced simulations in Mechanical Engineering, Aerospace and Defence Engineering and Web development.
          </Typography>
        </CardContent>
      </CardActionArea>
     </Card>
    </>
  );
}