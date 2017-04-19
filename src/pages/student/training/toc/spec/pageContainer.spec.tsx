import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as studentTrainingActions from '../actions/fetchTrainingToc';
import { TrainingTOCPage } from '../page';
import { TrainingTOCPageContainer } from '../pageContainer';
import { IAppState } from '../../../../../reducers/';
import { TrainingTOC } from '../../../../../model/student/trainingToc';

const createStore = configureStore<IAppState>();

let store;
describe('TrainingTOCPageContainer', () => {
  beforeEach(() => {
    store = createStore({
      adminStudent: null,
      adminTraining: null,
      login: null,
      student: {
        training: {
          toc: new TrainingTOC(),
        },
      },
      trainer: null,
    });
  });

  it('should render a TrainingTOCPageContainer that connects a TrainingTOCPage', sinon.test(function () {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const fetchTrainingTOCStartedStub = sinon.stub(
      studentTrainingActions,
      'fetchTrainingTOCStarted',
    );
    fetchTrainingTOCStartedStub.returns({ type: 'ACTION' });

    // Act
    const wrapper = mount(
      <Provider store={store}>
        <TrainingTOCPageContainer params={{ trainingId: 123 }} />
      </Provider>,
    );

    wrapper.setProps({
      params: { trainingId: 123 },
    }).update();

    const pageContainer = wrapper.find(TrainingTOCPageContainer);

    // Assert
    expect(pageContainer).to.have.lengthOf(1);
    expect(pageContainer.find(TrainingTOCPage)).to.have.lengthOf(1);
  }));

  it('should inject the "trainingId" as property from params', sinon.test(function () {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const trainingId = 123;
    const fetchTrainingTOCStartedStub = sinon.stub(
      studentTrainingActions,
      'fetchTrainingTOCStarted',
    );
    fetchTrainingTOCStartedStub.returns({ type: 'ACTION' });

    // Act
    const wrapper = mount(
      <Provider store={store}>
        <TrainingTOCPageContainer params={{ trainingId }} />
      </Provider>,
    );
    const studentListPage = wrapper.find(TrainingTOCPageContainer).find(TrainingTOCPage);

    // Assert
    expect(studentListPage.prop('params')).to.have.property('trainingId').that.is.equals(trainingId);
  }));

  it('should inject a fetchTrainingTOC function that dispatches a fetchTrainingTOCStarted action',
    sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const trainingId = 123;
      const fetchTrainingTOCStartedStub = sinon.stub(
        studentTrainingActions,
        'fetchTrainingTOCStarted',
      );
      fetchTrainingTOCStartedStub.returns({ type: 'ACTION' });

      // Act
      const wrapper = mount(
        <Provider store={store}>
          <TrainingTOCPageContainer params={{ trainingId }} />
        </Provider>,
      );
      const studentListPage = wrapper.find(TrainingTOCPageContainer).find(TrainingTOCPage);

      // Assert
      expect(studentListPage.prop('fetchTrainingTOC')).to.be.a('function');
      // Trigger the mock
      studentListPage.prop('fetchTrainingTOC')(trainingId);
      expect(fetchTrainingTOCStartedStub.calledWithExactly(trainingId)).to.be.true;
    }));
});
