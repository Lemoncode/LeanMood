import * as React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { IAppState } from '../../../../../reducers/index';
import { TrainingState } from '../../../../../reducers/trainer/training';
import { LoginState } from '../../../../../reducers/login';
import * as actions from '../actions/trainingActions';
import { TrainingSummary } from '../../../../../model/trainingSummary';
import { TrainingListProvider } from '../trainingListProvider';
import { SubscriptionManager } from '../../../../../common/components';

const createStore = configureStore<IAppState>();

describe('Trainer Module: TrainingListProvider', () => {
  it('should connect a serverRequestManager', sinon.test(function () {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const store: any = createStore({
      adminStudent: null,
      adminTraining: null,
      login: new LoginState(),
      student: null,
      trainer: { training: new TrainingState() },
    });
    const fetchTrainingList = sinon.stub(actions, 'fetchTrainingList').returns({
      type: 'DUMMY_ACTION',
    });

    // Act
    const container = mount(
      <Provider store={store}>
        <TrainingListProvider />
      </Provider>,
    );

    // Assert
    expect(container.find(SubscriptionManager)).to.have.lengthOf(1);
  }));
});
