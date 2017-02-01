import {connect} from 'react-redux';
import {IAppState} from '../../../../../reducers';
import {EditorComponent} from './editor';
import {trainingContentChangedAction} from '../actions/trainingContentChanged';
import {initializeEditorAction} from '../actions/initializeEditor';

const mapStateToProps = (state: IAppState) => ({
  content: state.trainer.training.content,
});

const mapDispatchToProps = (dispatch) => ({
  onContentChange: (content: string) => dispatch(trainingContentChangedAction(content)),
  initializeTextAreaElement: (textArea: HTMLTextAreaElement) => dispatch(initializeEditorAction(textArea)),
});

export const EditorContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorComponent);
