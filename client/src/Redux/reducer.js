import { GET_USERS, GET_DOCTORS} from "./action-types"


const initialState = {
    users : [],
    doctors:[],
    searched:'',
    userDetails: {}
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }

        case GET_DOCTORS:
            return{
                ...state,
                doctors:action.payload
            }

        default:
            return {...state}
    
        }
}

export default reducer;