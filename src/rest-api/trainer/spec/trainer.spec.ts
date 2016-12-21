import {expect} from 'chai';
import {trainerApi} from '../trainer';
import * as trainerMockData from '../trainerMockData';

describe('TrainerApi', () => {
  it('is defined', () => {
    //Arrange

    //Act

    //Assert
    expect(trainerApi).not.to.be.undefined;
  });

  describe('getTrainingConentByTrainingId', () => {
    it('returns expected content by trainingId equals 1', sinon.test((done) => {
      //Arrange
      let sinon: sinon.SinonStatic = this;

      const trainingId = 1;

      const expectedMockTraining: trainerMockData.TrainingContent = {
        trainingId: 1,
        content: "# Test H1 text"
      };

      const trainingContentMockDataStub = sinon.stub(trainerMockData, 'trainingContentMockData',
        [expectedMockTraining]
      );

      //Act
      const promise = trainerApi.getTrainingConentByTrainingId(trainingId);

      promise.then((content) => {
        //Assert
        expect(content).to.equal(expectedMockTraining.content);
        done();
      });
    }).bind(this));

    it('returns expected content by trainingId equals 2', sinon.test((done) => {
      //Arrange
      let sinon: sinon.SinonStatic = this;

      const trainingId = 2;

      const expectedMockTraining1: trainerMockData.TrainingContent = {
        trainingId: 1,
        content: "# Test H1 text"
      };
      const expectedMockTraining2: trainerMockData.TrainingContent = {
        trainingId: 2,
        content: "# Test H2 text"
      };
      const trainingContentMockDataStub = sinon.stub(trainerMockData, 'trainingContentMockData',
        [expectedMockTraining1, expectedMockTraining2]
      );

      //Act
      const promise = trainerApi.getTrainingConentByTrainingId(trainingId);

      promise.then((content) => {
        //Assert
        expect(content).to.equal(expectedMockTraining2.content);
        done();
      });
    }).bind(this));
  });
});
