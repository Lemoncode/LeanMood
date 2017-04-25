import { studentActionEnums } from './../../../../common/actionEnums/student';
import { TrainingSummary } from './../../../../model/trainingSummary';

export const trainingListReducer = (state: TrainingSummary[] = [], action) => {
  switch (action.type) {
    case studentActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED:
      return handleGetSummaryTrainingRequestCompleted(state, action.payload);
    default:
      return state;
  }
};

const handleGetSummaryTrainingRequestCompleted = (state: TrainingSummary[], payload: TrainingSummary[]) => {
  return [
    ...payload,
  ];
};
