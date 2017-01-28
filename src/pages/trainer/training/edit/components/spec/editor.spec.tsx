import {expect} from 'chai';
import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {multilineTrim} from '../../../../../../common/parse/multilineTrim';
import {ToolbarComponent} from '../toolbar';
import {EditorComponent} from '../editor';

describe('EditorComponent', () => {
  it('is defined', () => {
    // Arrange
    const content = '';
    const dummyOnContentChange = () => {};
    const dummyInitializeTextAreaElement = () => {};
    const dummyOnToolbarButtonClick = () => {};

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        onContentChange={dummyOnContentChange}
        initializeTextAreaElement={dummyInitializeTextAreaElement}
        onToolbarButtonClick={dummyOnToolbarButtonClick}
      />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('renders a text area with expected content', () => {
    // Arrange
    const content = 'Test content';
    const dummyOnContentChange = () => {};
    const dummyInitializeTextAreaElement = () => {};
    const dummyOnToolbarButtonClick = () => {};

    /* tslint:disable */
    let expectedTextArea: HTMLTextAreaElement;
    /* tslint:enable */
    const expectedComponent = (
      <div>
        <ToolbarComponent
          textArea={expectedTextArea}
          updateTextArea={dummyOnToolbarButtonClick}
        />
        <textarea
          onChange={dummyOnContentChange}
          ref={this.expectedTextArea}
          value={content}
        />
      </div>
    );

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        onContentChange={dummyOnContentChange}
        initializeTextAreaElement={dummyInitializeTextAreaElement}
        onToolbarButtonClick={dummyOnToolbarButtonClick}
      />,
    );

    // Assert
    expect(component.equals(expectedComponent)).to.be.true;
  });

  it('calls to onContentChange function when update content', () => {
    // Arrange
    const content = 'Test content';
    const onContentChangeSpy = sinon.spy();
    const dummyInitializeTextAreaElement = () => {};
    const dummyOnToolbarButtonClick = () => {};

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        onContentChange={onContentChangeSpy}
        initializeTextAreaElement={dummyInitializeTextAreaElement}
        onToolbarButtonClick={dummyOnToolbarButtonClick}
      />,
    );

    component.find('textarea').simulate('change');

    // Assert
    expect(onContentChangeSpy.called).to.true;
  });

  it('calls to initializeTextAreaElement function when render component', () => {
    // Arrange
    const content = 'Test content';
    const onContentChangeSpy = () => {};
    const initializeTextAreaElementSpy = sinon.spy();
    const dummyOnToolbarButtonClick = () => {};

    // Act
    const component = mount(
      <EditorComponent
        content={content}
        onContentChange={onContentChangeSpy}
        initializeTextAreaElement={initializeTextAreaElementSpy}
        onToolbarButtonClick={dummyOnToolbarButtonClick}
      />,
    );

    // Assert
    expect(initializeTextAreaElementSpy.calledOnce).to.true;
  });

  it('calls to onToolbarButtonClick function when click a toolbar button', () => {
    // Arrange
    const content = 'Test content';
    const onContentChangeSpy = () => {};
    const dummyInitializeTextAreaElement = () => {};
    const onToolbarButtonClickSpy = sinon.spy();

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        onContentChange={onContentChangeSpy}
        initializeTextAreaElement={dummyInitializeTextAreaElement}
        onToolbarButtonClick={onToolbarButtonClickSpy}
      />,
    );

    component.find(ToolbarComponent).prop('updateTextArea')();

    // Assert
    expect(onToolbarButtonClickSpy.called).to.true;
  });
});
