import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//import { convertLegacyProps } from 'antd/lib/button/button';

//import aerospace from 'Data/images/Tech1.jpg'
import mechComp from '../../images/MechComp.jpg'
//import about from 'Data/about.json';

const useit = makeStyles({
  root: {
    maxWidth: 2000,
    marginTop : 10,
    // marginLeft : 0,
    // width: 2000,
    color : "orange"
    
  },
});

export default function mechcompCard() {
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
          
          image={mechComp}
          title="Think Square Technologies"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Pioneer in advanced simulations in Mechanical Engineering such as CAD/CAM/CAE/CFD
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          Since then founded, we have been pioneering in advanced simulations in Mechanical Engineering such as CAD/CAM/CAE/CFD Physical components which are subjected for validation are mathematically modeled using commercial codes.
          
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