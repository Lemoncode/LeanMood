import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {multilineTrim} from '../../../../../../../../common/parse/multilineTrim';
import {ToolbarMarkdownButton} from '../toolbarMarkdownButton';

describe('ToolbarMarkdownButton', () => {
  it('is defined', () => {
    // Arrange
    const dummyOnClick = () => {};
    // Act
    const component = shallow(
      <ToolbarMarkdownButton
        mdCaret=""
        caretCursorPosition={0}
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
      <ToolbarMarkdownButton
        mdCaret=""
        caretCursorPosition={0}
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
      <ToolbarMarkdownButton
        mdCaret=""
        caretCursorPosition={0}
        onClick={dummyOnClick}
      >
        <div/>
      </ToolbarMarkdownButton>,
    );

    // Assert
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });

  it('calls to onClick prop when simulate a click', () => {
    // Arrange
    const onClickSpy = sinon.spy();
    const mdCaret = '_';
    const caretCursorPosition = 2;
    const panelId = 'test';
    const expectedMarkdownEntry = {
      mdCaret,
      caretCursorPosition,
      panelId,
    };

    // Act
    const component = mount(
      <ToolbarMarkdownButton
        mdCaret={mdCaret}
        caretCursorPosition={caretCursorPosition}
        panelId={panelId}
        onClick={onClickSpy}
      />,
    );

    component.simulate('click');

    // Assert
    expect(onClickSpy.calledOnce).to.be.true;
    expect(onClickSpy.calledWith(expectedMarkdownEntry)).to.be.true;
  });
});
