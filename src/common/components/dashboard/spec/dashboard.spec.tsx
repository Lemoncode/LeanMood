import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../parse/multilineTrim';
import {DashboardComponent} from '../dashboard';

describe('DashboardComponent', () => {
  it('should be defined', () => {
    // Arrange

    // Act
    const component = shallow(
      <DashboardComponent
        title={''}
        items={[]}
      />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('should render as expected', () => {
    // Arrange

    // Act
    const component = shallow(
      <DashboardComponent
        title={''}
        items={[]}
      />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });
});
