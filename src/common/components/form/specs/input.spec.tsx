import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../parse/multilineTrim';
import {InputComponent} from '../input';

describe('InputComponent', () => {
  it('should be defined', () => {
    // Arrange
    const props = {
      name: '',
      label: '',
      value: '',
      type: '',
      onChange: () => {},
    };

    // Act
    const component = shallow(
      <InputComponent {...props} />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('should renders as expected', () => {
    // Arrange
    const props = {
      name: 'Test name',
      label: 'Test label',
      value: 'Test value',
      type: 'Test type',
      onChange: () => {},
    };

    const expectedComponent = `
      <div class="form-group">
        <label for="${props.name}">${props.label}</label>
        <input type="${props.type}" name="${props.name}" class="form-control" value="${props.value}"
        />
        <div class="help-block">
        </div>
      </div>
    `;

    // Act
    const component = shallow(
      <InputComponent {...props} />,
    );

    // Assert
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });

  it('should renders as expected with optional properties', () => {
    // Arrange
    const props = {
      name: 'Test name',
      label: 'Test label',
      value: 'Test value',
      type: 'Test type',
      onChange: () => {},
      placeholder: 'Test placeholder',
      onBlur: () => {},
    };

    /* tslint:disable */
    const expectedComponent = `
      <div class="form-group">
        <label for="${props.name}">${props.label}</label>
        <input type="${props.type}" name="${props.name}" class="form-control" placeholder="${props.placeholder}" value="${props.value}"
        />
        <div class="help-block">
        </div>
      </div>
    `;
    /* tslint:enable */

    // Act
    const component = shallow(
      <InputComponent {...props} />,
    );

    // Assert
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });

  it('should calls to onChange', () => {
    // Arrange
    const props = {
      name: 'Test name',
      label: 'Test label',
      value: 'Test value',
      type: 'Test type',
      onChange: sinon.spy(),
      placeholder: 'Test placeholder',
      onBlur: () => {},
    };

    // Act
    const component = shallow(
      <InputComponent {...props} />,
    );

    component.find('input').simulate('change');

    // Assert
    expect(props.onChange.called).to.be.true;
  });

  it('should calls to onBlur', () => {
    // Arrange
    const props = {
      name: 'Test name',
      label: 'Test label',
      value: 'Test value',
      type: 'Test type',
      onChange: sinon.spy(),
      placeholder: 'Test placeholder',
      onBlur: sinon.spy(),
    };

    // Act
    const component = shallow(
      <InputComponent {...props} />,
    );

    component.find('input').simulate('blur');

    // Assert
    expect(props.onBlur.called).to.be.true;
  });
});
