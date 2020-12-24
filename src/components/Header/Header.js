import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {useStyles} from "./headerStyles"



export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
           TinyList
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}