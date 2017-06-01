import * as React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { TrainingListPageContainer } from '../pageContainer';
import { TrainingListPage } from '../page';
import { IAppState } from '../../../../../reducers/index';
import { TrainingState } from '../../../../../reducers/trainer/training';
import { LoginState } from '../../../../../reducers/login';
import * as actions from '../actions/trainingActions';
import { TrainingSummary } from '../../../../../model/trainingSummary';

const createStore = configureStore<IAppState>();

describe('Trainer Module: TrainingListPageContainer', () => {
  it('should connect a TrainingListPage', sinon.test(function() {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const store: any = createStore({
      adminStudent: null,
      adminTraining: null,
      login: new LoginState(),
      student: null,
      trainer: { training: new TrainingState() },
    });
    // Provider Subscription
    const fetchTrainingList = sinon.stub(actions, 'fetchTrainingList').returns({
      type: 'DUMMY_ACTION',
    });

    // Act
    const container = mount(
      <Provider store={store}>
        <TrainingListPageContainer />
      </Provider>,
    );

    // Assert
    expect(container.find(TrainingListPage)).to.have.lengthOf(1);
  }));

  it('should inject to TrainingListPage a trainingList prop from state', sinon.test(function() {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const list: TrainingSummary[] = [
      { id: 123, end: new Date(), isActive: false, name: 'Training 1', start: new Date() },
      { id: 124, end: new Date(), isActive: false, name: 'Training 2', start: new Date() },
      { id: 125, end: new Date(), isActive: false, name: 'Training 3', start: new Date() },
    ];
    const training = new TrainingState();
    training.list = list;
    const store: any = createStore({
      adminStudent: null,
      adminTraining: null,
      login: new LoginState(),
      student: null,
      trainer: { training },
    });
    const fetchTrainingList = sinon.stub(actions, 'fetchTrainingList').returns({
      type: 'DUMMY_ACTION',
    });

    // Act
    const container = mount(
      <Provider store={store}>
        <TrainingListPageContainer />
      </Provider>,
    );
    const trainingListPage = container.find(TrainingListPage);

    // Assert
    expect(trainingListPage.prop('trainingList')).to.be.an('array').that.is.deep.equals(training.list);
  }));

  it('should inject to TrainingListPage a trainerId property from state', sinon.test(function() {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const trainerId = 123;
    const login = new LoginState();
    login.userProfile = { avatar: '', email: '', fullname: '', id: trainerId, role: 'none' };
    const store: any = createStore({
      adminStudent: null,
      adminTraining: null,
      login,
      student: null,
      trainer: { training: new TrainingState() },
    });
    const fetchTrainingList = sinon.stub(actions, 'fetchTrainingList').returns({
      type: 'DUMMY_ACTION',
    });

    // Act
    const container = mount(
      <Provider store={store}>
        <TrainingListPageContainer />
      </Provider>,
    );
    const trainingListPage = container.find(TrainingListPage);

    // Assert
    expect(trainingListPage.prop('trainerId')).to.be.equals(trainerId);
  }));
});
