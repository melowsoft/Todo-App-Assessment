import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
    singleTask: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 3,
        cursor: "pointer"
        // '&:hover':{
        //    border: "1px solid grey",
        //    borderRadius: 6, 

        // }
    },
    text: {
      border: "none",
      width: "100%"
    },
    checkbox: {
        marginBottom: 5
    }, 
    delete: {
        marginBottom: 5,
    },
    smallFlex: {
        display: "flex",
        width: "80%"
    },
    completed: {
        textDecorationLine: "line-through",
        color: "#828282"
    } 
}))