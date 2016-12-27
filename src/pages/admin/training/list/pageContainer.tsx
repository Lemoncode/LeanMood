import { connect } from 'react-redux';
import { ListTrainingPage } from './page'
import { IAppState } from '../../../../reducers'
import { summaryTrainingListRequestStarted } from './actions/summaryTrainingListRequest'

const mapStateToProps = (state : IAppState) => ({
    trainingList : state.adminTraining.trainingSummaryList
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrainings : () => dispatch(summaryTrainingListRequestStarted())
});

export const ListTrainingPageContainer = connect(
        mapStateToProps,
        mapDispatchToProps
)(ListTrainingPage);
