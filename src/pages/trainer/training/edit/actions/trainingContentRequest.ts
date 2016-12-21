import { Action, ActionCreator } from 'redux';
import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';

export interface TrainingContentRequestCompleted extends Action {
  payload: string;
}

export const trainingContentRequestCompleted: ActionCreator<TrainingContentRequestCompleted> = (content: string) => ({
  type: trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED,
  payload: content
})
