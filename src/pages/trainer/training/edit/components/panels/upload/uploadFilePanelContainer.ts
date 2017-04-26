import { connect } from 'react-redux';
import { UploadFilePanelComponent } from './uploadFilePanelComponent';
import { setActivePanelAction } from '../../../actions/setActivePanel';

const mapDispatchToProps = (dispatch) => ({
  togglePanel: () => { dispatch(setActivePanelAction('')); },
});

export const UploadFilePanelContainer = connect(null, mapDispatchToProps)(UploadFilePanelComponent);
