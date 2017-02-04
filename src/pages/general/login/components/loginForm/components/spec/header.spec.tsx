import * as React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../header';

describe('Header LoginFormComponent', () => {
  it('should be defined', () => {
    // Arrange

    // Act
    const component = shallow(
      <Header />,
    );
    // Assert
    expect(component).not.to.be.undefined;
  });

  it('should render as expected', () => {
    // Arrange
    const expectedComponent = `
      <div class="panel-heading">
        <h3 class="panel-title">Please sign in (login: admin | trainer | student / pwd: test)</h3>
      </div>
    `;

    // Act
    const component = shallow(
      <Header />,
    );
    // Assert
    expect(component).not.to.be.undefined;
  });
});
