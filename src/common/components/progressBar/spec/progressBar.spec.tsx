import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import {ProgressBarComponent} from '../progressBarComponent';

describe('ProgressBarComponent', () => {

  it('should be defined', () => {
    // Arrange
    // Act
    const progressBarComponent = shallow(
      <ProgressBarComponent  current={5} max={10} min={0} />
    )

    // Assert
    expect(progressBarComponent).not.to.be.undefined;
  });

  it('should render the progress tag', () => {
    // Arrange
    // Act
    const progressBarComponent = shallow(
      <ProgressBarComponent  current={5} max={10} min={0} />
    )

    // Assert
    const expectedDomTree = '<progress min="0" max="10" value="5"></progress>';

    expect(progressBarComponent.html()).to.be.equal(expectedDomTree);

  })

});