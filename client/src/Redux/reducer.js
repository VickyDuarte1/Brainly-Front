import { GET_USERS, CREATE_USER } from "./action-types"


const initialState = {
    users : []

}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_USERS:
            return {
                ...state,
                users: action.payload

            }
        case CREATE_USER:
            return {
                ...state
            }
        default:
            return {...state}
    }
}

export default reducer;