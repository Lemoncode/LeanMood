import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../../common/parse/multilineTrim';
import {BulletedListIcon} from '../bulletedListIcon';

describe('BulletedListIcon', () => {
  it('is defined', () => {
    //Arrange

    //Act
    const component = shallow(
      <BulletedListIcon />
    );

    //Assert
    expect(component).not.to.be.undefined;
  });

  it('is defined', () => {
    //Arrange
    const expectedComponent = `
      <span class="glyphicon glyphicon-th-list">
      </span>
    `;

    //Act
    const component = shallow(
      <BulletedListIcon />
    );

    //Assert
    expect(component.html()).to.equals(multilineTrim(expectedComponent));
  });
});
