import { TrainingSummary } from './../../../../../../model/trainingSummary';
import { adminActionEnums } from './../../../../../../common/actionEnums/admin';
import { summaryTrainingListRequestCompleted } from './../../../../training/list/actions/summaryTrainingListRequest';


describe('summaryTrainingListRequestCompleted', () => {
  it('is defined', () => {
    //Assert
    expect(summaryTrainingListRequestCompleted).not.to.be.undefined;
  });

  it('contains the expected type GET_SUMMARY_TRAINING_REQUEST_COMPLETED', () => {
    // Assert
    expect(summaryTrainingListRequestCompleted([]).type).to.be.equal(adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED);
  });

  it('contains the expected payload including training summary list', () => {
    //Arrange
    const trainings : TrainingSummary[] = [
      {
          id: 2,
          name: 'Jaime Doe',
          isActive: true
      },
      {
          id: 3,
          name: 'Braulio Somez',
          isActive: true
      }
    ];
    //Act
    const actionResult = summaryTrainingListRequestCompleted(trainings);
    //Assert
    expect(actionResult.payload).not.to.be.undefined;
    expect(actionResult.payload.length).equal(2);
    expect(actionResult.payload).eql(trainings);
  });
  //TODO hacer pruebas de summaryTrainingListRequestStarted
});