import { expect } from 'chai';
import * as deepFreeze from 'deep-freeze';
import {} from 'mocha'
import {} from 'core-js'
import { adminTrainingReducer, AdminTrainingState } from '../adminTraining';
import { TrainingEntity } from '../../model/training'
import { StudentSummary } from '../../model/studentSummary'
import { TrainerSummary } from '../../model/TrainerSummary'
import {adminActionEnums} from '../../common/actionEnums/admin'


describe('adminTrainingReducer', () => {
    it("is defined", () => {
      // Arrange
      // Act
      // Assert
      expect(adminTrainingReducer).not.be.undefined;
    });

    it("should return same state when passing an action that is not expected", () => {
      // Arrange
      const originalState : AdminTrainingState = new AdminTrainingState();

      const action = {
        type: 'NOT_EXPECTED_ACTION_123456789'
      }

      // Act
      const newState = adminTrainingReducer(originalState, action);

      // Assert
      expect(newState).to.be.equal(originalState);

    });

    it("should return a new state including edit training when passing a GET_TRAINING_REQUEST_COMPLETED", () => {
      // Arrange
      const originalState : AdminTrainingState = new AdminTrainingState();
      // const id: number = 32;
      const expectedTraining : TrainingEntity = {
        id: 32,
        name: 'React/Redux',
        isActive: true,
        start: new Date(1,1,2017),
        end: new Date(31,1,2017),
        students: new Array<StudentSummary>(),
        trainers: new Array<TrainerSummary>()
      };
      const actionResult = {
        type: adminActionEnums.GET_TRAINING_REQUEST_COMPLETED,
        payload: expectedTraining
      }

      // Act
      const newState = adminTrainingReducer(originalState, actionResult);

      // Assert
      expect(newState).not.to.be.eql(originalState);
      expect(newState.editTraining).to.be.eql(expectedTraining);

    });
});
