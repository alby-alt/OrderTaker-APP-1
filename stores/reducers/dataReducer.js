import { SET_CANDIDATES, CLEAR_CANDIDATES } from "../types";

const initialState = {
    candidates: []
}

const authReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch(type){
        case SET_CANDIDATES:
            return {
                ...state,
                candidates: payload
            }    
            case CLEAR_CANDIDATES:
                return {
                    ...initialState
                }         
        default:
            return state
    }
}

export default authReducer;