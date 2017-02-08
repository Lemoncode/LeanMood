import * as React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as cheerio from 'cheerio';
import * as selectCaretToInsert from '../../../actions/selectCaretToInsert';
import {ToolbarContainerComponent} from '../toolbarContainer';

const createStore = configureStore();

describe('ToolbarContainerComponent', () => {
  it('should be defined', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const mockStore: any = createStore({
      trainer: {
        training: {},
      },
    });

    const selectCaretToInsertStub = sinon.stub(selectCaretToInsert,
    'selectCaretToInsertAction', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <ToolbarContainerComponent />
      </Provider>,
    );

    // Assert
    expect(container).not.to.be.undefined;
  }).bind(this));

  it('should contain a property called editor and be informed', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const wrapper = cheerio.load('<textarea></textarea>');
    const expectedEditor = wrapper('textarea') as HTMLTextAreaElement;
    const mockStore: any = createStore({
      trainer: {
        training: {
          editor: expectedEditor,
        },
      },
    });

    const selectCaretToInsertStub = sinon.stub(selectCaretToInsert,
    'selectCaretToInsertAction', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <ToolbarContainerComponent />
      </Provider>,
    );

    // Assert
    const firstToolbarButton = container.find('ToolbarButton').at(0);
    expect(firstToolbarButton).not.to.be.undefined;
    expect(firstToolbarButton.prop('editor')).to.equal(expectedEditor);
  }).bind(this));
});
