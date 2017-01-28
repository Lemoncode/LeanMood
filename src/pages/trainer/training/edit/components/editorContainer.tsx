import {connect} from 'react-redux';
import {IAppState} from '../../../../../reducers';
import {EditorComponent} from './editor';

const mapStateToProps = (state: IAppState) => ({
  content: state.trainer.training.content,
});

const mapDispatchToProps = (dispatch) => ({
  onContentChange : () => dispatch(),
  initializeTextAreaElement : (textArea: HTMLTextAreaElement) => dispatch(),
  onToolbarButtonClick : (
    textArea: HTMLTextAreaElement, caret: string, offset: number) => dispatch(),
});

export const EditorContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorComponent);
