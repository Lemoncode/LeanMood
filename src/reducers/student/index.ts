import { combineReducers } from 'redux';
import {StudentTrainingState, studentTrainingReducer} from './training';

export interface StudentState {
  training: StudentTrainingState;
  studentId: number;
}

export const studentReducer = combineReducers<StudentState>({
  training: studentTrainingReducer,
});
