import { shallow, mount } from 'enzyme';
import * as React from 'react';

import { multilineTrim } from '../../../../../../common/parse/multilineTrim';
import { TrainingSummary } from '../../../../../../model/trainingSummary';
import { TrainingTableComponent } from '../trainingTable';

describe('TrainingTableComponent', () => {
  it('Should not be undefined', () => {
    // Arrange
    const trainingList = [];
    const width = 0;

    // Act
    const trainingTableComponent = shallow(
      <TrainingTableComponent width={width} trainingList={trainingList}/>,
    );

    // Assert
    expect(trainingTableComponent).not.to.be.undefined;

  });

  it('Should render as many rows as trainigs', () => {
    // Arrange
    const trainings: TrainingSummary[] = [
      {
        id: 2,
        isActive: true,
        name: 'John Doe',
        start: new Date(),
        end: new Date(),
      },
      {
        id: 3,
        isActive: false,
        name: 'Mark Somez',
        start: new Date(),
        end: new Date(),
      },
    ];

    const width = 600;

    // Act
    const trainingTableComponent = mount(
      <TrainingTableComponent width={width} trainingList={trainings}/>,
    );

    // Assert
    expect(trainingTableComponent.find('.ReactVirtualized__Table__row').length).to.be.equals(2);
  });
});
