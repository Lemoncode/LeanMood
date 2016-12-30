import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { AdminStudentState, adminStudentReducer } from "./adminStudent";
import { AdminTrainingState, adminTrainingReducer } from "./adminTraining";

export interface IAppState {
  adminStudent: AdminStudentState;
  adminTraining: AdminTrainingState;
}

export const reducers = combineReducers<IAppState>({
  adminStudent: adminStudentReducer,
  adminTraining: adminTrainingReducer,
  routing: routerReducer
});
