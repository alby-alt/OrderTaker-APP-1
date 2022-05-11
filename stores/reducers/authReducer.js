import { SET_BACKGROUND, RESET_BACKGROUND } from "../types";

const initialState = {
    background: "#FFFAF0"
}

const authReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch(type){
        case SET_BACKGROUND:
            return {
                ...state,
                background: payload
            }      
        case RESET_BACKGROUND:
            return {
              ...initialState
            }
        default:
            return state
    }
}

export default authReducer;