import { expect } from "chai";
import {} from "core-js";
import {} from "mocha";
import configureStore from "redux-mock-store";
import ReduxThunk from "redux-thunk";
import { adminActionEnums } from "../../../../../../common/actionEnums/admin";
import { Student } from "../../../../../../model/student";
import { Trainer } from "../../../../../../model/trainer";
import { Training } from "../../../../../../model/training";
import { trainingApi } from "../../../../../../rest-api";
import { editTrainingRequestCompleted, editTrainingRequestStarted } from "../editTrainingRequest";

let middlewares = [ ReduxThunk ];
let mockStore = configureStore(middlewares);

describe("editTrainingRequestCompleted", () => {
  it("is defined", () => {
    // Assert
    expect(editTrainingRequestCompleted).not.to.be.undefined;
  });

  it("contains the expected type GET_SUMMARY_TRAINING_REQUEST_COMPLETED", () => {
    // Assert
    expect(editTrainingRequestCompleted(new Training()).type).to.be.equals(
      adminActionEnums.GET_TRAINING_REQUEST_COMPLETED);
  });

  it("contains the expected payload including the edit training", () => {
    // Arrange
    const expectedTraining: Training = {
      end: new Date(31, 1, 2017),
      id: 32,
      isActive: true,
      name: "React/Redux",
      start: new Date(1, 1, 2017),
      students: new Array<Student>(),
      trainers: new Array<Trainer>(),
    };

    // Act
    const actionResult = editTrainingRequestCompleted(expectedTraining);
    //
    // Assert
    expect(actionResult.payload).not.to.be.undefined;
    expect(actionResult.payload).to.be.equal(expectedTraining);
  });
});
describe("editTrainingRequestStarted", () => {

  it("should be defined", () => {
    // Assert
    expect(editTrainingRequestStarted).not.to.be.undefined;
  });

  it("should return request action type completed", sinon.test((done) => {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const id: number = 32;
    //
    const store = mockStore([]);
    // Act
    store.dispatch(editTrainingRequestStarted(id))
      .then(() => {
          // Assert
          expect(store.getActions()[0].type).to.be.equal(adminActionEnums.GET_TRAINING_REQUEST_COMPLETED);
          done();
      });
  }).bind(this));

  it("should return expected training data", sinon.test((done) => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const id: number = 32;

    const expectedTraining: Training = {
      end: null,
      id: 32,
      isActive: true,
      name: "React/Redux",
      start: null,
      students: new Array<Student>(),
      trainers: new Array<Trainer>(),
    };

    const getTrainingByIdStub = sinon.stub(trainingApi, "getTrainingById");

    getTrainingByIdStub.returns({
      then: (callback) => {
        callback(expectedTraining);
      },
    });

    // Act
    let store = mockStore([]);
    store.dispatch(editTrainingRequestStarted(id))
      .then(() => {
        // Assert
        expect(store.getActions()[0].payload).to.be.equal(expectedTraining);
        expect(getTrainingByIdStub.called).to.be.true;
        done();
      });
    }).bind(this));
});
