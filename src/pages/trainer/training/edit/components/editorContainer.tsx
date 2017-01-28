import {connect} from 'react-redux';
import {IAppState} from '../../../../../reducers';
import {EditorComponent} from './editor';
import {trainingContentChangedStartAction} from '../actions/trainingContentChanged';
import {initializeEditorAction} from '../actions/initializeEditor';
import {updateTrainingContentStartAction} from '../actions/updateTrainingContent';

const mapStateToProps = (state: IAppState) => ({
  content: state.trainer.training.content,
});

const mapDispatchToProps = (dispatch) => ({
  onContentChange: dispatch(trainingContentChangedStartAction),
  initializeTextAreaElement: dispatch(initializeEditorAction),
  onToolbarButtonClick: dispatch(updateTrainingContentStartAction),
});

export const EditorContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditorComponent);
