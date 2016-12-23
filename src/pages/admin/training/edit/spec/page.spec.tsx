import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import * as React from 'react';
import { EditTrainingPage } from '../page';
import { TrainingForm } from '../components/trainingForm';
import { TrainingEntity } from '../../../../../model/training';

describe('pages/admin/training/edit/page', () => {


    it('should be defined', () => {
        // Arrange
        let editTraining: TrainingEntity;
        editTraining = new TrainingEntity();
        editTraining.id = 32;
        editTraining.name = 'React/redux';
        editTraining.isActive = true;
        editTraining.start = new Date(2016, 12, 1);
        editTraining.end = new Date(2016, 12, 31);

        // Act
        const editTrainingPage = shallow(
        <EditTrainingPage editTraining={editTraining} getTraining={() => {}} />
        )

        // Assert
        expect(editTrainingPage).not.to.be.undefined;
    })

    it('should mount trainingForm component', () => {
        // Arrange
        let editTraining: TrainingEntity;
        editTraining = new TrainingEntity();
        editTraining.id = 32;
        editTraining.name = 'React/redux';
        editTraining.isActive = true;
        editTraining.start = new Date(2016, 12, 1);
        editTraining.end = new Date(2016, 12, 31);
        
        // Act
        const editTrainingPage = shallow(<EditTrainingPage editTraining={editTraining} />);
        // Assert
        expect(editTrainingPage.childAt(0).type()).to.be.equal(TrainingForm);
    });
});