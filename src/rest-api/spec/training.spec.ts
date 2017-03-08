import { expect } from 'chai';
import {} from 'mocha';
import {} from 'core-js';
import { Training } from '../../model/training';
import { Student } from '../../model/student/student';
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

  describe('setMockDataSeed', () => {
    it('set the right mockdata seed', () => {
      // Act
      trainingApi.setMockDataSeed(trainingList);

      // Assert
      expect(trainingApi.trainingList).to.be.equal(trainingList);
    });
  });

  describe('getSummaryTrainingList', () => {
    it('Get the expected summary training list', sinon.test((done) => {
      // Arrange
      let expectedSummaryList: TrainingSummary[];

      // Act
      expectedSummaryList = trainingList.map((training) => {
        return {
          id: training.id,
          isActive: training.isActive,
          name: training.name,
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
});
