import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { ITrainerState, trainerReducer } from './trainer';
import { adminStudentReducer, AdminStudentState } from './adminStudent';
import { adminTrainingReducer, AdminTrainingState } from './adminTraining';
import { LoginState, loginReducer } from './login';
import { studentReducer, StudentState } from './student/';

export interface IAppState {
  adminStudent: AdminStudentState;
  login: LoginState;
  adminTraining: AdminTrainingState;
  trainer: ITrainerState;
  student: StudentState;
}

export const reducers = combineReducers<IAppState>({
  adminStudent: adminStudentReducer,
  login: loginReducer,
  adminTraining: adminTrainingReducer,
  trainer: trainerReducer,
  student: studentReducer,
  routing: routerReducer,
});
