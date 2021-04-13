import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import automotive from '../../images/auto.jpg'
//import about from 'Data/about.json';

const useit = makeStyles({
  root: {
    maxWidth: 2000,
    marginTop : 10,
    color : "orange"
     },
});

export default function automotiveCard() {
  const classes = useit();

  return (
      <>
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Automotive"
          height="360"
          width="1500"
          
          image={automotive}
          title="Think Square Technologies"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Drive the change by changing the drive
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          We help Aerospace & Defense companies accelerate new product development, smoothen supply chain, strengthen aftermarket services, and embrace digital technologies
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </>
  );
}