import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { EditTrainingPage } from '../page';

describe('pages/admin/training/edit/page', () => {
    it('should be defined', () => {
        // Arrange

        // Act
        const editTrainingPage = shallow(
            <EditTrainingPage/>
        )

        // Assert
        expect(editTrainingPage).not.to.be.undefined;
    })
});