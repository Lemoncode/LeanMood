import * as React from 'react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { DeliveryPanelComponent, DeliveryPanelContainer } from '../';
import { IAppState } from '../../../../../../../../reducers/index';
import * as actions from '../../../../actions/setActivePanel';

const configureStore = createMockStore<IAppState>([thunk]);

describe('DeliveryPanelContainer', () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      adminStudent: null,
      adminTraining: null,
      login: null,
      student: null,
      trainer: null,
    });
  });
  it('should connect a DeliveryPanelComponent', () => {
    // Act
    const container = mount(
      <Provider store={store}>
        <DeliveryPanelContainer />
      </Provider>,
    );

    // Assert
    expect(container.find(DeliveryPanelContainer)).to.have.lengthOf(1);
    expect(container.find(DeliveryPanelComponent)).to.have.lengthOf(1);
  });

  it('should pass togglePanel to DeliveryPanelContainer dispatching ' +
    'a TRAINING_MODULE/ SET_ACTIVE_PANEL action with empty payload', sinon.test(function() {
      // Arrange
      const setActivePanelAction = sinon.stub(actions, 'setActivePanelAction').returns({ type: 'ACTION' });

      // Act
      const container = mount(
        <Provider store={store}>
          <DeliveryPanelContainer />
        </Provider>,
      );
      const deliveryPanel = container.find(DeliveryPanelComponent);
      const togglePanel = deliveryPanel.prop('togglePanel');

      // Act
      expect(togglePanel).to.be.a('function');
      togglePanel();
      expect(setActivePanelAction.calledWithExactly('')).to.be.true;
    }));
});

