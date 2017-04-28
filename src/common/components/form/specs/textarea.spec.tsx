import * as React from 'react';
import { shallow } from 'enzyme';
import { multilineTrim } from '../../../../common/parse/multilineTrim';
import { TextAreaComponent, TextAreaComponentProps } from '../textarea';
import { ValidationComponent } from '../validation';

/* tslint:disable:max-line-length */
describe('TextAreaComponent', () => {
  it('should use a ValidationComponent', () => {
    // Arrange
    const props: TextAreaComponentProps = {
      label: 'label',
      name: 'textarea',
      onChange: () => { },
      value: '',
    };

    // Act
    const textareaComponent = shallow(
      <TextAreaComponent {...props} />,
    );

    expect(textareaComponent.find(ValidationComponent)).to.have.lengthOf(1);
  });

  it('should render the expected DOM tree', () => {
    // Arrange
    const props: TextAreaComponentProps = {
      label: 'label',
      name: 'textarea',
      onChange: () => { },
      value: 'foo',
    };
    const expectedHTML = multilineTrim(`
      <div class="form-group clearfix">
        <label for="${props.name}">
          ${props.label}
        </label>
        <div>
          <textarea name="${props.name}" class="form-control">
            ${props.value}
          </textarea>
        </div>
        <div class="help-block"></div>
      </div>
    `);

    // Act
    const textareaComponent = shallow(
      <TextAreaComponent {...props} />,
    );

    expect(textareaComponent.html()).to.be.equals(expectedHTML);
  });

  it('should render the expected DOM tree with optional props', () => {
    // Arrange
    const props: TextAreaComponentProps = {
      label: 'label',
      name: 'textarea',
      onChange: () => { },
      value: 'foo',
      placeholder: 'textarea placeholder',
      labelClassName: 'control-label',
      className: 'rounded',
      error: 'Mandatory field',
      cols: 4,
      rows: 5,
      wrapperClassName: 'col-xs-10',
    };
    const expectedHTML = multilineTrim(`
      <div class="form-group clearfix has-error">
        <label for="${props.name}" class="${props.labelClassName}">
          ${props.label}
        </label>
        <div class="${props.wrapperClassName}">
          <textarea cols="${props.cols}" rows="${props.rows}" name="${props.name}" class="form-control rounded" placeholder="${props.placeholder}">
            ${props.value}
          </textarea>
        </div>
        <div class="help-block">${props.error}</div>
      </div>
    `);

    // Act
    const textareaComponent = shallow(
      <TextAreaComponent {...props} />,
    );

    expect(textareaComponent.html()).to.be.equals(expectedHTML);
  });

  it('should trigger call passed onChange prop in onChange event', () => {
    // Arrange
    const onChange = sinon.spy();
    const props: TextAreaComponentProps = {
      label: 'label',
      name: 'textarea',
      onChange,
      value: 'foo',
    };

    // Act
    const textareaComponent = shallow(
      <TextAreaComponent {...props} />,
    );
    textareaComponent.find('textarea').simulate('change');

    expect(onChange.calledOnce).to.be.true;
  });

  it('should trigger call passed onBlur prop in onBlur event', () => {
    // Arrange
    const onBlur = sinon.spy();
    const props: TextAreaComponentProps = {
      label: 'label',
      name: 'textarea',
      onChange: () => { },
      onBlur,
      value: 'foo',
    };

    // Act
    const textareaComponent = shallow(
      <TextAreaComponent {...props} />,
    );
    textareaComponent.find('textarea').simulate('blur');

    expect(onBlur.calledOnce).to.be.true;
  });
});
