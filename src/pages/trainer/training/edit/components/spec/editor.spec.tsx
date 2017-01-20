import {expect} from 'chai';
import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {multilineTrim} from '../../../../../../common/parse/multilineTrim';
import {EditorComponent} from '../editor';

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

    const expectedComponent = `
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
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });

  it('calls to onContentChange function when update content', () => {
    // Arrange
    const content = 'Test content';
    const onContentChangeSpy = sinon.spy();
    const dummyInitializeTextAreaElement = () => {};

    // Act
    const component = shallow(
      <EditorComponent
        content={content}
        onContentChange={onContentChangeSpy}
        initializeTextAreaElement={dummyInitializeTextAreaElement}
      />,
    );

    component.simulate('change');

    // Assert
    expect(onContentChangeSpy.called).to.true;
  });

  it('calls to initializeTextAreaElement function when render component', () => {
    // Arrange
    const content = 'Test content';
    const onContentChangeSpy = () => {};
    const initializeTextAreaElementSpy = sinon.spy();

    // Act
    const component = mount(
      <EditorComponent
        content={content}
        onContentChange={onContentChangeSpy}
        initializeTextAreaElement={initializeTextAreaElementSpy}
      />,
    );

    // Assert
    expect(initializeTextAreaElementSpy.calledOnce).to.true;
  });
});
