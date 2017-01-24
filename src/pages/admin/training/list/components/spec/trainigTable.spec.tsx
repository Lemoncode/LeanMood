import { shallow } from 'enzyme';
import * as React from 'react';

import { multilineTrim } from '../../../../../../common/parse/multilineTrim';
import { TrainingSummary } from '../../../../../../model/trainingSummary';
import { TrainingTableComponent } from '../trainingTable';

describe('TrainingTabletComponent', () => {
  it('Should not be undefined', () => {
    // Act
    const trainingTableComponent = shallow(
      <TrainingTableComponent trainingList={[]}/>,
    );

    // Assert
    expect(trainingTableComponent).not.to.be.undefined;

  });

  it('Should display trainings tabular data', () => {
    // Arrange
    const trainings: TrainingSummary[] = [
      {
        id: 2,
        isActive: true,
        name: 'John Doe',
      },
      {
        id: 3,
        isActive: false,
        name: 'Mark Somez',
      },
    ];

    // Act
    const trainingTableComponent = shallow(
      <TrainingTableComponent trainingList={trainings}/>,
    );

    // Assert
    const expectedDomTree = `
      <table>
        <tbody>
          <tr>
            <td>
              <span>
                2
              </span>
            </td>
            <td>
              <span>
                John Doe
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span>
                3
              </span>
            </td>
            <td>
              <span>
                Mark Somez
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      `;

    expect(trainingTableComponent.html()).to.be.equal(multilineTrim(expectedDomTree));
  });
});
