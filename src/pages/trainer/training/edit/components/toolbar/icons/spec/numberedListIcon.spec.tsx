import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../../common/parse/multilineTrim';
import {NumberedListIcon} from '../numberedListIcon';

describe('NumberedListIcon', () => {
  it('is defined', () => {
    //Arrange

    //Act
    const component = shallow(
      <NumberedListIcon />
    );

    //Assert
    expect(component).not.to.be.undefined;
  });

  it('is defined', () => {
    //Arrange
    const expectedComponent = `
    <div>
      <span class="glyphicon glyphicon-sort-by-order"></span>
      <span class="glyphicon glyphicon-menu-hamburger"></span>
    </div>
    `;

    //Act
    const component = shallow(
      <NumberedListIcon />
    );

    //Assert
    expect(component.html()).to.equals(multilineTrim(expectedComponent));
  });
});
