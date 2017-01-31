import {connect} from 'react-redux';
import {IAppState} from '../../../../reducers';
import {EditTrainingPage} from './page';
import {fetchTrainingContentStarted} from './actions/fetchTrainingContent';

const mapStateToProps = (state: IAppState, ownProps) => ({
  trainingId: parseInt(ownProps.params.trainingId, 10),
  training: state.trainer.training,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrainingContent: (trainingId: number) => dispatch(fetchTrainingContentStarted(trainingId)),
});

export const EditTrainingContainerPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditTrainingPage);
