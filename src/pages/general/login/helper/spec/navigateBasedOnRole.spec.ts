import { expect } from 'chai';
import {} from 'mocha';
// import {} from 'core-js';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as router from 'react-router';
import { hashHistory } from 'react-router';

import { NavigateToHomeBasedOnRole } from '../navigateBasedOnRole';

const middlewares = [ ReduxThunk ];
const mockStore = configureStore(middlewares);

describe('navigateBasedOnRole', () => {  
  it('should be defined', () => {
    // Arrange
    // Act
    // Assert
    expect(NavigateToHomeBasedOnRole).not.to.be.undefined;
  });

  it('should navigate to role userProfile', sinon.test((done) => {
    // Arrange
    let hashHistoryStub = sinon.stub(hashHistory, "push", () => {});
    // Act
    // hashHistoryStub.returns({
    //   then: callback => {
    //     callback();
    //   }
    // });
    
    const store = mockStore([]);
    store.dispatch(hashHistory.push('/students'))
      .then(() => {
          // Assert
          expect(hashHistoryStub.called).to.be.true;
          done();
      });

    // Assert
    // expect(hashHistoryPushStub.called).to.be.true;
  }));
})