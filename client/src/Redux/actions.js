import { GET_USERS, GET_DOCTORS } from "./action-types";

import usersData from '../users.json';
import doctorsData from '../doctors.json';

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
};

export const getDoctors = () =>{
  return function(dispatch){
    const doctors= doctorsData.map((doctor)=>({
      id:doctor.id,
      username:doctor.username,
      name: doctor.name,
      email: doctor.email,
      address: doctor.address.city,
      street:doctor.address.street,
      suite: doctor.address.suite,
      phone: doctor.phone,
      speciality:doctor.speciality,
      registration: doctor.registration 
    }));
    dispatch({type: GET_DOCTORS, payload: doctors})
  }
}

// export const getUserDetails = (id) => {
//   return function (dispatch, getState) {
//     const { users } = getState().GET_USER_DETAILS;
//     const userDetails = users.find((user) => user.id === parseInt(id));
//     dispatch({ type: GET_USER_DETAILS, payload: userDetails });
//   };
// };