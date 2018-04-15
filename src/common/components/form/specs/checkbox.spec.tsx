import * as React from 'react';
import { shallow } from 'enzyme';
import { multilineTrim } from '../../../parse/multilineTrim';
import { CheckboxComponent ,CheckboxComponentProps} from '../checkbox';

describe('CheckboxComponent', () => {
  it('should be defined', () => {
    // Arrange
    const props: CheckboxComponentProps = {
      name: '',
      label: '',
      value: true,
      labelClassName : '',
      onChange: () => { },
    };

    // Act
    const component = shallow(
      <CheckboxComponent {...props} />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });
  
  // it('should calls to onChange', () => {
  //   // Arrange
  //   const props: CheckboxComponentProps = {
  //     name: 'Test name',dd
  //     label: 'Test label',
  //     value: true,
  //     onChange: sinon.spy(),
  //     labelClassName: 'Test label class name'
  //   };

  //   // Act
  //   const component = shallow(
  //     <CheckboxComponent {...props} />,
  //   );

  //   component.find('input').simulate('change');

  //   // Assert
  //   expect(props.onChange.called).to.be.true;
  // });
  
});
