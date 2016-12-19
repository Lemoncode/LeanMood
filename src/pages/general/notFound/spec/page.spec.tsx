import {expect} from 'chai';
import {shallow} from 'enzyme';
import * as React from 'react';
import {NotFoundPage} from '../page';

describe('general/notFound/page', () => {
  it('is defined', () => {
    //Arrange

    //Act
    const page = shallow(
      <NotFoundPage />
    );

    //Assert
    expect(page).not.to.be.undefined;
  });
});
