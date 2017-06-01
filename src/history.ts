import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';
import { store } from './store';

export const history = syncHistoryWithStore(hashHistory, store);
