import { expect } from 'chai';
import {} from 'mocha'
import {} from 'core-js'
import { Training } from '../../model/training';
import { Student } from '../../model/student';
import { Trainer } from '../../model/trainer';
import { trainingApi } from '../training'

let trainingList : Training[];

beforeEach(() => {
  trainingList =
  [
    {
      id: 32,
      name: 'React/Redux',
      isActive: true,
      start: new Date(1,1,2017),
      end: new Date(31,1,2017),
      students: new Array<Student>(),
      trainers: new Array<Trainer>()
    },
    {
      id: 12,
      name: 'Responsive web design',
      isActive: true,
      start: new Date(1,2,2017),
      end: new Date(28,2,2017),
      students: new Array<Student>(),
      trainers: new Array<Trainer>()
    },
    {
      id: 33,
      name: 'AngularJS 2.0',
      isActive: true,
      start: new Date(1,3,2017),
      end: new Date(31,3,2017),
      students: new Array<Student>(),
      trainers: new Array<Trainer>()
    },
  ];
});

describe('TrainingApi', () => {
  it('is defined', () => {
      expect(trainingApi).not.to.be.undefined;
  })

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

      trainingApi.setMockDataSeed(trainingList);

      // Act
      const summaryListPromise = trainingApi.getSummaryTrainingList();

      summaryListPromise.then((summaryList) => {
        // Assert
        expect(summaryList).not.to.be.undefined;
        expect(summaryList.length).to.be.equal(trainingList.length);
        expect(summaryList[0].id).to.be.equal(trainingList[0].id);
        expect(summaryList[0].name).to.be.equal(trainingList[0].name);
        expect(summaryList[0].isActive).to.be.equal(trainingList[0].isActive);
        expect(summaryList[1].id).to.be.equal(trainingList[1].id);
        expect(summaryList[1].name).to.be.equal(trainingList[1].name);
        expect(summaryList[1].isActive).to.be.equal(trainingList[1].isActive);

        done();
      });

    }).bind(this))
  });
});
