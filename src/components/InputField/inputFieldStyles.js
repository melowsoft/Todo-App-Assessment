import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
      width: "100%",
      marginTop: 20,
      borderBottom: "1px solid #e0e0e0"
    },
    button: {
        cursor: "pointer",
        color: "#EB5757"
    },
    input: {
        color: "#EB5757",
        fontSize: 16,
        lineHeight: 19
    }
  }));