import { LoginState, loginReducer } from "./login";
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { AdminStudentState, adminStudentReducer} from "./adminStudent";
import { AdminTrainingState, adminTrainingReducer } from "./adminTraining";

export interface IAppState {
  adminStudent : AdminStudentState,
  login: LoginState,
  adminTraining : AdminTrainingState
}

export const reducers = combineReducers<IAppState>({
  adminStudent: adminStudentReducer,
  login: loginReducer,
  adminTraining: adminTrainingReducer,
  routing: routerReducer
});
