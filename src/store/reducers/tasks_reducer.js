import {
FETCH_ALL_TASKS_ACTION_TYPES,
CREATE_NEW_TASK_ACTION_TYPES,
DELETE_TASK_ACTION_TYPES,
COMPLETE_TASK_ACTION_TYPES,
UPDATE_TASK_ACTION_TYPES
} from "../actions/actionTypes"

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
 DELETE_TASK_FULFILLED,
 DELETE_TASK_REJECTED
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

const initialState = {
    tasks: null,
    loading: false,
    newTask: null,
    deletedTask: null,
    completedTask: null,
    updatedTask: null,
    error: false
}

const tasksReducer = (state = initialState, action) => {

    console.log(action.payload, "need to get this")
  
    switch(action.type) {
        case FETCH_ALL_TASK_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case FETCH_ALL_TASK_FULFILLED:
            return {
                ...state,
                loading: false,
                tasks: action.payload
            }
        case FETCH_ALL_TASK_REJECTED:
            return {
                ...state,
                loading: false,
                error: true
            }
        case CREATE_NEW_TASK_REQUEST:
                return {
                    ...state,
                    loading: true,
                    error: false
             }   
        case CREATE_NEW_TASK_FULFILLED:
                return {
                    ...state,
                    loading: false,
                    newTask: action.payload
                }
        case CREATE_NEW_TASK_REJECTED:
            return {
                ...state,
                loading: false,
                error: true
            }
        case DELETE_TASK_REQUEST:
                return {
                    ...state,
                    loading: true
             }
        case DELETE_TASK_FULFILLED:
                return {
                    ...state,
                    loading: false,
                    deletedTask: action.payload
                }
        case DELETE_TASK_REJECTED:
            return {
                ...state,
                loading: false,
                error: true
            } 
        case COMPLETE_TASK_REQUEST:
                return {
                    ...state,
                    loading: true,
                    error: false
             }
        case COMPLETE_TASK_FULFILLED:
                return {
                    ...state,
                    loading: false,
                    completedTask: action.payload
                }
        case COMPLETE_TASK_REJECTED:
            return {
                ...state,
                loading: false,
                error: true
            }
        case UPDATE_TASK_REQUEST:
                return {
                    ...state,
                    loading: true,
                    error: false
             }
        case UPDATE_TASK_FULFILLED:
                return {
                    ...state,
                    loading: false,
                    updatedTask: action.payload
                }
        case UPDATE_TASK_REJECTED:
            return {
                ...state,
                loading: false,
                error: true
            }


        default:
            return state;
    }
}

export default tasksReducer;