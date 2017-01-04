import { connect } from "react-redux";
import { IAppState } from "../../../../reducers";
import { summaryTrainingListRequestStarted } from "./actions/summaryTrainingListRequest";
import { ListTrainingPage } from "./page";

const mapStateToProps = (state: IAppState) => ({
  trainingList : state.adminTraining.trainingSummaryList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrainings : () => dispatch(summaryTrainingListRequestStarted()),
});

export const ListTrainingPageContainer = connect(
        mapStateToProps,
        mapDispatchToProps,
)(ListTrainingPage);
