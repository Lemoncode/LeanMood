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

  it('should render the training name', () => {
    // Arrange
    const trainingSummary = new TrainingSummary();
    trainingSummary.id = 1;
    trainingSummary.name = 'React';
    trainingSummary.isActive = true;
    const props = {
      className: 'rowClassName',
      columns: [],
      index: 0,
      isScrolling: false,
      rowData: trainingSummary,
      style: { color: 'red' },
    };

    // Act
    const trainingRowComponent = shallow(
      <TrainingRowComponent {...props}/>,
    );

    // Assert
    expect(trainingRowComponent.hasClass('rowClassName')).to.be.true;
    expect(trainingRowComponent.prop('columns')).to.be.deep.equals([]);
    expect(trainingRowComponent.prop('index')).to.be.equals(0);
    expect(trainingRowComponent.prop('isScrolling')).to.be.false;
    expect(trainingRowComponent.prop('rowData')).to.be.equals(trainingSummary);
    expect(trainingRowComponent.prop('style')).to.be.deep.equals({ color: 'red' });
  });
});
