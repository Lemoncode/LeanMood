import { combineReducers } from 'redux';
import { AdminStudentState, adminStudentReducer} from './adminStudent'

export interface IAppState {
  adminStudent : AdminStudentState
}

export const reducers = combineReducers<IAppState>({
  adminStudent: adminStudentReducer
});
