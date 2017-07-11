import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import {trainerActionEnums} from '../../../../../../common/actionEnums/trainer';
import {trainerApi} from '../../../../../../rest-api/';
import {fetchTrainingContentCompleted, fetchTrainingContentStarted} from '../fetchTrainingContent';

const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);

describe('trainingConentRequestCompleted', () => {
  it('is defined', () => {
    // Assert
    expect(fetchTrainingContentCompleted).not.to.be.undefined;
  });

  it('returns expected type GET_TRAINING_CONTENT_REQUEST_COMPLETED', () => {
    // Assert
    expect(fetchTrainingContentCompleted(null).type).to
      .equal(trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED);
  });

  it('returns expected payload equals "Test content"', () => {
    // Arrange
    const expectedTrainingContent = 'Test content';

    // Act
    const actionResult = fetchTrainingContentCompleted(expectedTrainingContent);

    // Assert
    expect(actionResult.payload).to.equal(expectedTrainingContent);
  });
});

describe('fetchTrainingContentStarted', () => {
  it('is defined', () => {
    // Assert
    expect(fetchTrainingContentStarted).not.to.be.undefined;
  });

  it('should dispatch fetchTrainingContentCompleted action', (done) => {
    // Arrange
    const trainingId = 1;
    const store = mockStore([]);

    // Act
    store.dispatch(fetchTrainingContentStarted(trainingId))
      .then(() => {
        // Assert
        expect(store.getActions()[0].type).to.equal(trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED);
        done();
      });
  });

  it('should calls to getTrainingContentByTrainingId and expect payload', sinon.test((done) => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const trainingId = 1;
    const expectedContent = 'Test content';
    const store = mockStore([]);

    const getTrainingContentByTrainingIdStub = sinon.stub(trainerApi, 'getTrainingContentByTrainingId', () => {
      return {
        then: (callback) => {
          callback(expectedContent);
        },
      };
    });

    // Act
    store.dispatch(fetchTrainingContentStarted(trainingId))
      .then(() => {
        // Assert
        expect(getTrainingContentByTrainingIdStub.calledWith(trainingId)).to.be.true;
        expect(store.getActions()[0].payload).to.equal(expectedContent);

        done();
      });
  }).bind(this));
});
