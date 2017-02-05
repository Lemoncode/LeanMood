import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as router from 'react-router';
import { hashHistory } from 'react-router';
import { navigationHelper } from '../index';

const middlewares = [ ReduxThunk ];
const mockStore = configureStore(middlewares);

describe('navigateBasedOnRole', () => {
  it('should be defined', () => {
    // Assert
    expect(navigationHelper).not.to.be.undefined;
  });

  it('should navigate to path', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const hashHistoryStub = sinon.stub(hashHistory, 'push');

    // Act
    navigationHelper.navigateToPath('/testPath');

    // Assert
    expect(hashHistoryStub.called).to.be.true;
    expect(hashHistoryStub.calledWith('/testPath')).to.be.true;
  }).bind(this));
});
