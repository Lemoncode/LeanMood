import {connect} from 'react-redux';
import {ToolbarComponent} from './toolbar';
import {IAppState} from '../../../../../../reducers/';
import {IToolbarCommand} from './toolbarCommand';
import {selectToolbarCommandAction} from '../../actions/selectToolbarCommand';

const mapStateToProps = (state: IAppState) => ({
});

const mapDispatchToProps = (dispatch) => ({
  selectToolbarCommand: (toolbarCommand: IToolbarCommand) => dispatch(selectToolbarCommandAction(toolbarCommand)),
});

export const ToolbarContainerComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToolbarComponent);
