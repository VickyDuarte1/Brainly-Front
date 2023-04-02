import { GET_USERS,  GET_DOCTORS, ADD_USER, ACTIVE_USER,GET_COMMENTS,  CREATE_POST } from "./action-types"


const initialState = {
    pacientes : [],
    doctores:[],
    searched:'',
    userDetails: {},
    activeUser:[],
    comments:[]
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
            case GET_COMMENTS:
                return {
                    ...state,
                    comments: action.payload
                  };

                case CREATE_POST:
                    return {
                      ...state,
                      comments: {
                        ...state.comments,
                        comentarios: [...state.comments.comentarios, action.payload]
                      }
                    };

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