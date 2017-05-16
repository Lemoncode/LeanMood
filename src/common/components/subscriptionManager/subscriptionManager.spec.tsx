import * as React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { SubscriptionManager } from './subscriptionManager';

describe('common/subscriptionManager', () => {
  it('is defined', () => {
    expect(SubscriptionManager).not.to.be.undefined;
  });

  it('calls the subscribe action on componentWillMount', sinon.test(function() {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const subscribeAction = sinon.spy((payload) => { });
    const payload = {};
    const unsubscribeAction = sinon.spy(() => { });

    // Act
    const progressBarComponent = mount(
      <SubscriptionManager
        subscribe={subscribeAction}
        payload={payload}
        unsubscribe={unsubscribeAction}
       />,
    );

    // Assert
    expect(subscribeAction.called).to.be.true;
  }));

  it('calls the unsubscribe action on componentunMount', sinon.test(function() {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const subscribeAction = sinon.spy((payload) => { });
    const payload = {};
    const unsubscribeAction = sinon.spy(() => { });

    // Act
    const progressBarComponent = mount(
      <SubscriptionManager
        subscribe={subscribeAction}
        payload={payload}
        unsubscribe={unsubscribeAction}
       />,
    );

    progressBarComponent.unmount();

    // Assert
    expect(subscribeAction.called).to.be.true;
    expect(unsubscribeAction.called).to.be.true;
  }));

  it('calls the subscribe and unsubcribe action when payload is null (no exception)', sinon.test(function() {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const subscribeAction = sinon.spy((payload) => { });
    const payload = null;
    const unsubscribeAction = sinon.spy(() => { });

    // Act
    const progressBarComponent = mount(
      <SubscriptionManager
        subscribe={subscribeAction}
        payload={payload}
        unsubscribe={unsubscribeAction}
       />,
    );

    progressBarComponent.unmount();

    // Assert
    expect(subscribeAction.called).to.be.true;
    expect(unsubscribeAction.called).to.be.true;
  }));


  // Pending Null value unsubscribe, and default values
});
