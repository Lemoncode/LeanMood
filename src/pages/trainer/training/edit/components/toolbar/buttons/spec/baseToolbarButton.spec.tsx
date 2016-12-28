import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../../common/parse/multilineTrim';
import {BaseToolbarButton} from '../baseToolbarButton';

describe('BaseToolbarButton', () => {
  it('is defined', () => {
    //Arrange

    //Act
    const component = shallow(
      <BaseToolbarButton onClick={() =>{}}/>
    );

    //Assert
    expect(component).not.to.be.undefined;
  });

  it('renders as expected without children', () => {
    //Arrange
    const expectedComponent = `
      <button type="button" class="btn btn-default">
      </button>
    `;

    //Act
    const component = shallow(
      <BaseToolbarButton onClick={() =>{}}/>
    );

    //Assert
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });

  it('renders as expected with children', () => {
    //Arrange
    const expectedComponent = `
      <button type="button" class="btn btn-default">
        <div></div>
      </button>
    `;

    //Act
    const component = shallow(
      <BaseToolbarButton onClick={() =>{}}>
        <div></div>
      </BaseToolbarButton>
    );

    //Assert
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });

  it('calls to onClick prop when simulate a click', () => {
    //Arrange
    const onClickSpy = sinon.spy();

    //Act
    const component = shallow(
      <BaseToolbarButton onClick={onClickSpy}/>
    );

    component.simulate('click');

    //Assert
    expect(onClickSpy.calledOnce).to.be.true;
  });
});
