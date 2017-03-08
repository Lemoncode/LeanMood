import { expect } from 'chai';
import { } from 'mocha'
import { } from 'core-js'
import { Student } from '../../model/student/student';
import { studentApi } from '../student';

let studentList: Student[];

beforeEach(() => {
  studentList =
        [
          {
            id: 32,
            fullname: 'John Doe',
            email: 'john@test.com',
            phoneNumber: '123',
            isActive: true
          },
          {
            id: 44,
            fullname: 'Mark Perez',
            email: 'mark@email.com',
            phoneNumber: '999',
            isActive: true
          }
        ];
});

describe('StudentApi', () => {
  it('is defined', () => {
    expect(studentApi).not.to.be.undefined;
  })

  describe('setMockDataSeed', () => {
    it('set the right mockdata seed', () => {
      // Act
      studentApi.setMockDataSeed(studentList);

      // Assert
      expect(studentApi.studentList).to.be.equal(studentList);
    });
  });

  describe('getSummaryStudentList', () => {
    it('Get the expected summary student list', sinon.test((done) => {
      // Arrange
      studentApi.setMockDataSeed(studentList);

      // Act
      const summaryListPromise = studentApi.getSummaryStudentList();

      summaryListPromise.then((summaryList) => {
        // Assert
        expect(summaryList).not.to.be.undefined;
        expect(summaryList.length).to.be.equal(2);
        expect(summaryList[0].id).to.be.equal(studentList[0].id);
        expect(summaryList[0].fullname).to.be.equal(studentList[0].fullname);
        expect(summaryList[0].email).to.be.equal(studentList[0].email);
        expect(summaryList[1].id).to.be.equal(studentList[1].id);
        expect(summaryList[1].fullname).to.be.equal(studentList[1].fullname);
        expect(summaryList[1].email).to.be.equal(studentList[1].email);
        done();
      });

    }).bind(this));
  });

  describe('getStudentById', () => {
    it('Get the expected student', sinon.test((done) => {
      // Arrange
      studentApi.setMockDataSeed(studentList);

      //Act
      const studentPromise = studentApi.getStudentById(44);

      studentPromise.then((student) => {
        //Assert
        expect(student).not.to.be.undefined;
        expect(student.id).to.be.equal(44);
        expect(student.fullname).to.be.equal('Mark Perez');
        expect(student.email).to.be.equal('mark@email.com');
        expect(student.phoneNumber).to.be.equal('999');
        expect(student.isActive).to.be.true;
        done();
      });
    }));

    it('Return undefined when student does not exist', sinon.test((done) => {
      // Arrange
      studentApi.setMockDataSeed(studentList);

      //Act
      const studentPromise = studentApi.getStudentById(12);

      studentPromise.then((student) => {
        //Assert
        expect(student).to.be.undefined;
        done();
      });
    }));
  });

});
