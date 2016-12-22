import { combineReducers } from 'redux';
import { AdminStudentState, adminStudentReducer} from './adminStudent';
import {TrainerState, trainerReducer} from './trainer';

export interface IAppState {
  adminStudent : AdminStudentState,
  trainer: TrainerState
}

export const reducers = combineReducers<IAppState>({
  adminStudent: adminStudentReducer,
  trainer: trainerReducer
});
