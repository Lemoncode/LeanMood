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
    expect(component.type()).to.equal('div');
    expect(component.childAt(0).type()).to.equal(LoginFormContainerComponent);
    expect(component.childAt(1).type()).to.equal('footer');
    expect(component.childAt(1).childAt(0).type()).to.equal(Link);
  });
});
