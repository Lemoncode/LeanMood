import {connect} from 'react-redux';
import { IAppState } from '../../../../reducers';
import { ServerRequestManager } from '../../../../common/components';
import { fetchTrainingList } from './actions/trainingActions';

const mapStateToProps = (state: IAppState) => ({
   payload: state.login.userProfile.id,
});

const mapDispatchToProps = ({
   command: fetchTrainingList ,
});

export const TrainingListProvider = connect(mapStateToProps, mapDispatchToProps)(ServerRequestManager);
