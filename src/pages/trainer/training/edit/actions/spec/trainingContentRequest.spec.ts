import {expect} from 'chai';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import {trainerActionEnums} from '../../../../../../common/actionEnums/trainer';
import {trainerApi} from '../../../../../../rest-api/';
import {trainingContentRequestCompleted, trainingContentRequestStarted} from '../trainingContentRequest';

const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);

describe('trainingConentRequestCompleted', () => {
  it('is defined', () => {
    //Assert
    expect(trainingContentRequestCompleted).not.to.be.undefined;
  });

  it('returns expected type GET_TRAINING_CONTENT_REQUEST_COMPLETED', () => {
    //Assert
    expect(trainingContentRequestCompleted().type).to.equal(trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED);
  });

  it('returns expected payload equals "Test content"', () => {
    //Arrange
    const expectedTrainingContent = "Test content";

    //Act
    const actionResult = trainingContentRequestCompleted(expectedTrainingContent);

    //Assert
    expect(actionResult.payload).to.equal(expectedTrainingContent);
  });
});

describe('trainingContentRequestStarted', () => {
  it('is defined', () => {
    //Assert
    expect(trainingContentRequestStarted).not.to.be.undefined;
  });

  it('should dispatch trainingContentRequestCompleted action', (done) => {
    //Arrange
    const trainingId = 1;
    const store = mockStore([]);

    //Act
    store.dispatch(trainingContentRequestStarted(trainingId))
      .then(() => {
        //Assert
        expect(store.getActions()[0].type).to.equal(trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED);
        done();
      });
  });

  it('should calls to getTrainingConentByTrainingId and expect payload', sinon.test((done) => {
    //Arrange
    const sinon: sinon.SinonStatic = this;

    const trainingId = 1;
    const expectedContent = "Test content";
    const store = mockStore([]);

    const getTrainingConentByTrainingIdStub = sinon.stub(trainerApi, 'getTrainingConentByTrainingId', () => {
      return {
        then: callback => {
          callback(expectedContent);
        }
      }
    });

    //Act
    store.dispatch(trainingContentRequestStarted(trainingId))
      .then(() => {
        //Assert
        expect(getTrainingConentByTrainingIdStub.calledWith(trainingId)).to.be.true;
        expect(store.getActions()[0].payload).to.equal(expectedContent);

        done();
      });
  }).bind(this));
});
