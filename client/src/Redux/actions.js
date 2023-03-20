import { GET_USERS, GET_DOCTORS,ADD_USER, ADD_DOCTOR } from "./action-types";
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
    const  form  = payload; // asumiendo que userType es un campo en tu objeto de payload que indica si el usuario es paciente o médico
    
    // Agregar usuario al array correspondiente en el estado del store
    if (form.role !== 'medico') {
      dispatch({ type: ADD_USER, payload: payload });
    } else if (form.role === 'medico') {
      dispatch({ type: ADD_DOCTOR, payload: payload });
    }
  }
}

