import { expect } from "chai";
import {} from "core-js";
import {} from "mocha";
import { StudentSummary } from "../../model/studentSummary";
import { TrainerSummary } from "../../model/trainerSummary";
import { TrainingEntity } from "../../model/training";
import { TrainingSummary } from "../../model/trainingSummary";
import { trainingApi } from "../training";

let trainingList: TrainingEntity[];

beforeEach(() => {
  trainingList =  [
    {
      end: new Date(2017, 0, 31),
      id: 32,
      isActive: true,
      name: "React/Redux",
      start: new Date(2017, 0, 1),
      students: new Array<StudentSummary>(),
      trainers: new Array<TrainerSummary>()
    },
    {
      end: new Date(2017, 1, 28),
      id: 12,
      isActive: true,
      name: "Responsive web design",
      start: new Date(2017, 1, 1),
      students: new Array<StudentSummary>(),
      trainers: new Array<TrainerSummary>()
    },
    {
      end: new Date(2017, 2, 31),
      id: 33,
      isActive: true,
      name: "AngularJS 2.0",
      start: new Date(2017, 2, 1),
      students: new Array<StudentSummary>(),
      trainers: new Array<TrainerSummary>()
    },
  ];
});

describe("TrainingApi", () => {
  it("is defined", () => {
    // Assert
    expect(trainingApi).not.to.be.undefined;
  })

  describe("setMockDataSeed", () => {
    it("set the right mockdata seed", () => {
      // Act
      trainingApi.setMockDataSeed(trainingList);

      // Assert
      expect(trainingApi.trainingList).to.be.equal(trainingList);
    });
  });

  describe("getSummaryTrainingList", () => {
    it("Get the expected summary training list", sinon.test((done) => {
      // Arrange
      let expectedSummaryList: TrainingSummary [];

      // Act
      expectedSummaryList = trainingList.map((training) => {
        return {
          id : training.id,
          isActive : training.isActive,
          name : training.name,
        };
      });

      trainingApi.setMockDataSeed(trainingList);

      const summaryListPromise = trainingApi.getSummaryTrainingList();

      summaryListPromise.then((summaryList) => {
        // Assert
        expect(summaryList).to.eql(expectedSummaryList);
        done();
      });
    }).bind(this));
  });

  describe("getTrainingById", () => {
    it("Get the expected training", sinon.test((done) => {
      // Arrange
      const id: number = 32;
      let expectedTraining: TrainingEntity;

      // Act
      expectedTraining = trainingList.find((training) => training.id === id);

      const fetchTraining = trainingApi.getTrainingById(id);

      fetchTraining.then((training) => {
        // Assert
        expect(training.id).to.eql(expectedTraining.id);
        done();
      });
    }).bind(this));
  });
});
