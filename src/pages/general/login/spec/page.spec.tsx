import * as React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'react-router';
import {multilineTrim} from '../../../../common/parse/multilineTrim';
import {LoginFormContainerComponent} from '../components/loginForm/loginFormContainer';
import {LoginPage} from '../page';

describe('LoginPage', () => {
  it('should be defined', () => {
    // Act
    const component = shallow(
      <LoginPage />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('should renders as expected', () => {
    // Act
    const component = shallow(
      <LoginPage />,
    );

    // Assert
    expect(component.find(LoginFormContainerComponent)).to.have.lengthOf(1);
  });
});
