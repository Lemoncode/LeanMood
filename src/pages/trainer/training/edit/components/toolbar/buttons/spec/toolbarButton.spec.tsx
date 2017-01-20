import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {multilineTrim} from '../../../../../../../../common/parse/multilineTrim';
import {ToolbarButton} from '../toolbarButton';

describe('BaseToolbarButton', () => {
  it('is defined', () => {
    // Arrange
    const dummyOnClick = () => {};
    // Act
    const component = shallow(
      <ToolbarButton
        textArea={null}
        caret=""
        offset={0}
        onClick={dummyOnClick}
      />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('renders as expected without children', () => {
    // Arrange
    const expectedComponent = `
      <button type="button" class="btn btn-default">
      </button>
    `;
    const dummyOnClick = () => {};
    // Act
    const component = shallow(
      <ToolbarButton
        textArea={null}
        caret=""
        offset={0}
        onClick={dummyOnClick}
      />,
    );

    // Assert
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });

  it('renders as expected with children', () => {
    // Arrange
    const expectedComponent = `
      <button type="button" class="btn btn-default">
        <div></div>
      </button>
    `;
    const dummyOnClick = () => {};
    // Act
    const component = shallow(
      <ToolbarButton
        textArea={null}
        caret=""
        offset={0}
        onClick={dummyOnClick}
      >
        <div/>
      </ToolbarButton>,
    );

    // Assert
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });

  it('calls to onClick prop when simulate a click', () => {
    // Arrange
    const onClickSpy = sinon.spy();
    const textArea = null;
    const caret = '_';
    const offset = 2;

    // Act
    const component = mount(
      <ToolbarButton
        textArea={textArea}
        caret={caret}
        offset={offset}
        onClick={onClickSpy}
      />,
    );

    component.simulate('click');

    // Assert
    expect(onClickSpy.calledOnce).to.be.true;
    expect(onClickSpy.calledWith(textArea, caret, offset)).to.be.true;
  });
});
