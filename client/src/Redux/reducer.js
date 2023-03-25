<<<<<<< HEAD
import { GET_USERS } from "./action-types"


const initialState = {
    users : []

=======
import { GET_USERS,  GET_DOCTORS, ADD_USER, ACTIVE_USER } from "./action-types"


const initialState = {
    pacientes : [],
    doctores:[],
    searched:'',
    userDetails: {},
    activeUser:[]
>>>>>>> 231ab867989f39de916893ad4dcdd6bba44f9338
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_USERS:
         return {
                ...state,
<<<<<<< HEAD
                users: action.payload

            }
=======
                pacientes: action.payload.pacientes
              }

        case ADD_USER:
            const { tipo_usuario } = action.payload;

            const updatedState = { ...state };

            updatedState[tipo_usuario] = [...updatedState[tipo_usuario], action.payload];
            return updatedState;
            
        case GET_DOCTORS:
            return{
                ...state,
                doctores:action.payload.doctores
            }

        case ACTIVE_USER:
            return{
                ...state,
                activeUser:action.payload
            }
               
>>>>>>> 231ab867989f39de916893ad4dcdd6bba44f9338
        default:
            return {...state}
    }
}

export default reducer;