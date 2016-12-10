import { adminActionEnums } from './../../../../../common/actionEnums/admin';
import { TrainingSummary } from './../../../../../model/trainingSummary';
import { trainingApi } from './../../../../../rest-api/training';

export const summaryTrainingListRequestStarted = () => {
  return function(dispatcher) {
    const promise = trainingApi.getSummaryTrainingList();

    promise.then(
      data => dispatcher(summaryTrainingListRequestCompleted(data))
    );
    return promise;
  };
};

export const summaryTrainingListRequestCompleted = (trainingSummaryList: TrainingSummary[]) => ({
  type: adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED,
  payload: trainingSummaryList
});