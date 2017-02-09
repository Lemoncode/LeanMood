import * as React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as fetchTrainingContent from '../actions/fetchTrainingContent';
import {EditTrainingContainerPage} from '../pageContainer';

const createStore = configureStore();

describe('EditTrainingContainerPage', () => {
  it('should be defined', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const mockStore: any = createStore({
      trainer: {
        training: {},
      },
    });

    const fetchTrainingContentStub = sinon.stub(fetchTrainingContent,
    'fetchTrainingContentStarted', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <EditTrainingContainerPage params={{ trainingId: ''}} />
      </Provider>,
    );

    // Assert
    expect(container).not.to.be.undefined;
  }).bind(this));

  it('should contain a trainingId property equals 0 when params is not a number', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const mockStore: any = createStore({
      trainer: {
        training: {},
      },
    });

    const fetchTrainingContentStub = sinon.stub(fetchTrainingContent,
    'fetchTrainingContentStarted', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <EditTrainingContainerPage params={{ trainingId: 'A'}} />
      </Provider>,
    );

    // Assert
    const presentational = container.find('EditTrainingPage');
    expect(presentational).not.to.be.undefined;
    expect(presentational.prop('trainingId')).to.equal(0);
  }).bind(this));

  it('should contain a trainingId property equals 2 when params equals 2', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const mockStore: any = createStore({
      trainer: {
        training: {},
      },
    });

    const fetchTrainingContentStub = sinon.stub(fetchTrainingContent,
    'fetchTrainingContentStarted', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <EditTrainingContainerPage params={{ trainingId: '2'}} />
      </Provider>,
    );

    // Assert
    const presentational = container.find('EditTrainingPage');
    expect(presentational).not.to.be.undefined;
    expect(presentational.prop('trainingId')).to.equal(2);
  }).bind(this));

  it('should calls to fetchTrainingContent with expected trainingId', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const mockStore: any = createStore({
      trainer: {
        training: {},
      },
    });

    const fetchTrainingContentStub = sinon.stub(fetchTrainingContent,
    'fetchTrainingContentStarted', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <EditTrainingContainerPage params={{ trainingId: '2'}} />
      </Provider>,
    );

    // Assert
    expect(fetchTrainingContentStub.calledOnce).to.be.true;
    expect(fetchTrainingContentStub.calledWith(2)).to.be.true;
  }).bind(this));
});
