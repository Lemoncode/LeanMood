import { studentAPI } from '../index';
import { TrainingTOC } from '../../../model/student/trainingToc';
import { Student } from '../../../model/student';
import * as mockData from '../mockData';

describe('StudentAPI', () => {
  it('should be an object', () => {
    // Assert
    expect(studentAPI).to.be.an('object').and.not.to.be.null;
  });

  describe('getTOCByTraining', () => {
    it('should have a "getTOCByTraining" method that returns a promise', () => {
      // Act
      const promise = studentAPI.getTOCByTraining(null);

      // Assert
      expect(promise).to.be.an.instanceOf(Promise);
    });

    it('should return a "TrainingTOC" instance if id exists', sinon.test(function(done) {
      // Arrange
      const sinon: sinon.SinonStatic = this;

      const trainingId = 1;
      const trainingName = 'Training 1';
      const trainingContent = 'Content of TOC from training 1';
      const trainingList: TrainingTOC[] = [
        {
          id: trainingId,
          name: trainingName,
          content: trainingContent,
        },
      ];
      const trainingTOCMockDataStub = sinon.stub(mockData, 'trainingTOCMockData', () => trainingList);

      // Act
      studentAPI.getTOCByTraining(trainingId).then((trainingTOC) => {
        // Assert
        expect(trainingTOC).to.be.an('object');
        expect(trainingTOC.id).to.be.equals(trainingId);
        expect(trainingTOC.name).to.be.equals(trainingName);
        expect(trainingTOC.content).to.be.equals(trainingContent);
        done();
      }).catch(done);
    }));

    it('should return "undefined" for a non existing id', (done) => {
      // Arrange
      const trainingId = null;

      // Act
      studentAPI.getTOCByTraining(trainingId).then((trainingTOC) => {
        // Assert
        expect(trainingTOC).to.be.undefined;
        done();
      }).catch(done);
    });
  });

  describe('getStudentSummaryList', () => {
    it('should have a "getStudentSummaryList" method that returns a promise', () => {
      // Act
      const promise = studentAPI.getStudentSummaryList();

      // Assert
      expect(promise).to.be.an.instanceOf(Promise);
    });

    it('should return a student summary list instance if id exists', sinon.test(function(done) {
      // Arrange
      const sinon: sinon.SinonStatic = this;

      const studentList: Student[] = [
        {
          email: 'john@test.com',
          fullname: 'John Doe',
          id: 32,
          isActive: true,
          phoneNumber: '123',
        },
        {
          email: 'mark@email.com',
          fullname: 'Mark Perez',
          id: 44,
          isActive: true,
          phoneNumber: '',
        },
      ];

      const studentMockDataStub = sinon.stub(mockData, 'studentMockData', () => studentList);

      // Act
      studentAPI.getStudentSummaryList().then((studentSummaryList) => {
        // Assert
        expect(studentSummaryList).not.to.be.undefined;
        expect(studentSummaryList.length).to.be.equal(2);
        expect(studentSummaryList[0].id).to.be.equal(studentList[0].id);
        expect(studentSummaryList[0].fullname).to.be.equal(studentList[0].fullname);
        expect(studentSummaryList[0].email).to.be.equal(studentList[0].email);
        expect(studentSummaryList[1].id).to.be.equal(studentList[1].id);
        expect(studentSummaryList[1].fullname).to.be.equal(studentList[1].fullname);
        expect(studentSummaryList[1].email).to.be.equal(studentList[1].email);
        done();
        done();
      }).catch(done);
    }));
  });
});
