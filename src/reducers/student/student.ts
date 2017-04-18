import { studentActionEnums } from '../../common/actionEnums/student/';

export class StudentState {
  public trainingTOC: string;

  constructor() {
    this.trainingTOC = '';
  }
}

export const studentReducer = (state = new StudentState(), action) => {
  switch (action.type) {
    case studentActionEnums.FETCH_TRAINING_TOC_COMPLETED:
      return handleFetchTrainingTOCCompleted(state, action.payload);
    default:
      return state;
  }
};

const handleFetchTrainingTOCCompleted = (state: StudentState, content: string): StudentState => ({
  ...state,
  trainingTOC: content,
});
