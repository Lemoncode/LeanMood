import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../../common/parse/multilineTrim';
import {LinkIcon} from '../linkIcon';

describe('LinkIcon', () => {
  it('is defined', () => {
    // Arrange

    // Act
    const component = shallow(
      <LinkIcon />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('is defined', () => {
    // Arrange
    const expectedComponent = `
      <span class="glyphicon glyphicon-link">
      </span>
    `;

    // Act
    const component = shallow(
      <LinkIcon />,
    );

    // Assert
    expect(component.html()).to.equals(multilineTrim(expectedComponent));
  });
});
