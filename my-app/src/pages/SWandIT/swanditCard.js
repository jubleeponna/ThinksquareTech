import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import swandit from '../../images/SWandIT.png'
//import about from 'Data/about.json';

const useit = makeStyles({
  root: {
    maxWidth: 2000,
    marginTop : 10,
    color : "orange"
    
  },
});

export default function swanditCard() {
  const classes = useit();

  return (
      <>
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt=" Software and IT competency"
          height="360"
          width="1500"
          
          image={swandit}
          title="Think Square Technologies"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Software and Web Infrastructure Development  
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          ThinkSquare Technologies IT division provide services in the area of web applications and android/IOS/Hybrid mobile applications development to wide variety of customers to address their business needs. The team is equipped with full-stack development experience.
          
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Get More detail
        </Button> */}
      </CardActions>
    </Card>
    </>
  );
}