import { GET_USERS, CREATE_USER, GET_DOCTORS, ADD_USER, ADD_DOCTOR } from "./action-types"


const initialState = {
    pacientes : [],
    doctores:[],
    searched:'',
    userDetails: {}
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_USERS:
         return {
                ...state,
                pacientes: action.payload.pacientes
              }
        case CREATE_USER:
            return {
                ...state
            }

            
        case GET_DOCTORS:
            return{
                ...state,
                doctores:action.payload.doctores
            }


        case ADD_DOCTOR:
            return{
                ...state,
                doctors: [...state.doctores, action.payload]
              
            }
            case ADD_USER:
            const { tipo_usuario } = action.payload;

            const updatedState = { ...state };

            updatedState[tipo_usuario] = [...updatedState[tipo_usuario], action.payload];
            return updatedState;
            
        default:
            return {...state}
    
        }
}

export default reducer;