import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import * as React from 'react';
import { CenteredContainer } from '../centered';

describe('CenteredContainer', () => {
    const plain = str => str.split(/(?:\r\n|\r|\n)/g).map(line => line.trim()).join('');

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

        const plainDomTree = plain(expectedDomTree);

        expect(centeredContainer.html()).to.be.equal(plainDomTree);

  });

});