import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../../common/parse/multilineTrim';
import {QuoteIcon} from '../quoteIcon';

describe('QuoteIcon', () => {
  it('is defined', () => {
    //Arrange

    //Act
    const component = shallow(
      <QuoteIcon />
    );

    //Assert
    expect(component).not.to.be.undefined;
  });

  it('is defined', () => {
    //Arrange
    const expectedComponent = `
      <span class="glyphicon glyphicon-menu-right">
      </span>
    `;

    //Act
    const component = shallow(
      <QuoteIcon />
    );

    //Assert
    expect(component.html()).to.equals(multilineTrim(expectedComponent));
  });
});
