import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { StudentSummary } from '../../../../../../model/studentSummary'
import { StudentTableComponent } from '../studentTable'

describe('StudentTableComponent', () => {
  it('Should not be undefined', () => {
    // Act
    const studentTableComponent = shallow(
      <StudentTableComponent studentList={[]}/>
    )

    // Assert
    expect(studentTableComponent).not.to.be.undefined;

  });

  it('Should display students tabular data', () => {
    // TODO: This is the good one, pending move to common and add specs
    const plain = str => str.split(/(?:\r\n|\n|\r)/).map(line => line.trim()).join('');

    // Arrange
    const students : StudentSummary[] = [
      {
        id: 2,
        fullname: 'John Doe',
        email: 'test@test.com'
      },
      {
        id: 3,
        fullname: 'Mark Somez',
        email: 'mark@test.com'
      }
    ];

    // Act
    const studentTableComponent = shallow(
      <StudentTableComponent studentList={students}/>
    )

    // Assert
    const expectedDomTree = `
      <table>
        <tbody>
          <tr>
            <td>
              <span>
                John Doe
              </span>
            </td>
            <td>
              <span>
                test@test.com
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                Mark Somez
              </span>
            </td>
            <td>
              <span>
                mark@test.com
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      `;

    const plainDomTree = plain(expectedDomTree);

    expect(studentTableComponent.html()).to.be.equal(plainDomTree);

  });
});
