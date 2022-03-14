import { combineReducers } from "redux";
import dashboardReducer from "./dashboard";
import scheduleReducer from "./schedule";

const rootReducers = combineReducers({
    dashboardData: dashboardReducer,
    scheduleData: scheduleReducer
})

export default rootReducers;