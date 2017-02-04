import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../parse/multilineTrim';
import {ValidationComponent} from '../validation';

describe('ValidationComponent', () => {
  it('should be defined', () => {
    // Act
    const component = shallow(
      <ValidationComponent />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('should renders as expected when has no errors', () => {
    // Arrange
    const expectedComponent = `
      <div class="form-group">
        <h1>test field</h1>
      </div>
    `;
    // Act
    const component = shallow(
      <ValidationComponent>
        <h1>test field</h1>
      </ValidationComponent>,
    );

    // Assert
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });

  it('should renders as expected when has errors', () => {
    // Arrange
    const expectedComponent = `
      <div class="form-group has-error">
        <h1>test field</h1>
      </div>
    `;
    // Act
    const component = shallow(
      <ValidationComponent
        error={'This is a error'}
      >
        <h1>test field</h1>
      </ValidationComponent>,
    );

    // Assert
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });
});
