import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, hashHistory } from 'react-router';
import { store } from './store';

// Change here history type: hash vs browser. This way we can
// keep track of the selected type of history programmatically.
const selectedHistoryType = hashHistory;

export const isHashHistory = () => selectedHistoryType === hashHistory;
export const isBrownserHistory = () => selectedHistoryType === browserHistory;
export const history = syncHistoryWithStore(selectedHistoryType, store);
