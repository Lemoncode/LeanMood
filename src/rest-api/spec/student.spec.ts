import { expect } from 'chai';
import {} from 'mocha';
import {} from 'core-js';
import { Student } from '../../model/student';
import { studentApi } from '../student';

describe('StudentApi', () => {
  it('is defined', () => {
    expect(studentApi).not.to.be.undefined;
  });

  describe('setMockDataSeed', () => {
    it('set the right mockdata seed', () => {
      // Arrange
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

      // Act
      studentApi.setMockDataSeed(studentList);

      // Assert
      expect(studentApi.studentList).to.be.equal(studentList);
    });
  });

  describe('getSummaryStudentList', () => {
    it('Get the expected summary student list', sinon.test((done) => {
      // Arrange
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
});
