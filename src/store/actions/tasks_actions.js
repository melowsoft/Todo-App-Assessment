import axios from "axios"
import { refineArray, sortArray } from "../../helpers"

import {
    FETCH_ALL_TASKS_ACTION_TYPES,
    CREATE_NEW_TASK_ACTION_TYPES,
    DELETE_TASK_ACTION_TYPES,
    COMPLETE_TASK_ACTION_TYPES,
    UPDATE_TASK_ACTION_TYPES
} from "./actionTypes"

const {
    FETCH_ALL_TASK_REQUEST,
    FETCH_ALL_TASK_FULFILLED,
    FETCH_ALL_TASK_REJECTED
} = FETCH_ALL_TASKS_ACTION_TYPES
const {
    CREATE_NEW_TASK_REQUEST,
    CREATE_NEW_TASK_FULFILLED,
    CREATE_NEW_TASK_REJECTED
} = CREATE_NEW_TASK_ACTION_TYPES
const {
   DELETE_TASK_REQUEST,
   DELETE_TASK_REJECTED,
   DELETE_TASK_FULFILLED
} = DELETE_TASK_ACTION_TYPES

const {
    COMPLETE_TASK_REQUEST,
    COMPLETE_TASK_FULFILLED,
    COMPLETE_TASK_REJECTED
} = COMPLETE_TASK_ACTION_TYPES
const {
UPDATE_TASK_REQUEST,
UPDATE_TASK_FULFILLED,
UPDATE_TASK_REJECTED
} = UPDATE_TASK_ACTION_TYPES

const BASE_URL = "https://tiny-list.herokuapp.com/api/v1"
const USER_ID = 18

// THUNKS
const fetchAllTasks = () => {
    return async (dispatch) => {
      dispatch(fetchAllTaskRequest());
      try {
        const response = await axios.get(
          `${BASE_URL}/users/${USER_ID}/tasks`
        );
        const tasks = response.data

        // refine data
        const refinedData = refineArray(tasks)
       
        //sort data by umcompleted first
        const sorted = sortArray(refinedData)

        return dispatch(fetchAllTaskFufilled(sorted));
      } catch (e) {
        console.log(e);
        dispatch(fetchAllTaskRejected());
      }
    };
  };
const createNewTask = (task) => {
    return async (dispatch) => {
      dispatch(createNewTaskRequest());
      try {
        const response = await axios.post(
          `${BASE_URL}/users/${USER_ID}/tasks`,
          {task:{
              description: task
          }}
        );
        const newTask = response.data
        return dispatch(createNewTaskFufilled(newTask));
      } catch (e) {
        console.log(e);
        dispatch(createNewTaskRejected());
      }
    };
  };
const deleteTask = (taskId) => {
    return async (dispatch) => {
      dispatch(deleteTaskRequest());
      try {
        const response = await axios.delete(
          `${BASE_URL}/users/${USER_ID}/tasks/${taskId}`
        );
        
        if (response.status === 204){
            return dispatch(deleteTaskFufilled({data: "Deleted Task Successfully!"}));
        }
    
      } catch (e) {
        console.log(e);
        dispatch(deleteTaskRejected());
      }
    };
  };
const completeTask = (task) => {
    let action = ""
    if(task.status){
        action = 'completed'
    } else {
        action = 'uncompleted'
    }

    return async (dispatch) => {
      dispatch(completeTaskRequest());
      try {
        const response = await axios.put(
          `${BASE_URL}/users/${USER_ID}/tasks/${task.id}/${action}`
        );
        
        const completedTask = response.data
        return dispatch(completeTaskFufilled(completedTask));
    
      } catch (e) {
        console.log(e);
        dispatch(completeTaskRejected());
      }
    };
  };
const updateSingleTask = (task) => {
    
    return async (dispatch) => {
      dispatch(updateTaskRequest());
      try {
        const response = await axios.put(
          `${BASE_URL}/users/${USER_ID}/tasks/${task.id}`,
          {task:{
            description: task.description
        }}
        );
        
        const updatedTask = response.data
        return dispatch(updateTaskFufilled(updatedTask));
    
      } catch (e) {
        console.log(e);
        dispatch(updateTaskRejected());
      }
    };
  };

  // ACTION CREATORS
  const fetchAllTaskRequest = () => ({
      type: FETCH_ALL_TASK_REQUEST
  })

  const fetchAllTaskFufilled = data => ({
      type: FETCH_ALL_TASK_FULFILLED,
      payload: data
  })

  const fetchAllTaskRejected = () => ({
    type: FETCH_ALL_TASK_REJECTED
    })
  const createNewTaskRequest = () => ({
      type: CREATE_NEW_TASK_REQUEST
  })

  const createNewTaskFufilled = data => ({
      type: CREATE_NEW_TASK_FULFILLED,
      payload: data
  })

  const createNewTaskRejected = () => ({
    type: CREATE_NEW_TASK_REJECTED
    })
  const deleteTaskRequest = () => ({
      type: DELETE_TASK_REQUEST
  })

  const deleteTaskFufilled = data => ({
      type: DELETE_TASK_FULFILLED,
      payload: data
  })

  const deleteTaskRejected = () => ({
    type: DELETE_TASK_REJECTED
    })
  const completeTaskRequest = () => ({
      type: COMPLETE_TASK_REQUEST
  })

  const completeTaskFufilled = data => ({
      type: COMPLETE_TASK_FULFILLED,
      payload: data
  })

  const completeTaskRejected = () => ({
    type: COMPLETE_TASK_REJECTED
    })
  const updateTaskRequest = () => ({
      type: UPDATE_TASK_REQUEST
  })

  const updateTaskFufilled = data => ({
      type: UPDATE_TASK_FULFILLED,
      payload: data
  })

  const updateTaskRejected = () => ({
    type: UPDATE_TASK_REJECTED
    })

    export {
        fetchAllTasks,
        createNewTask,
        deleteTask,
        completeTask,
        updateSingleTask
    }