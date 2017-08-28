import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { routes } from './routes';
import { store } from './store';
import { history } from './history';

/**
 * RATIONALE:
 * React-Router does not support links to page elements using its ID.
 * This is called a hash link. Something like:
 *    /home/landingPage#welcomePanel
 * would scroll to panel with id="#welcomePanel" in a native app. Not
 * anymore whithin react-router system which keeps a history of valid
 * routes but does not detect elements ID.
 * There is an open issue for this:
 * https://github.com/ReactTraining/react-router/issues/394
 *
 * IMPLEMENTATION:
 * I have implemented the method below, following a spy pattern, that
 * observes every route and detects hashed ids in it. In case a hashed
 * id is found, a scrollIntoView is pushed into the queue.
 * It supports URLs from hash history or browser history.
 *   - Hash history URLs: http://www.mywebsite.com/#/clientside/rendered/page#elementid
 *   - Browser history URLs: http://www.mywebsite.com/clientside/rendered/page#elementid
 */
function scrollToHashId(isHashHistory: boolean = true) {
  // Window.location.hash returns the predicate of the first # found in the URL.
  if (window.location.hash !== '') {
    const hashPredicate = window.location.hash.slice(1);
    const id = hashPredicate.includes('#') ?
      hashPredicate.slice(hashPredicate.lastIndexOf('#') + 1) : hashPredicate;

    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }, 0);
  }
}

export class AppProvider extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <Router history={history} onUpdate={scrollToHashId}>
          {routes}
        </Router>
      </Provider>
    );
  }
}
