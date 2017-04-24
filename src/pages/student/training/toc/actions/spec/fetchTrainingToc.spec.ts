import thunk from 'redux-thunk';
import configureStore, { IStore } from 'redux-mock-store';
import { fetchTrainingTOCStarted, fetchTrainingTOCCompleted } from '../fetchTrainingToc';
import { studentActionEnums } from '../../../../../../common/actionEnums/student/';
import { studentAPI } from '../../../../../../rest-api/student/studentApi';
import { TrainingTOC } from '../../../../../../model/student/trainingToc';

const mockStore = configureStore<TrainingTOC>([thunk]);
let store: IStore<TrainingTOC>;

describe('Student Module --> Training TOC actions', () => {
  describe('fetchTrainingTOCStarted', () => {
    beforeEach(() => {
      store = mockStore(new TrainingTOC());
    });

    it('should be a function', () => {
      // Assert
      expect(fetchTrainingTOCStarted).to.be.a('function');
    });

    it('should return a function', () => {
      // Arrange
      const payload = null;

      // Act
      const result = fetchTrainingTOCStarted(payload);

      // Assert
      expect(result).to.be.a('function');
    });

    it('should dispatch the a fetched trainingTOC', sinon.test(function(done) {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const trainingId = 123;
      const mockedTOC = 'Markdown content';
      const getTOCByTraining = sinon.stub(studentAPI, 'getTOCByTraining', () => {
        return Promise.resolve(mockedTOC);
      });

      // Act
      store.dispatch(fetchTrainingTOCStarted(trainingId)).then(() => {
        expect(getTOCByTraining.calledWith(trainingId)).to.be.true;
        const actions = store.getActions();
        expect(actions).to.be.an('array').with.lengthOf(1);
        expect(actions[0].payload).to.be.equals(mockedTOC);
        expect(actions[0].type).to.be.equals(studentActionEnums.FETCH_TRAINING_TOC_COMPLETED);
        done();
      }).catch(done);
    }));
  });

  describe('fetchTrainingTOCCompleted', () => {
    it('should be a function', () => {
      // Assert
      expect(fetchTrainingTOCCompleted).to.be.a('function');
    });

    it('should return an action of type STUDENT_FETCH_TRAINING_TOC with the content as payload', () => {
      // Arrange
      const trainingTOC: TrainingTOC = {
        id: 123,
        name: 'Training name',
        content: 'Training content',
      };

      // Act
      const action = fetchTrainingTOCCompleted(trainingTOC);

      // Assert
      expect(action).to.be.an('object').not.null;
      expect(action).to.have.property('type').that.is.equals(studentActionEnums.FETCH_TRAINING_TOC_COMPLETED);
      expect(action).to.have.property('payload').that.is.deep.equals(trainingTOC);
    });
  });
});
