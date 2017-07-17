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
       start: new Date(),
       end: new Date(),
      },
      {
        id: 2,
        isActive: true,
        name : 'Santi',
        start: new Date(),
        end: new Date(),
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

  it('should renders a header', () => {
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

    const dummyFetchTrainings = () => {};

    // Act
    const pageWrapper = shallow(
      <ListTrainingPage trainingList={trainings} fetchTrainings={dummyFetchTrainings}/>,
    );

    const header = pageWrapper.childAt(0);

    // Assert
    expect(header.type()).to.be.equals('h1');
    expect(header.childAt(0).text()).to.be.equals('Active Trainigs');

  });

  // sinon.test(
  it('renders a training table Mount', () => {
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

    const dummyFetchTrainingsSpy = sinon.spy();

    // Act
    const pageWrapper = mount(
      <ListTrainingPage trainingList={trainings} fetchTrainings={dummyFetchTrainingsSpy}/>,
    );

    // Assert
    expect(dummyFetchTrainingsSpy.calledOnce).to.be.true;
  });

});
