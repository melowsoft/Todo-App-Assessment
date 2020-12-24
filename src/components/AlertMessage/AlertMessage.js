import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    position: "sticky",
    top: 70
  },
}));

export default function AlertMessage({message, variant}) {
  const classes = useStyles();

  useEffect(() => {
  
  }, [variant, message])
  
  return (
    <div className={classes.root}>
      {
       message && variant && (<Alert severity={variant}>{message || ""}</Alert>)
      }
    </div>
  );
}