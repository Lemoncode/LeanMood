import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { TrainingSummary } from './../../../../../../model/trainingSummary';
import { adminActionEnums } from './../../../../../../common/actionEnums/admin';
import {
  summaryTrainingListRequestStarted, summaryTrainingListRequestCompleted,
} from './../../../../training/list/actions/summaryTrainingListRequest';
import { trainingApi } from '../../../../../../rest-api';

const middlewares = [ ReduxThunk ];
const mockStore = configureStore(middlewares);

describe('summaryTrainingListRequestCompleted', () => {
  it('is defined', () => {
    // Assert
    expect(summaryTrainingListRequestCompleted).not.to.be.undefined;
  });

  it('contains the expected type GET_SUMMARY_TRAINING_REQUEST_COMPLETED', () => {
    // Assert
    expect(summaryTrainingListRequestCompleted([]).type).to.be
      .equal(adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED);
  });

  it('contains the expected payload including training summary list', () => {
    // Arrange
    const trainings: TrainingSummary[] = [
      {
        id: 32,
        name: 'React/Redux',
        isActive: true,
        start: new Date(),
        end: new Date(),
      },
      {
        id: 12,
        name: 'Responsive web design',
        isActive: true,
        start: new Date(),
        end: new Date(),
      },
      {
        id: 33,
        name: 'AngularJS 2.0',
        isActive: true,
        start: new Date(),
        end: new Date(),
      },
    ];
    // Act
    const actionResult = summaryTrainingListRequestCompleted(trainings);
    // Assert
    expect(actionResult.payload).not.to.be.undefined;
    expect(actionResult.payload.length).equal(3);
    expect(actionResult.payload).eql(trainings);
  });
});

describe('summaryTrainingListRequestStarted', () => {
  it('should be defined', () => {
    // Assert
    expect(summaryTrainingListRequestStarted).not.to.be.undefined;
  });

  it('should return request action type completed', sinon.test((done) => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    // Act
    const store = mockStore([]);
    store.dispatch(summaryTrainingListRequestStarted())
      .then(() => {
          // Assert
          expect(store.getActions()[0].type).to.be.equal(adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED);
          done();
      });
    }).bind(this));

  it('should return expected training summary data', sinon.test((done) => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const trainings: TrainingSummary[] = [
      {
        id: 32,
        name: 'React/Redux',
        isActive: true,
        start: new Date(),
        end: new Date(),
      },
      {
        id: 12,
        name: 'Responsive web design',
        isActive: true,
        start: new Date(),
        end: new Date(),
      },
      {
        id: 33,
        name: 'AngularJS 2.0',
        isActive: true,
        start: new Date(),
        end: new Date(),
      },
    ];

    const getSummaryTrainingListStub = sinon.stub(trainingApi, 'getSummaryTrainingList');

    getSummaryTrainingListStub.returns({
      then: (callback) => {
        callback(trainings);
      },
    });

    // Act
    const store = mockStore([]);
    store.dispatch(summaryTrainingListRequestStarted())
      .then(() => {
          // Assert
          expect(store.getActions()[0].payload).to.be.equal(trainings);
          expect(getSummaryTrainingListStub.called).to.be.true;
          done();
      });
  }).bind(this));
});
