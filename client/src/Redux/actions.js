import { GET_USERS, GET_DOCTORS,ADD_USER  } from "./action-types";
import axios from 'axios';


export const getDoctors = () =>{
  return function(dispatch){
    axios.get(`http://localhost:5000/doctores`)   
    .then((response) => {
        return dispatch({type: GET_DOCTORS, payload: response.data})
    }).catch((error) => {
        console.log(error)
    }
    )
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

  
