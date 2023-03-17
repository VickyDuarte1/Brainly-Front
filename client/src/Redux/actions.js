import { GET_USERS, CREATE_USER } from "./action-types";
import axios from "axios"

export const getUsers = () => {
    return function(dispatch) {
        axios.get(`https://api.github.com/users`)
    .then((response) => {
        return dispatch({type: GET_USERS, payload: response.data})
    }).catch((error) => {
        console.log(error)
    }
    )
}};

export const createUser = (payload) => {
    return function(dispatch) {
        const response = axios.post("http://localhost:5000/create", payload)
        return (response)
    }
}


