import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import aeroengines from '../../images/AeroEngines.jpg'
//import about from 'Data/about.json';

const useit = makeStyles({
  root: {
    maxWidth: 2000,
    marginTop : 10,
    color : "orange"
     },
});

export default function aeroenginesCard() {
  const classes = useit();

  return (
      <>
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Aero Engines"
          height="360"
          width="1500"
          
          image={aeroengines}
          title="Think Square Technologies"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Aero Engines
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          Pioneering technologies for clean, safe and super-efficient aero engines. Design.Build.Maintain
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </>
  );
}