import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { routes } from './routes';
import { store } from './store';
import { history, isHashHistory } from './history';

/**
 * RATIONALE:
 * When working with has-history, react-router does not support links
 * to page elements using its ID (called a hash link or hash identifier).
 * Something like:
 *    /home/landingPage#welcomePanel
 * should scroll to panel with id="welcomePanel" if this link was
 * addresed by the browser. However, reac-router handles and processes
 * these routes under hash-history mode. As a result, does not support
 * adding an extra hash to the route refering to a element ID.
 * There is an open issue for this:
 * https://github.com/ReactTraining/react-router/issues/394
 *
 * IMPLEMENTATION:
 * I have implemented the method below, following a spy pattern, that
 * observes every route and detects #ids (hashed ids) in it.
 * In case a #id is found, a scrollIntoView is pushed into the queue.
 * This implementation is only needed for hash-history. Browser history
 * pass real routes to the browser, who manages #id scrolling properly.
 *   - Hash history URLs: http://www.mywebsite.com/#/clientside/rendered/page#elementid
 *   - Browser history URLs: http://www.mywebsite.com/clientside/rendered/page#elementid
 */
const scrollToHashId = () => {
  // This only applies under hash history mode.
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
        // Optional. Go back to original route.
        // window.location.hash = window.location.hash.replace(`#${id}`, '');
      }
    }, 0);
  }
};

export class AppProvider extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <Router history={history} onUpdate={isHashHistory() ? scrollToHashId : null}>
          {routes}
        </Router>
      </Provider>
    );
  }
}
