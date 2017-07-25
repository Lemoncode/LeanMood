import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import {ProgressBarComponent} from '../progressBarComponent';

describe('ProgressBarComponent', () => {

  it('should render a progress element', () => {
    // Act
    const progressBarComponent = shallow(
      <ProgressBarComponent current={5} max={10} />,
    );

    // Assert
    expect(progressBarComponent.type()).to.be.equals('progress');
  });

  it('should render the progress tag', () => {
    // Act
    const progressBarComponent = shallow(
      <ProgressBarComponent current={5} max={10} />,
    );

    // Assert
    expect(progressBarComponent.prop('max')).to.be.equal(10);
    expect(progressBarComponent.prop('value')).to.be.equal(5);
  });
});
