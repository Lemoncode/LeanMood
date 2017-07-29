import { studentActionEnums } from '../../../../../common/actionEnums/student/';
import { studentAPI } from '../../../../../rest-api/student';
import { TrainingTOC } from '../../../../../model/student/trainingToc';

export const fetchTrainingTOCStarted = (trainingId: number) => {
  return (dispatch) => {
    return studentAPI.getTOCByTraining(trainingId).then((trainingTOC) => {
      if (trainingTOC) {
        dispatch(fetchTrainingTOCCompleted(trainingTOC));
      }
    });
  };
};

export const fetchTrainingTOCCompleted = (trainingTOC: TrainingTOC) => ({
  type: studentActionEnums.FETCH_TRAINING_TOC_COMPLETED,
  payload: trainingTOC,
});
