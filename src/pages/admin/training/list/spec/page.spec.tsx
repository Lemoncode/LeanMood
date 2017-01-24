import {mount, shallow} from 'enzyme';
import * as React from 'react';
import { TrainingSummary } from '../../../../../model/trainingSummary';
import { TrainingTableComponent } from '../components/trainingTable';
import { ListTrainingPage } from '../page';

describe('admin/training/list/page', () => {
  it('is defined', () => {
    // Arrange
    const trainings: TrainingSummary[] = [
      {
       id : 1,
       isActive: true,
       name : 'Antonio',
      },
      {
        id: 2,
        isActive: true,
        name : 'Santi',
      },
    ];

    const dummyFetchTrainings = () => {};
    // Act
    const page = shallow(
      <ListTrainingPage trainingList={trainings} fetchTrainings={dummyFetchTrainings}/>,
    );
    // Assert
    expect(page).not.to.be.undefined;
  });

  it('renders a training table Shallow', () => {
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

    const dummyFetchTrainings = () => {};

    // Act
    const pageWrapper = shallow(
      <ListTrainingPage trainingList={trainings} fetchTrainings={dummyFetchTrainings}/>,
    );

    // Assert
    expect(pageWrapper.children().at(0).type()).to.be.equal(TrainingTableComponent);
  });

  // sinon.test(
  it('renders a training table Mount', () => {
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

    const dummyFetchTrainingsSpy = sinon.spy();

    // Act
    const pageWrapper = mount(
      <ListTrainingPage trainingList={trainings} fetchTrainings={dummyFetchTrainingsSpy}/>,
    );

    // Assert
    expect(dummyFetchTrainingsSpy.calledOnce).to.be.true;
  });

});
