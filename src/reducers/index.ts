<<<<<<< HEAD
import { combineReducers } from 'redux';
import { AdminStudentState, adminStudentReducer } from './adminStudent'
import { AdminTrainingState, adminTrainingReducer } from './adminTraining';

export interface IAppState {
  adminStudent: AdminStudentState
  adminTraining: AdminTrainingState
=======
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { AdminStudentState, adminStudentReducer } from "./adminStudent";
import { AdminTrainingState, adminTrainingReducer } from "./adminTraining";

export interface IAppState {
  adminStudent: AdminStudentState;
  adminTraining: AdminTrainingState;
>>>>>>> 5541906c0f761bfd48de9d0580e7dcda3a3d4650
}

export const reducers = combineReducers<IAppState>({
  adminStudent: adminStudentReducer,
<<<<<<< HEAD
  adminTraining: adminTrainingReducer
=======
  adminTraining: adminTrainingReducer,
  routing: routerReducer
>>>>>>> 5541906c0f761bfd48de9d0580e7dcda3a3d4650
});
