import {connect} from 'react-redux';
import { ServerRequestManager } from '../../../../common/components';
import { fetchTrainingList } from './actions/trainingActions';

const mapStateToProps = (state) => ({
   payload: null,
});

const mapDispatchToProps = ({
   load: fetchTrainingList ,
});

export const TrainingListProvider = connect(mapStateToProps, mapDispatchToProps)(ServerRequestManager);