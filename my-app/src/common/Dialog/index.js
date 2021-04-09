import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from "react-i18next";
import serv from "../../images/serv.png";
import { makeStyles} from '@material-ui/core/styles';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  button:{
    backgroundImage : `url(${serv})`,
    padding: "32px 16px",
    color:"#4CAF50"

  },
});
const useStyles = makeStyles((theme) => ({

  dialogue:{
    padding: "16px 16px",
    color:"#4CAF50"
  },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

// export default function CustomizedDialogs(title,data1) {
  const Dialogue = ({ title, Modal_title, Modalcontent, t }) => {
    const classes = useStyles();
    
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}  className={classes.dialogue} >
       {/* Manufaturing Engineering */}
       {t(title)}
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
        <DialogTitle id="customized-dialog-title" onClose={handleClose} >
        {t(Modal_title)}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
          {t(Modalcontent)}
          
         </Typography>
          <Typography gutterBottom>
            <u>Contact:</u>
          </Typography>
          <Typography gutterBottom>
          For more info: +919878765457
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default withTranslation()(Dialogue);