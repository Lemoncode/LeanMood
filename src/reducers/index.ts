import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import { adminStudentReducer, AdminStudentState } from './adminStudent';
import { adminTrainingReducer, AdminTrainingState } from './adminTraining';
import { LoginState, loginReducer } from './login';

export interface IAppState {
  adminStudent: AdminStudentState;
  login: LoginState;
  adminTraining: AdminTrainingState;
}

export const reducers = combineReducers<IAppState>({
  adminStudent: adminStudentReducer,
  login: loginReducer,
  adminTraining: adminTrainingReducer,
  routing: routerReducer,
});
