import { expect } from "chai";
import {} from "core-js";
import {} from "mocha";
import { Student } from "../../model/student";
import { Trainer } from "../../model/trainer";
import { Training } from "../../model/training";
import { TrainingSummary } from "../../model/trainingSummary";
import { trainingApi } from "../training";

describe("TrainingApi", () => {
  it("is defined", () => {
    // Assert
    expect(trainingApi).not.to.be.undefined;
  });

  describe("setMockDataSeed", () => {
    it("set the right mockdata seed", () => {
      // Arrange
      let trainingList: Training[];

      trainingList =  [
      {
        end: null,
        id: 32,
        isActive: true,
        name: "React/Redux",
        start: null,
        students: new Array<Student>(),
        trainers: new Array<Trainer>(),
      },
      {
        end: null,
        id: 12,
        isActive: true,
        name: "Responsive web design",
        start: null,
        students: new Array<Student>(),
        trainers: new Array<Trainer>(),
      },
      {
        end: null,
        id: 33,
        isActive: true,
        name: "AngularJS 2.0",
        start: null,
        students: new Array<Student>(),
        trainers: new Array<Trainer>(),
      },
    ];

      // Act
      trainingApi.setMockDataSeed(trainingList);

      // Assert
      expect(trainingApi.trainingList).to.be.equal(trainingList);
    });
  });

  describe("getSummaryTrainingList", () => {
    it("Get the expected summary training list", sinon.test((done) => {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      let expectedSummaryList: TrainingSummary [];
      const trainingList: Training[] =  [
        {
          end: null,
          id: 32,
          isActive: true,
          name: "React/Redux",
          start: null,
          students: new Array<Student>(),
          trainers: new Array<Trainer>(),
        },
        {
          end: null,
          id: 12,
          isActive: true,
          name: "Responsive web design",
          start: null,
          students: new Array<Student>(),
          trainers: new Array<Trainer>(),
        },
        {
          end: null,
          id: 33,
          isActive: true,
          name: "AngularJS 2.0",
          start: null,
          students: new Array<Student>(),
          trainers: new Array<Trainer>(),
        },
      ];

      // Act
      expectedSummaryList = trainingList.map((training) => {
        return {
          id : training.id,
          isActive : training.isActive,
          name : training.name,
        };
      });


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
      const sinon: sinon.SinonStatic = this;
      const trainingList: Training[] =  [
        {
          end: null,
          id: 32,
          isActive: true,
          name: "React/Redux",
          start: null,
          students: new Array<Student>(),
          trainers: new Array<Trainer>(),
        },
        {
          end: null,
          id: 12,
          isActive: true,
          name: "Responsive web design",
          start: null,
          students: new Array<Student>(),
          trainers: new Array<Trainer>(),
        },
        {
          end: null,
          id: 33,
          isActive: true,
          name: "AngularJS 2.0",
          start: null,
          students: new Array<Student>(),
          trainers: new Array<Trainer>(),
        },
      ];

      const id: number = 32;

      // Act
      const expectedTraining = trainingList.find((training) => training.id === id);

      const fetchTraining = trainingApi.getTrainingById(id);

      fetchTraining.then((training) => {
        // Assert
        expect(training.id).to.eql(expectedTraining.id);
        done();
      });
    }).bind(this));
  });
});
