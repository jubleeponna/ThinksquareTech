import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import Header from "../../components/Header";
import { Container } from "@material-ui/core";
import { lazy } from "react";
import { Link } from 'react-router-dom';
import {Link as RouterLink, LinkProps as RouterLinkProps} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import "./styles.css";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4"
];

// const styles = muiBaseTheme => ({
  
  const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: useStyles.spacing.unit * 3
  },
  divider: {
    margin: `${useStyles.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -useStyles.spacing.unit
    }
  }
});
const Services = () => {
// function App({ classes }) {
  const classes = useStyles();
  return (
 
       <Container >
       <Divider/>  <Divider/>  
      <Typography component="h5" variant="h5" color="textPrimary" display = "flex" gutterBottom>
        <center>Software and IT competency </center>
        </Typography>
     
   
  
    <div class={classes.App}>
     
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={
            "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
          }
        />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            Nature Around Us
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            We are going to learn different kinds of species in nature that live
            together to form amazing environment.
          </Typography>
          <Divider className={classes.divider} light />
          {faces.map(face => (
            <Avatar className={classes.avatar} key={face} src={face} />
          ))}
        </CardContent>
      </Card>
      </div>
      </Container>
  
  );
}

//const WrappedApp = withStyles(usestyles)(Services);

export default Services;
