import { GET_USERS, CREATE_USER } from "./action-types";
import axios from "axios"

export const getUsers = () => {
  
  return function (dispatch) {
    const users = usersData.results.map((user) => ({
      
      id: user.login.uuid,
      name: `${user.name.first} ${user.name.last}`,
      gender: user.gender,
      age: user.dob.age,
      image: user.picture.large,
      city: user.location.city,
      email: user.email,
      username: user.login.username,
      date: user.dob.date,
      cell: user.cell,
    }));

export const createUser = (payload) => {
    return function(dispatch) {
        const response = axios.post("http://localhost:5000/create", payload)
        return (response)
    }
}


