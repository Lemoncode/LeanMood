import { connect } from 'react-redux';
import { fetchTrainingTOCStarted } from './actions/fetchTrainingToc';
import { IAppState } from '../../../../reducers';
import { TrainingTOCPage } from './page';

const mapStateToProps = (state: IAppState, ownProps) => ({
  trainingId: Number(ownProps.params.trainingId) || 0,
  trainingTOC: state.student.training.toc,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrainingTOC: (trainingId: number) => {
    dispatch(fetchTrainingTOCStarted(trainingId));
  },
});

export const TrainingTOCPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainingTOCPage);
