import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import * as React from 'react';
import { CenteredContainer } from '../centered';
import { multilineTrim }  from '../../../common/parse/multilineTrim';

describe('CenteredContainer', () => {

    it('should be defined', () => {
        //Arrange
        //Act
        const centeredContainer = shallow(
            <CenteredContainer/>
        )
        //Assert
        expect(centeredContainer).not.to.be.undefined;
    });

    it('Should display children content centered', () => {
        // Arrange
        // Act
        const centeredContainer = shallow(
            <CenteredContainer>
                <div>test content children</div>
            </CenteredContainer>
        )

        // Assert
        const expectedDomTree = `
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-offset-4">
                        <div class="panel panel-default">
                                <div>test content children</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const plainDomTree = multilineTrim(expectedDomTree);

        expect(centeredContainer.html()).to.be.equal(plainDomTree);

  });

});