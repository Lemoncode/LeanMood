import * as React from 'react';
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {multilineTrim} from '../../../../../../common/parse/multilineTrim';
import {ToolbarContainerComponent} from '../toolbar';
import {EditorComponent} from '../editor';

const createStore = configureStore();

describe('EditorComponent', () => {
  it('is defined', () => {
    // Arrange
    const content = '';
    const cursorStartPosition = 0;
    const shouldSetEditorFocus = false;
    const className = '';
    const dummyOnContentChange = () => {};
    const dummyInitializeEditor = () => {};
    const dummyUpdateEditorCursor = () => {};

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        onContentChange={dummyOnContentChange}
        initializeEditor={dummyInitializeEditor}
        cursorStartPosition={cursorStartPosition}
        className={className}
        shouldSetEditorFocus={shouldSetEditorFocus}
        updateEditorCursor={dummyUpdateEditorCursor}
      />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('renders a text area with expected content', () => {
    // Arrange
    const content = 'Test content';
    const cursorStartPosition = 0;
    const shouldSetEditorFocus = false;
    const className = 'testClass';
    const dummyOnContentChange = () => {};
    const dummyInitializeEditor = () => {};
    const dummyUpdateEditorCursor = () => {};

    const expectedEditor = `
      <textarea class="textArea">
        ${content}
      </textarea>
    `;

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        onContentChange={dummyOnContentChange}
        initializeEditor={dummyInitializeEditor}
        cursorStartPosition={cursorStartPosition}
        className={className}
        shouldSetEditorFocus={shouldSetEditorFocus}
        updateEditorCursor={dummyUpdateEditorCursor}
      />,
    );

    // Assert
    expect(component.type()).to.equal('div');
    expect(component.hasClass(className)).to.be.true;
    expect(component.childAt(0).type()).to.equal(ToolbarContainerComponent);
    expect(component.childAt(1).html()).to.equal(multilineTrim(expectedEditor));
  });

  it('calls to onContentChange function when update content', () => {
    // Arrange
    const content = 'Test content';
    const cursorStartPosition = 0;
    const shouldSetEditorFocus = false;
    const className = '';
    const onContentChangeSpy = sinon.spy();
    const dummyInitializeEditor = () => {};
    const dummyUpdateEditorCursor = () => {};

    const mockStore: any = createStore({
      trainer: {
        training: { },
      },
    });

    // Act
    const component = mount(
      <Provider store={mockStore}>
        <EditorComponent
          content={content}
          onContentChange={onContentChangeSpy}
          initializeEditor={dummyInitializeEditor}
          cursorStartPosition={cursorStartPosition}
          className={className}
          shouldSetEditorFocus={shouldSetEditorFocus}
          updateEditorCursor={dummyUpdateEditorCursor}
        />
      </Provider>,
    );

    component.find('textarea').simulate('change');

    // Assert
    expect(onContentChangeSpy.calledWith(content)).to.true;
  });

  it('calls to initializeTextAreaElement function when render component', () => {
    // Arrange
    const content = 'Test content';
    const cursorStartPosition = 0;
    const shouldSetEditorFocus = false;
    const className = '';
    const dummyOnContentChange = () => {};
    const initializeEditorSpy = sinon.spy();
    const dummyUpdateEditorCursor = () => {};

    const mockStore: any = createStore({
      trainer: {
        training: { },
      },
    });

    // Act
    const component = mount(
      <Provider store={mockStore}>
        <EditorComponent
          content={content}
          onContentChange={dummyOnContentChange}
          initializeEditor={initializeEditorSpy}
          cursorStartPosition={cursorStartPosition}
          className={className}
          shouldSetEditorFocus={shouldSetEditorFocus}
          updateEditorCursor={dummyUpdateEditorCursor}
        />
      </Provider>,
    );

    // Assert
    expect(initializeEditorSpy.calledOnce).to.true;
  });

  // TODO: Pending to test updateEditorCursor. Issue with componentDidUpdate
});
