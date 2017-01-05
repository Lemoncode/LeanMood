import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import {TrainerState, trainerReducer} from './trainer';
import { adminStudentReducer, AdminStudentState } from "./adminStudent";
import { adminTrainingReducer, AdminTrainingState } from "./adminTraining";

export interface IAppState {
  adminStudent: AdminStudentState;
  adminTraining: AdminTrainingState;
  trainer: TrainerState;
}

export const reducers = combineReducers<IAppState>({
  adminStudent: adminStudentReducer,
  adminTraining: adminTrainingReducer,
  trainer: trainerReducer,
  routing: routerReducer
});
