import { expect } from 'chai';
import {} from 'mocha';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as router from 'react-router';
import { hashHistory } from 'react-router';

import { navigationHelper } from '../navigateBasedOnRole';

const middlewares = [ ReduxThunk ];
const mockStore = configureStore(middlewares);

describe('navigateBasedOnRole', () => {
  it('should be defined', () => {
    // Arrange
    // Act
    // Assert
    expect(navigationHelper).not.to.be.undefined;
  });

  it('should navigate to role userProfile', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    let hashHistoryStub = sinon.stub(hashHistory, 'push', () => {});

    navigationHelper.navigateToHomeBasedOnRole('/admin');

    // Assert
    expect(hashHistoryStub.called).to.be.true;
  }).bind(this));
});
