import { connect } from 'react-redux';
import { DeliveryPanelComponent } from './deliveryPanelComponent';
import { IAppState } from '../../../../../../../reducers/index';
import { setActivePanelAction } from '../../../actions/setActivePanel';
import { insertMarkdownDelivey } from '../../../actions/insertMarkdownDelivey';
import {IMarkdownEntry} from '../../../../../../../model/trainer/markdownEntry';
import {markdownEntryConstants} from '../../markdownEntryConstants';

const mapDispatchToProps = (dispatch) => ({
  togglePanel: () => { dispatch(setActivePanelAction('')); },
  insertMarkdownEntry: (markdownEntry: IMarkdownEntry) => { dispatch(insertMarkdownDelivey({
    mdCaret: markdownEntryConstants.link.mdCaret,
    caretCursorPosition: markdownEntryConstants.link.cursorPosition,
  })); },
});

export const DeliveryPanelContainer = connect(null, mapDispatchToProps)(DeliveryPanelComponent);
