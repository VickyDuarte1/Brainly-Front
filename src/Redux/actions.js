import { GET_USERS, GET_DOCTORS,ADD_USER , GET_COMMENTS, CREATE_POST } from "./action-types";
import axios from 'axios';

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

export const createPost = (postData) => {
  return (dispatch) => {
    axios.post('https://brainly-back.onrender.com/comentarios', postData)
      .then(response => {
        dispatch({ type: CREATE_POST , payload: response.data });
      })
      .catch((error) => {
       console.log(error);;
      });
  };
};


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

  export const getComments = () =>{
    return function(dispatch){
      axios.get(`https://brainly-back.onrender.com/get_comments`)
      .then((response) => {
          console.log(response.data);
          
          // Imprime el resultado de la respuesta en la consola
          return dispatch({type: GET_COMMENTS, payload: response.data})
        }).catch((error) => {
          console.log(error)
        })
      }
    }