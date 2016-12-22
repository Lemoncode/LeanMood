import {expect} from 'chai';
import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../common/parse/multilineTrim';
import {ToolbarComponent} from '../index';

describe('ToolbarComponent', () => {
  it('is defined', () => {
    //Arrange

    //Act
    const component = shallow(
      <ToolbarComponent />
    );

    //Assert
    expect(component).not.to.be.undefined;
  });

  it('renders as expected', () => {
    //Arrange
    const expectedComponent = `
      <div class="btn-toolbar">
        <div class="btn-group">
        </div>
      </div>
    `;

    //Act
    const component = shallow(
      <ToolbarComponent />
    );

    //Assert
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });
});
