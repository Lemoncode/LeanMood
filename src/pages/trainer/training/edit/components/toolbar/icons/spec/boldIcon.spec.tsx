import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../../common/parse/multilineTrim';
import {BoldIcon} from '../boldIcon';

describe('BoldIcon', () => {
  it('is defined', () => {
    // Arrange

    // Act
    const component = shallow(
      <BoldIcon />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('is defined', () => {
    // Arrange
    const expectedComponent = `
      <span class="glyphicon glyphicon-bold">
      </span>
    `;

    // Act
    const component = shallow(
      <BoldIcon />,
    );

    // Assert
    expect(component.html()).to.equals(multilineTrim(expectedComponent));
  });
});
