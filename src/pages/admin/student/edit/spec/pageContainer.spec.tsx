import * as React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import * as getStudent from '../actions/summaryStudentRequest';
import { EditStudentPageContainer } from '../pageContainer';

const createStore = configureStore();

describe('EditStudentPageContainer', () => {
  it('should be defined', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const mockStore: any = createStore({
      adminStudent: {
        editingStudentSummary: {},
      },
    });

    const getStudentStub = sinon.stub(getStudent,
    'summaryStudentByIdRequestStarted', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <EditStudentPageContainer params={{ id: ''}} />
      </Provider>,
    );

    // Assert
    expect(container).not.to.be.undefined;
  }).bind(this));

  it('should contain a studentId property equals to the conversion to string when params is not a string', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const mockStore: any = createStore({
      adminStudent: {
        editingStudentSummary: {},
      },
    });

    const getStudentStub = sinon.stub(getStudent,
    'summaryStudentByIdRequestStarted', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <EditStudentPageContainer params={{ id: 2}} />
      </Provider>,
    );

    // Assert
    const presentational = container.find('EditStudentPage');
    expect(presentational).not.to.be.undefined;
    expect(presentational.prop('studentId')).to.equal('2');
  }).bind(this));

  it('should contain a studentId property equals 2 when params equals 2', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const mockStore: any = createStore({
      adminStudent: {
        editingStudentSummary: {},
      },
    });

    const getStudentStub = sinon.stub(getStudent,
    'summaryStudentByIdRequestStarted', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <EditStudentPageContainer params={{ id: '2'}} />
      </Provider>,
    );

    // Assert
    const presentational = container.find('EditStudentPage');
    expect(presentational).not.to.be.undefined;
    expect(presentational.prop('studentId')).to.equal('2');
  }).bind(this));

  it('should call to getStudent with expected studentId', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const mockStore: any = createStore({
      adminStudent: {
        editingStudentSummary: {},
      },
    });

    const getStudentStub = sinon.stub( getStudent ,
    'summaryStudentByIdRequestStarted', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <EditStudentPageContainer params={{ id: '2'}} />
      </Provider>,
    );

    // Assert
    expect(getStudentStub.calledOnce).to.be.true;
    expect(getStudentStub.calledWith('2')).to.be.true;
  }).bind(this));
});
