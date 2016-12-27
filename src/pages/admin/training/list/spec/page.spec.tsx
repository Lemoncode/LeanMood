import { expect } from 'chai';
import {mount, shallow} from 'enzyme';

import * as React from 'react';
import { TrainingSummary } from '../../../../../model/trainingSummary';
import { ListTrainingPage } from '../page';
import { TrainingTableComponent } from '../components/trainingTable';

describe('admin/training/list/page', () => {
  it('is defined', () => {
    //Arrange
    const trainings : TrainingSummary[] = [
      {
       id : 1,
       name : 'Antonio',
       isActive: true
      },
      {
        id: 2,
        name : 'Santi',
        isActive: true
      }
    ];

    const dummyFetchTrainings = () => {};
    //Act
    const page = shallow(
      <ListTrainingPage trainingList={trainings} fetchTrainings={dummyFetchTrainings}/>
    );
    //Assert
    expect(page).not.to.be.undefined;
  })

  it('renders a training table Shallow', () => {
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

    const dummyFetchTrainings = () => {};

    // Act
    const pageWrapper = shallow(
      <ListTrainingPage trainingList={trainings} fetchTrainings={dummyFetchTrainings}/>
    );

    // Assert
    expect(pageWrapper.children().at(0).type()).to.be.equal(TrainingTableComponent);
  });

  //sinon.test(
  it('renders a training table Mount', () => {
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

    const dummyFetchTrainingsSpy = sinon.spy();

    // Act
    const pageWrapper = mount(
      <ListTrainingPage trainingList={trainings} fetchTrainings={dummyFetchTrainingsSpy}/>
    );

    // Assert
    expect(dummyFetchTrainingsSpy.calledOnce).to.be.true;
  });

});
