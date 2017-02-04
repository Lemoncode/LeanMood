import { shallow } from 'enzyme';
import * as React from 'react';
import { multilineTrim } from '../../../../../../common/parse/multilineTrim';
import { StudentSummary } from '../../../../../../model/studentSummary';
import { StudentTableComponent } from '../studentTable';

describe('StudentTableComponent', () => {
  it('Should not be undefined', () => {
    // Act
    const studentTableComponent = shallow(
      <StudentTableComponent studentList={[]}/>,
    );

    // Assert
    expect(studentTableComponent).not.to.be.undefined;

  });

  it('Should display students tabular data', () => {
    // Arrange
    const students: StudentSummary[] = [
      {
        email: 'test@test.com',
        fullname: 'John Doe',
        id: 2,
      },
      {
        email: 'mark@test.com',
        fullname: 'Mark Somez',
        id: 3,
      },
    ];

    // Act
    const studentTableComponent = shallow(
      <StudentTableComponent studentList={students}/>,
    );

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

    expect(studentTableComponent.html()).to.be.equal(multilineTrim(expectedDomTree));
  });
});
