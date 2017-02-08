import {connect} from 'react-redux';
import {IAppState} from '../../../../../reducers';
import {EditorComponent} from './editor';
import {trainingContentChangedAction} from '../actions/trainingContentChanged';
import {updateEditorCursorAction} from '../actions/updateEditorCursor';

const mapStateToProps = (state: IAppState, ownProps) => ({
  content: state.trainer.training.content,
  caret: state.trainer.training.caret,
  offset: state.trainer.training.offset,
  shouldSetEditorFocus: state.trainer.training.shouldSetEditorFocus,
  className: ownProps.className,
});

const mapDispatchToProps = (dispatch) => ({
  onContentChange: (content: string) => dispatch(trainingContentChangedAction(content)),
  updateEditorCursor: (editor: HTMLTextAreaElement, cursorStartPosition: number) =>
    dispatch(updateEditorCursorAction(editor, cursorStartPosition)),
});

export const EditorContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorComponent);
