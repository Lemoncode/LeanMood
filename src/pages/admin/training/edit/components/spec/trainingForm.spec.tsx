import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import { TrainingForm } from '../trainingForm';

describe('pages/admin/training/edit/component/trainingForm', () => {
    it('should be defined', () => {
        // Arrange

        // Act
        const editTrainingPage = shallow(
            <TrainingForm/>
        )

        // Assert
        expect(TrainingForm).not.to.be.undefined;
    });

    it('should display a form with basic training data', () => {
        // Arrange

        // Act
        const trainingForm = shallow(
            <TrainingForm/>
        )
        const expectedDomTree = `
        <form class="col-xs-10 col-xs-offset-1">
        </form>`;
        // const expectedPlainDomTree = expectedDomTree.replace(/(?:\r\n|\r|\n|\s)/g, '');
        const expectedPlainDomTree = expectedDomTree.split(/(?:\r\n|\r|\n)/g).map(line => line.trim()).join('');
        // Assert
        expect(trainingForm.html()).to.be.equal(expectedPlainDomTree);
    });

});