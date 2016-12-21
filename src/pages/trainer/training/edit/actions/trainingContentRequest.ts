import { Action, ActionCreator } from 'redux';
import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';

export interface TrainingContentRequestCompleted extends Action {

}

export const trainingConentRequestCompleted: ActionCreator<TrainingContentRequestCompleted> =
(content: string) => ({
  type: trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED
})
