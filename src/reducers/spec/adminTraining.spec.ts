import { expect } from "chai";
import {} from "core-js";
import * as deepFreeze from "deep-freeze";
import {} from "mocha";
import { Student } from "../../model/student";
import { Trainer } from "../../model/trainer";
import { Training } from "../../model/training";
import { adminActionEnums } from "./../../common/actionEnums/admin";
import { TrainingSummary } from "./../../model/trainingSummary";
import { adminTrainingReducer, AdminTrainingState } from "./../adminTraining";

describe("adminTrainingReducer", () => {
    it("is defined", () => {
      // Arrange
      // Act
      // Assert
      expect(adminTrainingReducer).not.be.undefined;
    });

    it("should return same state when passing an action that is not expected", () => {
      // Arrange
      const originalState: AdminTrainingState = new AdminTrainingState();
      deepFreeze(originalState);
      const action = {
        type: "NOT_EXPECTED_ACTION_123456789",
      };

      // Act
      const newState = adminTrainingReducer(originalState, action);

      // Assert
      expect(newState).to.be.equal(originalState);

    });

    it("should return a new state including edit training when passing a GET_TRAINING_REQUEST_COMPLETED", () => {
      // Arrange
      const originalState: AdminTrainingState = new AdminTrainingState();
      deepFreeze(originalState);
      // const id: number = 32;
      const expectedTraining: Training = {
        end: new Date(31, 1, 2017),
        id: 32,
        isActive: true,
        name: "React/Redux",
        start: new Date(1, 1, 2017),
        students: new Array<Student>(),
        trainers: new Array<Trainer>(),
      };
      const actionResult = {
        payload: expectedTraining,
        type: adminActionEnums.GET_TRAINING_REQUEST_COMPLETED,
      };

      // Act
      const newState = adminTrainingReducer(originalState, actionResult);

      // Assert
      expect(newState).not.to.be.eql(originalState);
      expect(newState.editTraining).to.be.eql(expectedTraining);

    });

    it("return list", () => {
        // Arrange
        const originalState: AdminTrainingState = new AdminTrainingState();
        deepFreeze(originalState);
        const trainings: TrainingSummary[] = [
            {
                id: 2,
                isActive: true,
                name: "Jaime Doe",
            },
            {
                id: 3,
                isActive: true,
                name: "Braulio Somez",
            },
        ];

        const actionResult = {
            payload: trainings,
            type: adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED,
        };
        // Act
        const newState: AdminTrainingState = adminTrainingReducer(originalState, actionResult);
        // Assert
        expect(newState.trainingSummaryList).equal(trainings);
    });
});
