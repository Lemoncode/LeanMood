import * as React from 'react';
import { shallow } from 'enzyme';
import { multilineTrim } from '../../../../common/parse/multilineTrim';
import { SelectComponent, CommonInputProps } from '../';
import { ValidationComponent } from '../validation';

/* tslint:disable:max-line-length */
describe('SelectComponent', () => {
  it('should use a ValidationComponent', () => {
    // Arrange
    const props: CommonInputProps = {
      label: 'label',
      name: 'myList',
      onChange: () => { },
      value: '',
    };

    // Act
    const selectComponent = shallow(
      <SelectComponent {...props}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </SelectComponent>,
    );

    expect(selectComponent.type()).to.be.equals(ValidationComponent);
  });

  it('should render the expected DOM tree', () => {
    // Arrange
    const props: CommonInputProps = {
      label: 'label',
      name: 'myList',
      onChange: () => { },
      value: 1,
    };
    const expectedHTML = multilineTrim(`
      <div class="form-group clearfix">
        <label for="${props.name}">
          ${props.label}
        </label>
        <div>
          <select name="${props.name}" class="form-control">
            <option selected="" value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </div>
        <div class="help-block"></div>
      </div>
    `);

    // Act
    const selectComponent = shallow(
      <SelectComponent {...props}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </SelectComponent>,
    );

    expect(selectComponent.html()).to.be.equals(expectedHTML);
  });

  it('should render the expected DOM tree with optional props', () => {
    // Arrange
    const props: CommonInputProps = {
      label: 'label',
      name: 'myList',
      onChange: () => { },
      value: 2,
      labelClassName: 'control-label',
      error: 'Mandatory field',
      wrapperClassName: 'col-xs-10',
      disabled: true,
    };
    const expectedHTML = multilineTrim(`
      <div class="form-group clearfix has-error">
        <label for="${props.name}" class="${props.labelClassName}">
          ${props.label}
        </label>
        <div class="${props.wrapperClassName}">
          <select name="${props.name}" class="form-control" disabled="">
            <option value="1">Option 1</option>
            <option selected="" value="2">Option 2</option>
          </select>
        </div>
        <div class="help-block">${props.error}</div>
      </div>
    `);

    // Act
    const selectComponent = shallow(
      <SelectComponent {...props}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </SelectComponent>,
    );

    expect(selectComponent.html()).to.be.equals(expectedHTML);
  });

  it('should trigger call passed onChange prop in onChange event', () => {
    // Arrange
    const onChange = sinon.spy();
    const props: CommonInputProps = {
      label: 'label',
      name: 'textarea',
      onChange,
      value: 1,
    };

    // Act
    const selectComponent = shallow(
      <SelectComponent {...props}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </SelectComponent>,
    );
    selectComponent.find('select').simulate('change');

    expect(onChange.calledOnce).to.be.true;
  });

  it('should trigger call passed onBlur prop in onBlur event', () => {
    // Arrange
    const onBlur = sinon.spy();
    const props: CommonInputProps = {
      label: 'label',
      name: 'textarea',
      onChange: () => { },
      onBlur,
      value: 1,
    };

    // Act
    const selectComponent = shallow(
      <SelectComponent {...props}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </SelectComponent>,
    );
    selectComponent.find('select').simulate('blur');

    expect(onBlur.calledOnce).to.be.true;
  });
});
