import * as React from 'react';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { UploadFilePanelComponent, UploadFilePanelContainer } from '../';
import { IAppState } from '../../../../../../../../reducers/index';
import * as actions from '../../../../actions/setActivePanel';

const configureStore = createMockStore<IAppState>([thunk]);

describe('UploadFilePanelContainer', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      adminStudent: null,
      adminTraining: null,
      student: null,
      login: null,
      trainer: null,
    });
  });

  it('should connect a UploadFilePanelComponent', () => {
    // Act
    const container = mount(
      <Provider store={store}>
        <UploadFilePanelContainer />
      </Provider>,
    );

    // Assert
    expect(container.find(UploadFilePanelContainer)).to.have.lengthOf(1);
    expect(container.find(UploadFilePanelComponent)).to.have.lengthOf(1);
  });

  it('should pass togglePanel to UploadFilePanelComponent dispatching ' +
    'a TRAINING_MODULE/ SET_ACTIVE_PANEL action with empty payload', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const setActivePanelAction = sinon.stub(actions, 'setActivePanelAction').returns({ type: 'ACTION' });

      // Act
      const container = mount(
        <Provider store={store}>
          <UploadFilePanelContainer />
        </Provider>,
      );
      const uploadFilePanel = container.find(UploadFilePanelComponent);
      const togglePanel = uploadFilePanel.prop('togglePanel');

      // Assert
      expect(togglePanel).to.be.a('function');
      togglePanel();
      expect(setActivePanelAction.calledWithExactly('')).to.be.true;
    }));
});
