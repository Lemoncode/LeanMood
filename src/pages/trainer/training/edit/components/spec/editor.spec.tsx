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

    const expectedTextArea = `
      <textarea>
        ${content}
      </textarea>
    `;

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        onContentChange={dummyOnContentChange}
        onToolbarButtonClick={dummyOnToolbarButtonClick}
      />,
    );

    // Assert
    expect(component.type()).to.equal('div');
    expect(component.childAt(0).type()).to.equal(ToolbarComponent);
    expect(component.childAt(1).html()).to.equal(multilineTrim(expectedTextArea));
  });

  it('calls to onContentChange function when update content', () => {
    // Arrange
    const content = 'Test content';
    const onContentChangeSpy = sinon.spy();
    const dummyInitializeTextAreaElement = () => {};
    const dummyOnToolbarButtonClick = () => {};

    // Act
    const component = mount(
      <EditorComponent
        content={content}
        onContentChange={onContentChangeSpy}
        onToolbarButtonClick={dummyOnToolbarButtonClick}
      />,
    );

    component.find('textarea').simulate('change');

    // Assert
    expect(onContentChangeSpy.calledWith(content)).to.true;
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
        onToolbarButtonClick={onToolbarButtonClickSpy}
      />,
    );

    component.find(ToolbarComponent).prop('updateTextArea')();

    // Assert
    expect(onToolbarButtonClickSpy.called).to.true;
  });
});
