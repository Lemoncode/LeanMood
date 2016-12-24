import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { AdminStudentState, adminStudentReducer} from './adminStudent'
import { routerReducer } from 'react-router-redux'

export interface IAppState {
  adminStudent : AdminStudentState
}

export const reducers = combineReducers<IAppState>({
  adminStudent: adminStudentReducer,
  routing: routerReducer
});
