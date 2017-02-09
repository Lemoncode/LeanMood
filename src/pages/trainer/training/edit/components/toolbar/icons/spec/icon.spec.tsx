import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../../common/parse/multilineTrim';
import {Icon} from '../icon';

describe('Icon', () => {
  it('should be defined', () => {
    // Act
    const component = shallow(
      <Icon icon={null} />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('should renders as expected', () => {
    // Arrange
    const icon = 'test icon';

    const expectedComponent = `
      <span class="test icon">
      </span>
    `;
    // Act
    const component = shallow(
      <Icon icon={icon} />,
    );

    // Assert
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });
});
