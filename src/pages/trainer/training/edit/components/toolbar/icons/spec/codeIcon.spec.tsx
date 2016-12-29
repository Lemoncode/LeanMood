import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../../common/parse/multilineTrim';
import {CodeIcon} from '../codeIcon';

describe('CodeIcon', () => {
  it('is defined', () => {
    //Arrange

    //Act
    const component = shallow(
      <CodeIcon />
    );

    //Assert
    expect(component).not.to.be.undefined;
  });

  it('is defined', () => {
    //Arrange
    const expectedComponent = `
    <div>
      <span class="glyphicon glyphicon-menu-left"></span>
      <span class="glyphicon glyphicon-menu-right"></span>
    </div>
    `;

    //Act
    const component = shallow(
      <CodeIcon />
    );

    //Assert
    expect(component.html()).to.equals(multilineTrim(expectedComponent));
  });
});
