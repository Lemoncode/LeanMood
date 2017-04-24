import { combineReducers } from 'redux';
import { trainingTOCReducer as toc } from './toc/trainingTOC';
import { TrainingTOC } from '../../../model/student/trainingToc';

export interface TrainingState {
  toc: TrainingTOC;
}

export const trainingReducer = combineReducers({
  toc,
});
