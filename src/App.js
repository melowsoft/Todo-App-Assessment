
import './App.css';
import React, { useEffect, useState } from "react"
import { Alert, Header, InputField, Loader, Task } from './components';
import { Grid } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllTasks } from "./store/actions/tasks_actions"


import {useStyles} from "./AppStyles"
import tasksReducer from './store/reducers/tasks_reducer';

function App() {
const classes = useStyles();
const dispatch = useDispatch()
const tasks = useSelector(state => state.tasks);
const [message, upadateMessage] = useState(null)
const [alertVariant, upadateVariant] = useState(null)


  useEffect(() => {
    
  
    dispatch(fetchAllTasks())

  }, [dispatch, tasks.newTask, tasks.deletedTask, message, alertVariant])

  return (
    <div className="App">
         <Header />
        
         <Grid container spacing={3} className={classes.wrapper}>
            <Grid item l={6} md={6} sm={10} xs={10}>
            {message &&  <Alert message={message} variant={alertVariant}/>}
              <InputField />
 
              {
                tasks.tasks && tasks.tasks.map(task => (
                  <Task task={task} key={task.id}/>
                ))
              }
            </Grid>
         </Grid>  
    </div>
  );
}

export default App;
