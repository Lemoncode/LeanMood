import { connect } from 'react-redux';
import { DeliveryPanelComponent } from './deliveryPanelComponent';
import { IAppState } from '../../../../../../../reducers/index';
import { setActivePanelAction } from '../../../actions/setActivePanel';

const mapDispatchToProps = (dispatch) => ({
  togglePanel: () => { dispatch(setActivePanelAction('')); },
});

export const DeliveryPanelContainer = connect(null, mapDispatchToProps)(DeliveryPanelComponent);
