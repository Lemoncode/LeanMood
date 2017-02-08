import * as React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as cheerio from 'cheerio';
import * as selectToolbarCommand from '../../../actions/selectToolbarCommand';
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

    const selectToolbarCommandStub = sinon.stub(selectToolbarCommand,
    'selectToolbarCommandAction', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <ToolbarContainerComponent />
      </Provider>,
    );

    // Assert
    expect(container).not.to.be.undefined;
  }).bind(this));
});
