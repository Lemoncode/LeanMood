import { AdminTrainigState, adminTrainingReducer } from './adminTraining';
import { combineReducers } from 'redux';
import { AdminStudentState, adminStudentReducer} from './adminStudent'

export interface IAppState {
  adminStudent : AdminStudentState,
  adminTrainig : AdminTrainigState
}

export const reducers = combineReducers<IAppState>({
  adminStudent: adminStudentReducer,
  adminTrainig: adminTrainingReducer
});
