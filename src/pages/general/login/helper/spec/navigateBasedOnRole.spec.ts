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

  it('should navigate to role userProfile', () => {
    // Arrange
    let hashHistoryPushStub = sinon.stub(hashHistory.push('/students'));
    // Act
    // hashHistoryPushStub.returns({
    //   then: callback => {
    //     callback('/students');
    //   }
    // });
    
    // Assert
    expect(hashHistoryPushStub.called).to.be.true;
  });
})