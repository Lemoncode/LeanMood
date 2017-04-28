import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { TrainerState, trainerReducer } from './trainer';
import { StudentState, studentReducer} from './student/';
import { adminStudentReducer, AdminStudentState } from './adminStudent';
import { adminTrainingReducer, AdminTrainingState } from './adminTraining';
import { LoginState, loginReducer } from './login';

export interface IAppState {
  adminStudent: AdminStudentState;
  login: LoginState;
  adminTraining: AdminTrainingState;
  trainer: TrainerState;
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
