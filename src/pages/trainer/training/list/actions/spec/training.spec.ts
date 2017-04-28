import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchTrainingList } from '../trainingActions';
import { TrainingSummary } from '../../../../../../model/trainingSummary';
import { trainerActionEnums } from '../../../../../../common/actionEnums/trainer';
import { TrainingState } from '../../../../../../reducers/trainer/training';
import { trainingApi } from '../../../../../../rest-api';

describe('Trainer Module: fetchTrainingList action', () => {
  const createStore = configureStore<TrainingState>([thunk]);

  it('should be a function', () => {
    // Assert
    expect(fetchTrainingList).to.be.a('function');
  });

  it('should dispatch a GET_SUMMARY_TRAINING_REQUEST_COMPLETED action with the fetched training list',
    sinon.test(function (done) {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const trainerId = 123;
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

      const getTrainingListByTrainer = sinon.stub(trainingApi, 'getTrainingListByTrainer')
        .returns({
          then: (callback) => {
            callback(trainings);
          },
        });
      const expectedAction = {
        type: trainerActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED,
        payload: trainings,
      };

      // Act
      const store = createStore(new TrainingState());
      store.dispatch(fetchTrainingList(trainerId))
        .then(() => {
          // Assert
          const action = store.getActions().shift();
          expect(action).to.be.deep.equals(expectedAction);
          done();
        }).catch(done);
    }));
});
