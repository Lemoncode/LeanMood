import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../../common/parse/multilineTrim';
import {ImageIcon} from '../imageIcon';

describe('ImageIcon', () => {
  it('is defined', () => {
    // Arrange

    // Act
    const component = shallow(
      <ImageIcon />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('is defined', () => {
    // Arrange
    const expectedComponent = `
      <span class="glyphicon glyphicon-picture">
      </span>
    `;

    // Act
    const component = shallow(
      <ImageIcon />,
    );

    // Assert
    expect(component.html()).to.equals(multilineTrim(expectedComponent));
  });
});
