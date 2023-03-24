import { GET_USERS,  GET_DOCTORS, ADD_USER, ACTIVE_USER } from "./action-types"


const initialState = {
    pacientes : [],
    doctores:[],
    searched:'',
    userDetails: {},
    activeUser:[]
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_USERS:
         return {
                ...state,
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
               
        default:
            return {...state}
    
        }
}

export default reducer;