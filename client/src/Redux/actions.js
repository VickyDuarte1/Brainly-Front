<<<<<<< HEAD
import { GET_USERS } from "./action-types";

export const getUsers = () => {
    return function(dispatch) {
        axios.get(`https://api.github.com/users`)
    .then((response) => {
        return dispatch({type: GET_USERS, payload: response.data})
=======
import { GET_USERS, GET_DOCTORS,ADD_USER  } from "./action-types";
import axios from 'axios';


export const getDoctors = () =>{
  return function(dispatch){
    axios.get(`http://localhost:5000/doctores`)   
    .then((response) => {
        return dispatch({type: GET_DOCTORS, payload: response.data})
>>>>>>> 231ab867989f39de916893ad4dcdd6bba44f9338
    }).catch((error) => {
        console.log(error)
    }
    )
<<<<<<< HEAD
}};

=======
  }
}

export function getUsers() {
  return function(dispatch) {
      axios.get(`http://localhost:5000/pacientes`)   
  .then((response) => {
      return dispatch({type: GET_USERS, payload: response.data})
  }).catch((error) => {
      console.log(error)
  }
  )
}};

export const createUser = (payload) => {
  return function(dispatch) {    
    // Agregar usuario al array correspondiente en el estado del store
        axios.post(`http://localhost:5000/registro`, payload)   
    .then((response) => {
        return dispatch({type: ADD_USER, payload: response.data})
    }).catch((error) => {
        console.log(error)})
   
    }
  }

  
>>>>>>> 231ab867989f39de916893ad4dcdd6bba44f9338
