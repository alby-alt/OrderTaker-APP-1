import { combineReducers } from "redux";

import tabReducer from "./tab/tabReducer";
import authReducer from './reducers/authReducer';
import dataReducer from './reducers/dataReducer';

export default combineReducers({
    tabReducer,
    auth: authReducer,
    data: dataReducer
})