import { GET_USERS, CREATE_USER, GET_DOCTORS } from "./action-types";
import axios from "axios"
import usersData from '../users.json';
import doctorsData from "../doctors.json"

export const getDoctors = () =>{
  return function(dispatch){
    const doctors= doctorsData.map((doctor)=>({
      id:doctor.id,
      name: doctor.name,
      email: doctor.email,
      address: doctor.address.city,
      phone: doctor.phone,
      speciality:doctor.speciality,
      registration: doctor.registration 

    }));
    dispatch({type: GET_DOCTORS, payload: doctors})
  }
}

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

    dispatch({ type: GET_USERS, payload: users });
  };
}



export const createUser = (payload) => {
    return function(dispatch) {
        const response = axios.post("http://localhost:5000/create", payload)
        return (response)
    }
}


