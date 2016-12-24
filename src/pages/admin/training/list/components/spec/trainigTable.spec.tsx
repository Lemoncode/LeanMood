import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { TrainingTableComponent } from '../trainingTable';
import { TrainingSummary } from '../../../../../../model/trainingSummary';

describe('TrainingTabletComponent', () => {
  it('Should not be undefined', () => {
    // Act
    const trainingTableComponent = shallow(
      <TrainingTableComponent trainingList={[]}/>
    );

    // Assert
    expect(trainingTableComponent).not.to.be.undefined;

  });

  it('Should display trainings tabular data', () => {
    // TODO: This is the good one, pending move to common and add specs
    const plain = str => str.split(/(?:\r\n|\n|\r)/).map(line => line.trim()).join('');

    // Arrange
    const trainings : TrainingSummary[] = [
      {
        id: 2,
        name: 'John Doe',
        isActive: true
      },
      {
        id: 3,
        name: 'Mark Somez',
        isActive: false
      }
    ];

    // Act
    const trainingTableComponent = shallow(
      <TrainingTableComponent trainingList={trainings}/>
    )

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

    const plainDomTree = plain(expectedDomTree);

    expect(trainingTableComponent.html()).to.be.equal(plainDomTree);

  });

});
