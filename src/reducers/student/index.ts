import {combineReducers} from 'redux';
import {StudentTrainingState, studentTrainingReducer} from './training';

export interface IStudentState {
  training: StudentTrainingState;
  studentId: number;
}

export const studentReducer = combineReducers<IStudentState>({
  training: studentTrainingReducer,
});
