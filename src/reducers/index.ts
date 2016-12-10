import { combineReducers } from 'redux';
import { AdminStudentState, adminStudentReducer} from './adminStudent'
import { AdminTrainingState, adminTrainingReducer } from './adminTraining';

export interface IAppState {
  adminStudent : AdminStudentState,
  adminTraining : AdminTrainingState
}

export const reducers = combineReducers<IAppState>({
  adminStudent: adminStudentReducer,
  adminTrainig: adminTrainingReducer
});
