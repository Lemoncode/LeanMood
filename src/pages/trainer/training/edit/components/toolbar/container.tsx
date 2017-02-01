import {connect} from 'react-redux';
import {ToolbarComponent} from './presentational';
import {IAppState} from '../../../../../../reducers/';
import {updateTrainingContentAction} from '../../actions/updateTrainingContent';

const mapStateToProps = (state: IAppState) => ({
  textArea: state.trainer.training.editor,
});

const mapDispatchToProps = (dispatch) => ({
  updateTextArea: (textArea: HTMLTextAreaElement, caret: string, offset: number) =>
    dispatch(updateTrainingContentAction(textArea, caret, offset)),
});

export const ToolbarContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolbarComponent);
