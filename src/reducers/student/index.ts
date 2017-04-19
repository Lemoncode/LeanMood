import { combineReducers } from 'redux';
import { trainingReducer as training, TrainingState } from './training/';

export interface StudentState {
  training: TrainingState;
}

export const studentReducer = combineReducers({
  training,
});
