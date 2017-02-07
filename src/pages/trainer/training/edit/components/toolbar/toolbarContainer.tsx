import {connect} from 'react-redux';
import {ToolbarComponent} from './toolbar';
import {IAppState} from '../../../../../../reducers/';
import {updateEditorAction} from '../../actions/updateEditor';

const mapStateToProps = (state: IAppState) => ({
  editor: state.trainer.training.editor,
});

const mapDispatchToProps = (dispatch) => ({
  updateEditor: (editor: HTMLTextAreaElement, caret: string, offset: number) =>
    dispatch(updateEditorAction(editor, caret, offset)),
});

export const ToolbarContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolbarComponent);
