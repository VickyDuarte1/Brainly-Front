import { GET_USERS, GET_DOCTORS,ADD_USER , GET_COMMENTS } from "./action-types";
import axios from 'axios';
import commentsData from './coments.json';

export const getDoctors = () =>{
  return function(dispatch){
    // axios.get(`https://brainly-back.onrender.com/doctores`)  
    axios.get(`https://brainly-back.onrender.com/doctores`) 
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
      // axios.get(`https://brainly-back.onrender.com/pacientes`)   
      axios.get(`https://brainly-back.onrender.com/pacientes`)
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
        // axios.post(`https://brainly-back.onrender.com/registro`, payload)   
        axios.post(`https://brainly-back.onrender.com/registro`, payload)
    .then((response) => {
        return dispatch({type: ADD_USER, payload: response.data})
    }).catch((error) => {
        console.log(error)})
   
    }
  }

  export const getComments = () => {
    return dispatch => {
      const comments = commentsData.comentarios;
      dispatch({
        type: GET_COMMENTS,
        payload: comments
      });
    };
  };