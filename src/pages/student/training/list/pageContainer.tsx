import { connect } from 'react-redux';
import { IAppState } from '../../../../reducers';
import { summaryTrainingListRequestStarted } from './actions/summaryTrainingListRequest';
import { TrainingListPage } from './page';

const mapStateToProps = (state: IAppState) => ({
  trainingList : state.student.training.list,
  studentId: state.login.userProfile.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrainings : (studentId) => dispatch(summaryTrainingListRequestStarted(studentId)),
});

export const ListTrainingPageContainer = connect(
        mapStateToProps,
        mapDispatchToProps,
)(TrainingListPage);
