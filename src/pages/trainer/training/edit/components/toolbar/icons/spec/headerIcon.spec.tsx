import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../../common/parse/multilineTrim';
import {HeaderIcon} from '../headerIcon';

describe('HeaderIcon', () => {
  it('is defined', () => {
    // Arrange

    // Act
    const component = shallow(
      <HeaderIcon />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('is defined', () => {
    // Arrange
    const expectedComponent = `
      <span class="glyphicon glyphicon-header">
      </span>
    `;

    // Act
    const component = shallow(
      <HeaderIcon />,
    );

    // Assert
    expect(component.html()).to.equals(multilineTrim(expectedComponent));
  });
});
