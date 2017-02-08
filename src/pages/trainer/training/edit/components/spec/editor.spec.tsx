import * as React from 'react';
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {multilineTrim} from '../../../../../../common/parse/multilineTrim';
import {ToolbarContainerComponent} from '../toolbar';
import {textAreaTool} from '../../../../../../common/ui/tools/textAreaTool';
import {EditorComponent} from '../editor';

const createStore = configureStore();

describe('EditorComponent', () => {
  it('is defined', () => {
    // Arrange
    const content = '';
    const cursorStartPosition = 0;
    const shouldUpdateEditorCursor = false;
    const toolbarCommand = {
      caret: '',
      offset: 0,
    };
    const className = '';
    const dummyOnContentChange = () => {};
    const dummyUpdateEditorCursor = () => {};

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        cursorStartPosition={cursorStartPosition}
        shouldUpdateEditorCursor={shouldUpdateEditorCursor}
        toolbarCommand={toolbarCommand}
        className={className}
        onContentChange={dummyOnContentChange}
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
    const shouldUpdateEditorCursor = false;
    const toolbarCommand = {
      caret: '',
      offset: 0,
    };
    const className = 'testClass';
    const dummyOnContentChange = () => {};
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
        cursorStartPosition={cursorStartPosition}
        shouldUpdateEditorCursor={shouldUpdateEditorCursor}
        toolbarCommand={toolbarCommand}
        className={className}
        onContentChange={dummyOnContentChange}
        updateEditorCursor={dummyUpdateEditorCursor}
      />,
    );

    // Assert
    expect(component.type()).to.equal('div');
    expect(component.hasClass(className)).to.be.true;
    expect(component.childAt(0).type()).to.equal(ToolbarContainerComponent);
    expect(component.childAt(1).html()).to.equal(multilineTrim(expectedEditor));
  });

  it(`should does not call to componentWillReceiveProps when passing initial properties values`, sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const content = 'Test content';
    const cursorStartPosition = 0;
    const shouldUpdateEditorCursor = false;
    const toolbarCommand = {
      caret: '# ',
      offset: 5,
    };
    const className = 'testClass';
    const dummyOnContentChange = () => {};
    const dummyUpdateEditorCursor = () => {};

    const componentWillReceivePropsStub = sinon.stub(EditorComponent.prototype, 'componentWillReceiveProps');

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        cursorStartPosition={cursorStartPosition}
        shouldUpdateEditorCursor={shouldUpdateEditorCursor}
        toolbarCommand={toolbarCommand}
        className={className}
        onContentChange={dummyOnContentChange}
        updateEditorCursor={dummyUpdateEditorCursor}
      />,
    );

    // Assert
    expect(componentWillReceivePropsStub.called).to.be.false;
  }).bind(this));

  it(`should calls to componentWillReceiveProps when update toolbarCommand with same values`, sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const content = 'Test content';
    const cursorStartPosition = 0;
    const shouldUpdateEditorCursor = false;
    const toolbarCommand = {
      caret: '# ',
      offset: 5,
    };
    const className = 'testClass';
    const dummyOnContentChange = () => {};
    const dummyUpdateEditorCursor = () => {};

    const componentWillReceivePropsStub = sinon.stub(EditorComponent.prototype, 'componentWillReceiveProps');

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        cursorStartPosition={cursorStartPosition}
        shouldUpdateEditorCursor={shouldUpdateEditorCursor}
        toolbarCommand={toolbarCommand}
        className={className}
        onContentChange={dummyOnContentChange}
        updateEditorCursor={dummyUpdateEditorCursor}
      />,
    );

    component.setProps({
      toolbarCommand: {
        caret: toolbarCommand.caret,
        offset: toolbarCommand.offset,
      },
    });

    // Assert
    expect(componentWillReceivePropsStub.called).to.be.true;
  }).bind(this));

  it(`should calls to componentWillReceiveProps when update toolbarCommand with different values`, sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const content = 'Test content';
    const cursorStartPosition = 0;
    const shouldUpdateEditorCursor = false;
    const toolbarCommand = {
      caret: '# ',
      offset: 5,
    };
    const className = 'testClass';
    const dummyOnContentChange = () => {};
    const dummyUpdateEditorCursor = () => {};

    const componentWillReceivePropsStub = sinon.stub(EditorComponent.prototype, 'componentWillReceiveProps');

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        cursorStartPosition={cursorStartPosition}
        shouldUpdateEditorCursor={shouldUpdateEditorCursor}
        toolbarCommand={toolbarCommand}
        className={className}
        onContentChange={dummyOnContentChange}
        updateEditorCursor={dummyUpdateEditorCursor}
      />,
    );

    component.setProps({
      toolbarCommand: {
        caret: '^ ',
        offset: 1,
      },
    });

    // Assert
    expect(componentWillReceivePropsStub.called).to.be.true;
  }).bind(this));

  it('calls to onContentChange function when update content', () => {
    // Arrange
    const content = 'Test content';
    const cursorStartPosition = 0;
    const shouldUpdateEditorCursor = false;
    const toolbarCommand = {
      caret: '',
      offset: 0,
    };
    const className = '';
    const onContentChangeSpy = sinon.spy();
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
          cursorStartPosition={cursorStartPosition}
          shouldUpdateEditorCursor={shouldUpdateEditorCursor}
          toolbarCommand={toolbarCommand}
          className={className}
          onContentChange={onContentChangeSpy}
          updateEditorCursor={dummyUpdateEditorCursor}
        />
      </Provider>,
    );

    component.find('textarea').simulate('change');

    // Assert
    expect(onContentChangeSpy.calledWith(content)).to.true;
  });

  // TODO: Pending to test updateEditorCursor. Issue with componentDidUpdate
});
