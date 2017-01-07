import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { adminStudentReducer, AdminStudentState } from './adminStudent';
import { adminTrainingReducer, AdminTrainingState } from './adminTraining';

export interface IAppState {
  adminStudent: AdminStudentState;
  adminTraining: AdminTrainingState;
}

export const reducers = combineReducers<IAppState>({
  adminStudent: adminStudentReducer,
  adminTraining: adminTrainingReducer,
  routing: routerReducer,
});
