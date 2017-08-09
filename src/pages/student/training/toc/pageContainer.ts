import { connect } from 'react-redux';
import { fetchTrainingTOCStarted } from './actions/fetchTrainingToc';
import { IAppState } from '../../../../reducers';
import { TrainingTOCPage } from './page';

const mapStateToProps = (state: IAppState, ownProps) => ({
  trainingId: ownProps.params.trainingId,
  trainingTOC: state.student.training.toc,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrainingTOC: (trainingId: string) => {
    dispatch(fetchTrainingTOCStarted(trainingId));
  },
});

export const TrainingTOCPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainingTOCPage);
