import { GET_USERS, ALPHABETICAL_SORT, SEARCH_USER } from "./action-types";
import axios from 'axios';


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
export function getUsersByName(payload) {
    return function(dispatch) {
        try {
            var response =  axios.get(`https://api.github.com/users/${payload}`);
            return dispatch({type: SEARCH_USER, payload: response.data})
        } catch {
            return alert ('User Not Found')
        }
    }
}





