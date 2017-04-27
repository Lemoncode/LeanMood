import { connect } from 'react-redux';
import { IAppState } from '../../../../reducers';
import { fetchTrainingList } from './actions/trainingActions';
import { TrainingListPage } from './page';

const mapStateToProps = (state: IAppState) => ({
  trainingList: state.trainer.training.list,
  trainerId: state.login.userProfile.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrainingList: (trainerId) => dispatch(fetchTrainingList(trainerId)),
});

export const TrainingListPageContainer = connect(mapStateToProps, mapDispatchToProps)(TrainingListPage);
