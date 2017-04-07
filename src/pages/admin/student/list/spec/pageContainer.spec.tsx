import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import * as summaryStudentListRequest from '../actions/summaryStudentListRequest';
import { StudentSummary } from '../../../../../model/studentSummary';
import { ListStudentPage } from '../page';
import { ListStudentPageContainer } from '../pageContainer';
import { IAppState } from '../../../../../reducers';

const createStore = configureStore();

describe('ListStudentPageContainer', () => {
  describe('structure tests', () => {
    it('should render a ListStudentPageContainer that connects a ListStudentPage', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const store: any = createStore({
        adminStudent: {
          studentSummaryList: [],
        },
      });
      const summaryStudentListRequestStarted = sinon.stub(
        summaryStudentListRequest,
        'summaryStudentListRequestStarted',
      );
      summaryStudentListRequestStarted.returns({ type: 'dummy' });

      // Act
      const wrapper = mount(
        <Provider store={store}>
          <ListStudentPageContainer />
        </Provider>,
      );
      const pageContainer = wrapper.find(ListStudentPageContainer);

      // Assert
      expect(pageContainer.length).to.be.equal(1);
      expect(pageContainer.find(ListStudentPage).length).to.be.equal(1);
    }));

    it('should inject the studentsSummaryList as "studentList" property from the state', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const studentSummaryList = [
        {
          email: 'test@test.com',
          fullname: 'John Doe',
          id: 2,
          isActive: false,
        },
        {
          email: 'mark@test.com',
          fullname: 'Mark Somez',
          id: 3,
          isActive: false,
        },
      ];
      const store: any = createStore({
        adminStudent: { studentSummaryList },
      });
      const summaryStudentListRequestStartedMock = sinon.stub(
        summaryStudentListRequest,
        'summaryStudentListRequestStarted',
      );
      summaryStudentListRequestStartedMock.returns({ type: 'dummy' });

      // Act
      const wrapper = mount(
        <Provider store={store}>
          <ListStudentPageContainer />
        </Provider>,
      );
      const studentListPage = wrapper.find(ListStudentPageContainer).find(ListStudentPage);

      // Assert
      expect(studentListPage.prop('studentList')).to.be.an.instanceof(Array);
      expect(studentListPage.prop('studentList')).to.be.deep.equals(studentSummaryList);
    }));

    it('should inject a fetchStudents function that dispatches a summaryStudentListRequestStarted',
      sinon.test(function () {
        // Arrange
        const sinon: sinon.SinonStatic = this;
        const studentSummaryList = [];
        const store: any = createStore({
          adminStudent: { studentSummaryList },
        });
        const summaryStudentListRequestStartedMock = sinon.stub(
          summaryStudentListRequest,
          'summaryStudentListRequestStarted',
        );
        summaryStudentListRequestStartedMock.returns({ type: 'dummy' });

        // Act
        const wrapper = mount(
          <Provider store={store}>
            <ListStudentPageContainer />
          </Provider>,
        );
        const studentListPage = wrapper.find(ListStudentPageContainer).find(ListStudentPage);

        // Assert
        expect(studentListPage.prop('fetchStudents')).to.be.instanceOf(Function);
        // Call fetchStudents to test if it calles the mocked method we expect it calls
        studentListPage.prop('fetchStudents')();
        expect(summaryStudentListRequestStartedMock.called).to.be.true;
      }));
  });
});
