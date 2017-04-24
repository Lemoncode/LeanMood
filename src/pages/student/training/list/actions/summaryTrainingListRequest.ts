import { adminActionEnums } from './../../../../../common/actionEnums/admin';
import { TrainingSummary } from './../../../../../model/trainingSummary';
import { trainingApi } from './../../../../../rest-api/training';

export const summaryTrainingListRequestStarted = (studentId) => {
  return (dispatcher) => {
    const promise = trainingApi.getSummaryTrainingListByStudent(studentId);

    promise.then(
      (data) => dispatcher(summaryTrainingListRequestCompleted(data)),
    );
    return promise;
  };
};

export const summaryTrainingListRequestCompleted = (trainingSummaryList: TrainingSummary[]) => ({
  payload: trainingSummaryList,
  type: adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED,
});
