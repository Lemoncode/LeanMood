import { adminActionEnums } from '../../../../../common/actionEnums/admin';
import { Training} from '../../../../../model/training';
import { trainingApi } from '../../../../../rest-api';

export const editTrainingRequestStarted = (id: number) => {
  return (dispatcher) => {
    const promise = trainingApi.getTrainingById(id);

    promise.then(
      (data) => dispatcher(editTrainingRequestCompleted(data)),
    );

    return promise;
  };
};

export const editTrainingRequestCompleted = (editTraining: Training) => ({
    payload: editTraining,
    type: adminActionEnums.GET_TRAINING_REQUEST_COMPLETED,
});
