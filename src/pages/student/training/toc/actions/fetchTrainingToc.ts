import { studentActionEnums } from '../../../../../common/actionEnums/student/';
import { studentAPI } from '../../../../../rest-api/student/studentApi';

export const fetchTrainingTOCStarted = (trainingId: number) => {
  return (dispatch) => {
    return studentAPI.getTOCByTraining(trainingId).then((trainingTOC) => {
      dispatch(fetchTrainingTOCCompleted(trainingTOC));
    });
  };
};

export const fetchTrainingTOCCompleted = (trainingTOC = '') => ({
  type: studentActionEnums.FETCH_TRAINING_TOC_COMPLETED,
  payload: trainingTOC,
});
