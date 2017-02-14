import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { multilineTrim } from '../../../../../../common/parse/multilineTrim';
import { Student } from '../../../../../../model/student';
import { EditStudentComponent } from '../editStudentComponent';

describe('EditStudentComponent', () => {
  it('Should not be undefined', () => {
    // Arrange
    const student: Student = {
      email: 'test@test.com',
      fullname: 'John Doe',
      phoneNumber: '999 999',
      isActive: true,
      id: 2,
    };

    const onSaveSpy = sinon.spy()
    const onUpdateSpy = sinon.spy()

    // Act
    const editStudentComponent = shallow(
      <EditStudentComponent student={student} saveStudent={onSaveSpy} updateStudent={onUpdateSpy}  />,
    );

    // Assert
    expect(editStudentComponent).not.to.be.undefined;

  });

  it('Should display single student data', () => {
    // Arrange
    const student: Student = {
      email: 'test@test.com',
      fullname: 'John Doe',
      phoneNumber: '999 999',
      isActive: true,
      id: 2,
    };

    const onSaveSpy = sinon.spy();
    const onUpdateSpy = sinon.spy();

    // Act
    const editStudentComponent = shallow(
      <EditStudentComponent student={student} saveStudent={onSaveSpy} updateStudent={onUpdateSpy} />,
    );

    // Assert
    const expectedDomTree = `
      <div>
        <input type="text" value="John Doe"/>
        <br />
        <input type="text" value="test@test.com"/>
        <br />
        <input type="checkbox" checked=""/>
        <br />
        <button>Save</button>
      </div>
      `;

    expect(editStudentComponent.html()).to.be.equal(multilineTrim(expectedDomTree));
  });
});
