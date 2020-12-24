import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: "800",
      fontSize: 20,
      fontFamily: "Lato",
      fontStyle: "normal",
      [theme.breakpoints.down("sm")]:{
          textAlign: "center"
      }
    },
    header: {
      background: "#EB5757"
    }
  }));