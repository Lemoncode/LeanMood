import {combineReducers} from 'redux';
import {TrainingState, trainingReducer} from './training';

export interface ITrainerState {
  training: TrainingState;
}

export const trainerReducer = combineReducers<ITrainerState>({
  training: trainingReducer,
});
