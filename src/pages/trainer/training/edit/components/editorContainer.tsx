import {connect} from 'react-redux';
import {IAppState} from '../../../../../reducers';
import {EditorComponent} from './editor';
import {trainingContentChangedAction} from '../actions/trainingContentChanged';
import {initializeEditorAction} from '../actions/initializeEditor';
import {updateEditorCursorAction} from '../actions/updateEditorCursor';

const mapStateToProps = (state: IAppState) => ({
  content: state.trainer.training.content,
  cursorStartPosition: state.trainer.training.cursorStartPosition,
  shouldSetEditorFocus: state.trainer.training.shouldSetEditorFocus,
});

const mapDispatchToProps = (dispatch) => ({
  onContentChange: (content: string) => dispatch(trainingContentChangedAction(content)),
  initializeEditor: (editor: HTMLTextAreaElement) => dispatch(initializeEditorAction(editor)),
  updateEditorCursor: (editor: HTMLTextAreaElement, cursorStartPosition: number) =>
    dispatch(updateEditorCursorAction(editor, cursorStartPosition)),
});

export const EditorContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorComponent);
