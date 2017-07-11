import { shallow } from 'enzyme';
import * as React from 'react';
import { multilineTrim } from '../../../../../../common/parse/multilineTrim';
import { TrainingSummary } from '../../../../../../model/trainingSummary';
import { TrainingRowComponent } from './../trainingRow';

describe('TrainingRowComponent', () => {

  it('should be defined', () => {
    // Arrange
    const training = new TrainingSummary();
    const props = {
      className: '',
      columns: [],
      index: 0,
      isScrolling: false,
      rowData: training,
      style: {},
    };

    // Act
    const trainingRowComponent = shallow(
            <TrainingRowComponent {...props}/>,
    );
    // Assert
    expect(trainingRowComponent).not.to.be.undefined;
  });

  it('should render the student name', () => {
    // Arrange
    const trainingSummary = new TrainingSummary();
    trainingSummary.id = 1;
    trainingSummary.name = 'john';
    trainingSummary.isActive = true;
    const props = {
      className: '',
      columns: [],
      index: 0,
      isScrolling: false,
      rowData: trainingSummary,
      style: {},
    };

    // Act
    const trainingRowComponent = shallow(
      <TrainingRowComponent {...props}/>,
    );

    // Assert
    const expectedDomTree = `
      <tr>
        <td>
          <span>
            1
          </span>
        </td>
        <td>
          <span>
            john
          </span>
        </td>
      </tr>
      `;

    expect(trainingRowComponent.html()).to.be.equal(multilineTrim(expectedDomTree));
  });

});
