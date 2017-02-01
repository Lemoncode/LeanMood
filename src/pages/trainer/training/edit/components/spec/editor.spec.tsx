import {expect} from 'chai';
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
    const dummyOnContentChange = () => {};
    const dummyInitializeTextAreaElement = () => {};

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        onContentChange={dummyOnContentChange}
        initializeTextAreaElement={dummyInitializeTextAreaElement}
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
        initializeTextAreaElement={dummyInitializeTextAreaElement}
      />,
    );

    // Assert
    expect(component.type()).to.equal('div');
    expect(component.childAt(0).type()).to.equal(ToolbarContainerComponent);
    expect(component.childAt(1).html()).to.equal(multilineTrim(expectedTextArea));
  });

  it('calls to onContentChange function when update content', () => {
    // Arrange
    const content = 'Test content';
    const onContentChangeSpy = sinon.spy();
    const dummyInitializeTextAreaElement = () => {};

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
          initializeTextAreaElement={dummyInitializeTextAreaElement}
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
    const onContentChangeSpy = () => {};
    const initializeTextAreaElementSpy = sinon.spy();

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
          initializeTextAreaElement={initializeTextAreaElementSpy}
        />
      </Provider>,
    );

    // Assert
    expect(initializeTextAreaElementSpy.calledOnce).to.true;
  });
});
