import React, {useEffect, useRef, useState} from 'react';

import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Add from '@material-ui/icons/Add';
import  { useDispatch, useSelector } from "react-redux"
import { createNewTask, fetchAllTasks } from "../../store/actions/tasks_actions"


import {useStyles} from "./inputFieldStyles"

export default function InputField() {
  const [taskInput, updateTask] = useState("")
  const classes = useStyles();
  const ref = useRef();

  const dispatch = useDispatch()
  const newTask = useSelector(state => state.tasks)

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
    }, [key, dispatch]);
}

  useEffect(() => {
    if( newTask.newTask && newTask.newTask.description){
      updateTask("")
      dispatch(fetchAllTasks())
       
    }
  }, [newTask.newTask])

  function createTaskHander(){
    if(taskInput && taskInput.length > 0){
      dispatch(createNewTask(taskInput))
    }
  }

  useKey("Enter", createTaskHander)

  return (
    <div>
      <FormControl className={classes.margin}>
        <Input
        value={taskInput}
        onChange={(e) => updateTask(e.target.value)}
        className={classes.input}
        placeholder="Add to list..."
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Add className={classes.button}/>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}