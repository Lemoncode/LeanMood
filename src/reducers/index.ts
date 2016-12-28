import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { AdminStudentState, adminStudentReducer } from "./adminStudent";
import {TrainerState, trainerReducer} from './trainer';
import { AdminTrainingState, adminTrainingReducer } from "./adminTraining";

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
