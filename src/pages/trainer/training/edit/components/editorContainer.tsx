import {connect} from 'react-redux';
import {IAppState} from '../../../../../reducers';
import {EditorComponent} from './editor';
import {trainingContentChangedAction} from '../actions/trainingContentChanged';
import {initializeEditorAction} from '../actions/initializeEditor';
import {updateTrainingContentAction} from '../actions/updateTrainingContent';

const mapStateToProps = (state: IAppState) => ({
  content: state.trainer.training.content,
});

const mapDispatchToProps = (dispatch) => ({
  onContentChange: (content: string) => dispatch(trainingContentChangedAction(content)),
  initializeTextAreaElement: (textArea: HTMLTextAreaElement) => dispatch(initializeEditorAction(textArea)),
  onToolbarButtonClick: (textArea: HTMLTextAreaElement, caret: string, offset: number) =>
    dispatch(updateTrainingContentAction(textArea, caret, offset)),
});

export const EditorContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorComponent);
