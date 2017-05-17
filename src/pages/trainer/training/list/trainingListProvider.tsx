import { connect } from 'react-redux';
import { IAppState } from '../../../../reducers';
import { SubscriptionManager } from '../../../../common/components';
import { fetchTrainingList } from './actions/trainingActions';

const mapStateToProps = (state: IAppState) => ({
  payload: state.login.userProfile.id,
});

const mapDispatchToProps = (dispatch) => ({
  subscribe: (userId) => dispatch(fetchTrainingList(userId)),
});

export const TrainingListProvider = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubscriptionManager);
