<<<<<<< HEAD
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
=======
import { expect } from 'chai';
import {} from 'mocha';
import {} from 'core-js';
import { Training } from '../../model/training';
import { Student } from '../../model/student';
import { Trainer } from '../../model/trainer';
import { TrainingSummary } from '../../model/trainingSummary';
import { trainingApi } from '../training';

let trainingList: Training[];

beforeEach(() => {
  trainingList = [
    {
      end: new Date(31, 1, 2017),
      id: 32,
      isActive: true,
      name: 'React/Redux',
      start: new Date(1, 1, 2017),
      students: new Array<Student>(),
      trainers: new Array<Trainer>(),
    },
    {
      end: new Date(28, 2, 2017),
      id: 12,
      isActive: true,
      name: 'Responsive web design',
      start: new Date(1, 2, 2017),
      students: new Array<Student>(),
      trainers: new Array<Trainer>(),
    },
    {
      end: new Date(31, 3, 2017),
      id: 33,
      isActive: true,
      name: 'AngularJS 2.0',
      start: new Date(1, 3, 2017),
      students: new Array<Student>(),
      trainers: new Array<Trainer>(),
    },
  ];
});

describe('TrainingApi', () => {
  it('is defined', () => {
    // Assert
    expect(trainingApi).not.to.be.undefined;
  });
>>>>>>> 1a74c9a578d7b4a65b0460d0997cca74652df14c

      // Act
      trainingApi.setMockDataSeed(trainingList);

      // Assert
      expect(trainingApi.trainingList).to.be.equal(trainingList);
    });
  });

  describe("getSummaryTrainingList", () => {
    it("Get the expected summary training list", sinon.test((done) => {
      // Arrange
<<<<<<< HEAD
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
=======
      let expectedSummaryList: TrainingSummary[];
>>>>>>> 1a74c9a578d7b4a65b0460d0997cca74652df14c

      // Act
      expectedSummaryList = trainingList.map((training) => {
        return {
<<<<<<< HEAD
          id : training.id,
          isActive : training.isActive,
          name : training.name,
=======
          id: training.id,
          isActive: training.isActive,
          name: training.name,
>>>>>>> 1a74c9a578d7b4a65b0460d0997cca74652df14c
        };
      });


      const summaryListPromise = trainingApi.getSummaryTrainingList();

      summaryListPromise.then((summaryList) => {
        // Assert
        expect(summaryList).to.eql(expectedSummaryList);
        done();
      });
    }).bind(this));
<<<<<<< HEAD
  });

  describe("getTrainingById", () => {
    it("Get the expected training", (done) => {
      // Arrange
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
    });
=======
>>>>>>> 1a74c9a578d7b4a65b0460d0997cca74652df14c
  });
});
