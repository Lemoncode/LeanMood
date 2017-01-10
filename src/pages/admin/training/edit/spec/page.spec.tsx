import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { Training } from '../../../../../model/training';
import { TrainingForm } from '../components/trainingForm';
import { EditTrainingPage } from '../page';

describe('pages/admin/training/edit/page', () => {

    it('should be defined', () => {
        // Arrange
        let editTraining: Training;
        editTraining = new Training();
        editTraining.id = 32;
        editTraining.name = 'React/redux';
        editTraining.isActive = true;
        editTraining.start = new Date(2016, 12, 1);
        editTraining.end = new Date(2016, 12, 31);

        // Act
        const editTrainingPage = shallow(
        <EditTrainingPage editTraining={editTraining} getTraining = {() => {}} />,
        );

        // Assert
        expect(editTrainingPage).not.to.be.undefined;
    });

    it('should mount trainingForm component', () => {
        // Arrange
        let editTraining: Training;
        editTraining = new Training();
        editTraining.id = 32;
        editTraining.name = 'React/redux';
        editTraining.isActive = true;
        editTraining.start = new Date(2016, 12, 1);
        editTraining.end = new Date(2016, 12, 31);

        // Act
        const editTrainingPage = shallow(
          <EditTrainingPage editTraining={editTraining} getTraining = {() => {}} />,
        );
        // Assert
        expect(editTrainingPage.childAt(0).type()).to.be.equal(TrainingForm);
    });
});
