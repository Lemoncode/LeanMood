import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { TrainingEntity } from '../../../../../../model/training';

import { TrainingForm } from '../trainingForm';

describe('pages/admin/training/edit/component/trainingForm', () => {

    let editTraining: TrainingEntity;
    beforeEach(() => {
        editTraining = new TrainingEntity();
        editTraining.id = 32;
        editTraining.name = 'React/redux';
        editTraining.isActive = true;
        editTraining.start = new Date(2016, 12, 1);
        editTraining.end = new Date(2016, 12, 31);
    });

    it('should be defined', () => {
        // Arrange
        // Act
        const editTrainingPage = shallow(
            <TrainingForm training={editTraining}/>
        )
        // Assert
        expect(TrainingForm).not.to.be.undefined;
    });

    it('should display a form with basic training data', () => {
        // Arrange
        // Act
        const trainingForm = shallow(<TrainingForm training={editTraining}/>);
        // const expectedDomTree = `
        // <form class="col-xs-10 col-xs-offset-1">
        //     <h2>Training form</h2>
        //     <span id="name">Name: ${editTraining.name}</span>
        //     <span id="dates">Start: ${editTraining.start.toDateString()} - End: ${editTraining.end.toDateString()}</span> 
        // </form>`;
        // const expectedPlainDomTree = expectedDomTree.split(/(?:\r\n|\r|\n)/g).map(line => line.trim()).join('');
        let h2 = trainingForm.find({ id: 'formTitle'});
        let spanName = trainingForm.find({ id: 'name' });
        let checkbox = trainingForm.find({ type: 'checkbox' });
        let spanDates = trainingForm.find({ id: 'dates' });

        // Assert
        // expect(trainingForm.html()).to.be.equal(expectedPlainDomTree);
        expect(h2.text()).to.equal("Training form");
        expect(spanName.text()).to.be.equal("Name: " + editTraining.name);
        expect(checkbox.props().checked).to.be.equal(true);
        expect(spanDates.text()).to.be.equal("Start: " + editTraining.start.toDateString() + 
            " - End: " + editTraining.end.toDateString());
    });

});