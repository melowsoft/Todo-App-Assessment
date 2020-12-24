import React, { useEffect, useRef } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from "@material-ui/core/Typography"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "../../assets/delete.svg"
import classnames from "classnames"

import  { useDispatch, useSelector } from "react-redux"
import { deleteTask, fetchAllTasks, completeTask, updateSingleTask } from "../../store/actions/tasks_actions"

import {useStyles} from "./taskStyles"

export default function Task({task}) {
  const [checked, setChecked] = React.useState(task.completed_at ? true : false);
  const [editedTask, updateTask] = React.useState(task.description ? task.description : "")

  const ref = useRef();

  const dispatch = useDispatch()
  const updatedTask = useSelector(state => state.tasks)


  const classes = useStyles()
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {

    if(updatedTask.completedTask){
        dispatch(fetchAllTasks())
    }

    if (updatedTask.updatedTask){
        dispatch(fetchAllTasks())
    }
   
  }, [dispatch, updatedTask.deletedTask, checked, updatedTask.completedTask, updatedTask.updatedTask])

  function useKey(key, cb){
      const callbackRef = useRef(cb);

      useEffect(() => {
          callbackRef.current = cb
      })

      useEffect(() => {
    
        function handle(event){
            if(event.code === key){
                callbackRef.current(event)
            }
        }
    
       document.addEventListener("keypress", handle);
       return () => document.removeEventListener("keypress", handle)
      }, [key]);
  }

  function editTask(){
    if(editedTask && editedTask.length > 0 && task){
        dispatch(updateSingleTask({id: task.id, description: editedTask}))
    }
  }

  useKey("Enter", editTask)


  return (
    <div className={classnames(classes.singleTask, "single-task")}>
     <div className={classes.smallFlex}>
        <Checkbox
        onClick={(e) =>  dispatch(completeTask({id: task.id, status: e.target.checked}))}
        className={classes.checkbox}
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <input type="text" value={editedTask} placeholder={task ? task.description : ""} onChange={(e) => updateTask(e.target.value)} className={classnames(classes.text, task.completed_at ? classes.completed : null)}/>
    </div>   

    <IconButton onClick={() => dispatch(deleteTask(task.id))} aria-label="delete" className={classnames(classes.delete, "delete-button")}>
        <img src={DeleteIcon} alt="delete-icon"/>
      </IconButton>
    </div>
  );
}