import { TrainingSummary } from './../../../../../model/trainingSummary';
import { trainingApi } from './../../../../../rest-api/training';
import { trainerActionEnums } from '../../../../../common/actionEnums/trainer/index';

export const fetchTrainingList = (trainerId: number) => {
  return (dispatcher) => {
    const promise = trainingApi.getTrainingListByTrainer(trainerId);

    promise.then(
      (data) => dispatcher(fetchTrainingListSucceeded(data)),
    );
    return promise;
  };
};

const fetchTrainingListSucceeded = (trainingSummaryList: TrainingSummary[]) => ({
  payload: trainingSummaryList,
  type: trainerActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED,
});
