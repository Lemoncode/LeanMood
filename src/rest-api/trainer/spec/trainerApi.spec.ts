import {expect} from 'chai';
import * as trainerMockData from '../trainerMockData';
import {EditTrainingSummary} from '../../../model/trainer/editTrainingSummary';
import {trainerApi} from '../trainerApi';

describe('TrainerApi', () => {
  it('is defined', () => {
    // Assert
    expect(trainerApi).not.to.be.undefined;
  });

  describe('getTrainingConentByTrainingId', () => {
    it('returns expected content by id equals 1', sinon.test((done) => {
      // Arrange
      const sinon: sinon.SinonStatic = this;

      const id = 1;

      const expectedMockTraining: EditTrainingSummary = {
        id: 1,
        content: '# Test H1 text',
      };

      const trainingContentMockDataStub = sinon.stub(trainerMockData, 'trainingContentMockData',
        [expectedMockTraining],
      );

      // Act
      const promise = trainerApi.getTrainingConentByTrainingId(id);

      promise.then((content) => {
        // Assert
        expect(content).to.equal(expectedMockTraining.content);
        done();
      });
    }).bind(this));

    it('returns expected content by id equals 2', sinon.test((done) => {
      // Arrange
      const sinon: sinon.SinonStatic = this;

      const id = 2;

      const expectedMockTraining1: EditTrainingSummary = {
        id: 1,
        content: '# Test H1 text',
      };
      const expectedMockTraining2: EditTrainingSummary = {
        id: 2,
        content: '# Test H2 text',
      };
      const trainingContentMockDataStub = sinon.stub(trainerMockData, 'trainingContentMockData',
        [expectedMockTraining1, expectedMockTraining2],
      );

      // Act
      const promise = trainerApi.getTrainingConentByTrainingId(id);

      promise.then((content) => {
        // Assert
        expect(content).to.equal(expectedMockTraining2.content);
        done();
      });
    }).bind(this));
  });
});
