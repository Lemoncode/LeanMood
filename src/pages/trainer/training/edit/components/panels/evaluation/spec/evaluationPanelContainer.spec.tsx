import * as React from 'react';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { EvaluationPanelContainer, EvaluationPanelComponent } from '../';
import { IAppState } from '../../../../../../../../reducers/index';
import * as actions from '../../../../actions/setActivePanel';

const configureStore = createMockStore<IAppState>([thunk]);

describe('EvaluationPanelContainer', () => {
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
  it('should connect a EvaluationPanelComponent', () => {
    // Act
    const container = mount(
      <Provider store={store}>
        <EvaluationPanelContainer />
      </Provider>,
    );

    // Assert
    expect(container.find(EvaluationPanelContainer)).to.have.lengthOf(1);
    expect(container.find(EvaluationPanelComponent)).to.have.lengthOf(1);
  });

  it('should pass togglePanel to EvaluationPanelContainer dispatching ' +
    'a TRAINING_MODULE/SET_ACTIVE_PANEL action with empty payload', sinon.test(function() {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const setActivePanelAction = sinon.stub(actions, 'setActivePanelAction').returns({ type: 'ACTION' });

      // Act
      const container = mount(
        <Provider store={store}>
          <EvaluationPanelContainer />
        </Provider>,
      );
      const evaluationPanel = container.find(EvaluationPanelComponent);
      const togglePanel = evaluationPanel.prop('togglePanel');

      // Act
      expect(togglePanel).to.be.a('function');
      togglePanel();
      expect(setActivePanelAction.calledWithExactly('')).to.be.true;
    }));
});
