import {connect} from 'react-redux';
import {ToolbarComponent} from './toolbar';
import {IAppState} from '../../../../../../reducers/';
import {selectCaretToInsertAction} from '../../actions/selectCaretToInsert';

const mapStateToProps = (state: IAppState) => ({
});

const mapDispatchToProps = (dispatch) => ({
  selectCaretToInsert: (caret: string, offset: number) => dispatch(selectCaretToInsertAction(caret, offset)),
});

export const ToolbarContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolbarComponent);
