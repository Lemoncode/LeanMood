import {trainerActionEnums} from '../../../../../common/actionEnums/trainer';

export const trainingContentChangedAction = (content: string) => ({
  type: trainerActionEnums.TRAINING_CONTENT_CHANGED,
  payload: content,
});
