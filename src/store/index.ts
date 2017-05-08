import { reducers } from '../reducers';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(reduxThunk),
    /* tslint:disable-next-line */
    window["devToolsExtension"] ? window["devToolsExtension"]() : (f) => f,
  ),
);
