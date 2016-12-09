import { adminActionEnums } from '../../../../../common/actionEnums/admin'
import { TrainingEntity} from '../../../../../model/training'
import { trainingApi } from '../../../../../rest-api'

export const editTrainingRequestStarted = (id: number) => {
  return function(dispatcher) {
    const promise = trainingApi.getTrainingById(id);

    promise.then(
      data => dispatcher(editTrainingRequestCompleted(data))
    )

    return promise;
  }
}

export const editTrainingRequestCompleted = (editTraining : TrainingEntity) => ({
    type: adminActionEnums.GET_TRAINING_REQUEST_COMPLETED,
    payload: editTraining
});
