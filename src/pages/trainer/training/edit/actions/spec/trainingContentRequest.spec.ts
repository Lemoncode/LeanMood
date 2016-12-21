import {expect} from 'chai';
import {trainerActionEnums} from '../../../../../../common/actionEnums/trainer';
import {trainingContentRequestCompleted} from '../trainingContentRequest';

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
