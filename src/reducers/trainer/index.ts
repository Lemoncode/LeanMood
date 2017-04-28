import { combineReducers } from 'redux';
import { TrainingState, trainingReducer as training } from './training';

export interface TrainerState {
  training: TrainingState;
}

export const trainerReducer = combineReducers<TrainerState>({
  training,
});
