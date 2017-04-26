import { connect } from 'react-redux';
import { EvaluationPanelComponent } from './evaluationPanelComponent';
import { setActivePanelAction } from '../../../actions/setActivePanel';

const mapDispatchToProps = (dispatch) => ({
  togglePanel: () => { dispatch(setActivePanelAction('')); },
});

export const EvaluationPanelContainer = connect(null, mapDispatchToProps)(EvaluationPanelComponent);
