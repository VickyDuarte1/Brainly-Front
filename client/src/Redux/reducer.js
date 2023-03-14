import { GET_USERS, SEARCH_USER } from "./action-types"


const initialState = {
    users : [],
    searched:''

}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                users: action.payload

            }
            case SEARCH_USER:
                return {
                  ...state,
                  searched: action.payload
                };
        default:
            return {...state}
    
        }
}

export default reducer;