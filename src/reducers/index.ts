import { LoginState, loginReducer } from './login';
import { combineReducers } from 'redux';
import { AdminStudentState, adminStudentReducer} from './adminStudent'

export interface IAppState {
  adminStudent : AdminStudentState,
  login: LoginState;
}

export const reducers = combineReducers<IAppState>({
  adminStudent: adminStudentReducer,
  login: loginReducer
});
