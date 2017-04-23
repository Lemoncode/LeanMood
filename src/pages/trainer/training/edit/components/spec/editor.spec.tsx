import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {multilineTrim} from '../../../../../../common/parse/multilineTrim';
import {ToolbarComponent} from '../toolbar';
import {IMarkdownEntry} from '../../../../../../model/trainer/markdownEntry';
import {textAreaTool} from '../../../../../../common/ui/tools/textAreaTool';
import {EditorComponent} from '../editor';

describe('EditorComponent', () => {
  it('is defined', () => {
    // Arrange
    const content = '';
    const cursorStartPosition = 0;
    const shouldUpdateEditorCursor = false;
    const className = '';
    const showPreview = false;
    const dummyOnContentChange = () => {};
    const dummyUpdateEditorCursor = () => {};
    const dummyTogglePreview = () => {};

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        cursorStartPosition={cursorStartPosition}
        shouldUpdateEditorCursor={shouldUpdateEditorCursor}
        className={className}
        onContentChange={dummyOnContentChange}
        updateEditorCursor={dummyUpdateEditorCursor}
        showPreview={showPreview}
        togglePreviewMode={dummyTogglePreview}
      />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('renders a text area with expected content', () => {
    // Arrange
    const content = 'Test content';
    const cursorStartPosition = 0;
    const shouldUpdateEditorCursor = false;
    const className = 'testClass';
    const showPreview = false;
    const dummyOnContentChange = () => {};
    const dummyUpdateEditorCursor = () => {};
    const dummyTogglePreview = () => {};

    const expectedEditor = `
      <textarea class="textArea">
        ${content}
      </textarea>
    `;

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        cursorStartPosition={cursorStartPosition}
        shouldUpdateEditorCursor={shouldUpdateEditorCursor}
        className={className}
        onContentChange={dummyOnContentChange}
        updateEditorCursor={dummyUpdateEditorCursor}
        showPreview={showPreview}
        togglePreviewMode={dummyTogglePreview}
      />,
    );

    // Assert
    expect(component.type()).to.equal('div');
    expect(component.hasClass(className)).to.be.true;
    expect(component.childAt(0).type()).to.equal(ToolbarComponent);
    expect(component.childAt(1).html()).to.equal(multilineTrim(expectedEditor));
  });

  it('calls to onContentChange function when update content', () => {
    // Arrange
    const content = 'Test content';
    const cursorStartPosition = 0;
    const shouldUpdateEditorCursor = false;
    const className = '';
    const onContentChangeSpy = sinon.spy();
    const dummyUpdateEditorCursor = () => {};
    const showPreview = false;
    const dummyTogglePreview = () => {};

    // Act
    const component = mount(
      <EditorComponent
        content={content}
        cursorStartPosition={cursorStartPosition}
        shouldUpdateEditorCursor={shouldUpdateEditorCursor}
        className={className}
        onContentChange={onContentChangeSpy}
        updateEditorCursor={dummyUpdateEditorCursor}
        showPreview={showPreview}
        togglePreviewMode={dummyTogglePreview}
      />,
    );

    component.find('textarea').simulate('change');

    // Assert
    expect(onContentChangeSpy.calledWith(content)).to.true;
  });

  it('calls to insertAtCaretGetText and onChange when insertMarkdownEntry in ToolbarComponent', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const content = 'Test content';
    const cursorStartPosition = 0;
    const shouldUpdateEditorCursor = false;
    const className = '';
    const onContentChangeSpy = sinon.spy();
    const dummyUpdateEditorCursor = () => {};
    const showPreview = false;
    const dummyTogglePreview = () => {};

    const expectedContent = 'test content with caret';
    const insertAtCaretGetTextStub = sinon.stub(textAreaTool,
      'insertAtCaretGetText', () => {
        return expectedContent;
      },
    );

    const calculateStartCursorPositionPlusOffsetStub = sinon.stub(textAreaTool,
      'calculateStartCursorPositionPlusOffset',
    );

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        cursorStartPosition={cursorStartPosition}
        shouldUpdateEditorCursor={shouldUpdateEditorCursor}
        className={className}
        onContentChange={onContentChangeSpy}
        updateEditorCursor={dummyUpdateEditorCursor}
        showPreview={showPreview}
        togglePreviewMode={dummyTogglePreview}
      />,
    );

    const toolbarComponent = component.childAt(0);
    const testMarkdownEntry = {};
    toolbarComponent.prop('insertMarkdownEntry')(testMarkdownEntry);

    // Assert
    expect(insertAtCaretGetTextStub.called).to.true;
    expect(onContentChangeSpy.calledWith(expectedContent)).to.true;
  }).bind(this));

  it(`calls to calculateStartCursorPositionPlusOffset and updateEditorCursor
    when insertMarkdownEntry in ToolbarComponent`, sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const content = 'Test content';
    const cursorStartPosition = 0;
    const shouldUpdateEditorCursor = false;
    const className = '';
    const onContentChangeSpy = sinon.spy();
    const updateEditorCursorSpy = sinon.spy();
    const showPreview = false;
    const dummyTogglePreview = () => {};

    const expectedContent = 'test content with caret';
    const insertAtCaretGetTextStub = sinon.stub(textAreaTool,
      'insertAtCaretGetText', () => {
        return expectedContent;
      },
    );

    const expectedCursorStartPosition = 2;
    const calculateStartCursorPositionPlusOffsetStub = sinon.stub(textAreaTool,
      'calculateStartCursorPositionPlusOffset', () => expectedCursorStartPosition,
    );

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        cursorStartPosition={cursorStartPosition}
        shouldUpdateEditorCursor={shouldUpdateEditorCursor}
        className={className}
        onContentChange={onContentChangeSpy}
        updateEditorCursor={updateEditorCursorSpy}
        showPreview={showPreview}
        togglePreviewMode={dummyTogglePreview}
      />,
    );

    const toolbarComponent = component.childAt(0);
    const testMarkdownEntry = {};
    toolbarComponent.prop('insertMarkdownEntry')(testMarkdownEntry);

    // Assert
    expect(calculateStartCursorPositionPlusOffsetStub.called).to.true;
    expect(updateEditorCursorSpy.calledWith(expectedCursorStartPosition)).to.true;
  }).bind(this));

  // TODO: Pending to test updateEditorCursor. Issue with componentDidUpdate
});
