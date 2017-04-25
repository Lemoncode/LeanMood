import { combineReducers } from 'redux';
import { trainingTOCReducer as toc } from './toc/trainingTOC';
import { TrainingTOC } from '../../../model/student/trainingToc';
import { TrainingSummary } from '../../../model/trainingSummary';
import { trainingListReducer as list } from './list/trainingList';

export interface TrainingState {
  list: TrainingSummary[];
  toc: TrainingTOC;
}

export const trainingReducer = combineReducers({
  toc,
  list,
});
