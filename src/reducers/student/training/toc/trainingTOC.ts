import { studentActionEnums } from '../../../../common/actionEnums/student/';
import { TrainingTOC } from '../../../../model/student/trainingToc';

export const trainingTOCReducer = (state = new TrainingTOC(), action) => {
  switch (action.type) {
    case studentActionEnums.FETCH_TRAINING_TOC_COMPLETED:
      return handleFetchTrainingTOCCompleted(state, action.payload);
    default:
      return state;
  }
};

const handleFetchTrainingTOCCompleted = (state: TrainingTOC, trainingTOC: TrainingTOC): TrainingTOC => ({
  ...state,
  ...trainingTOC,
});
