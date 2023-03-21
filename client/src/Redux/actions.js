import { GET_USERS, GET_DOCTORS,ADD_USER, ADD_DOCTOR } from "./action-types";
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
    const  form  = payload; // asumiendo que userType es un campo en tu objeto de payload que indica si el usuario es paciente o médico
    
    // Agregar usuario al array correspondiente en el estado del store
    if (form.role !== 'medico') {
      dispatch({ type: ADD_USER, payload: payload });
    } else if (form.role === 'medico') {
      dispatch({ type: ADD_DOCTOR, payload: payload });
    }
  }
}

