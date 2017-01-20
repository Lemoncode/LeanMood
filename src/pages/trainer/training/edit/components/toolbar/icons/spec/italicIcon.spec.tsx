import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../../common/parse/multilineTrim';
import {ItalicIcon} from '../italicIcon';

describe('ItalicIcon', () => {
  it('is defined', () => {
    // Arrange

    // Act
    const component = shallow(
      <ItalicIcon />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('is defined', () => {
    // Arrange
    const expectedComponent = `
      <span class="glyphicon glyphicon-italic">
      </span>
    `;

    // Act
    const component = shallow(
      <ItalicIcon />,
    );

    // Assert
    expect(component.html()).to.equals(multilineTrim(expectedComponent));
  });
});
