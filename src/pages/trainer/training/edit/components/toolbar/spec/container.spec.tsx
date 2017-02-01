import * as React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as cheerio from 'cheerio';
import * as updateTrainingContent from '../../../actions/updateTrainingContent';
import {ToolbarContainerComponent} from '../container';

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

    const updateTrainingContentStub = sinon.stub(updateTrainingContent,
    'updateTrainingContentAction', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <ToolbarContainerComponent />
      </Provider>,
    );

    // Assert
    expect(container).not.to.be.undefined;
  }).bind(this));

  it('should contain a property called textArea and be informed', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const wrapper = cheerio.load('<textarea></textarea>');
    const expectedTextArea = wrapper('textarea') as HTMLTextAreaElement;
    const mockStore: any = createStore({
      trainer: {
        training: {
          editor: expectedTextArea,
        },
      },
    });

    const updateTrainingContentStub = sinon.stub(updateTrainingContent,
    'updateTrainingContentAction', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <ToolbarContainerComponent />
      </Provider>,
    );

    // Assert
    const firstToolbarButton = container.find('ToolbarButton').at(0);
    expect(firstToolbarButton).not.to.be.undefined;
    expect(firstToolbarButton.prop('textArea')).to.equal(expectedTextArea);
  }).bind(this));
});
