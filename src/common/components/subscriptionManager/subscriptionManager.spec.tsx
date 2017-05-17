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
    const subscribeAction = sinon.spy(() => { });
    const payload = {
      id: 1,
    };
    const unsubscribeAction = sinon.spy(() => { });

    // Act
    const component = mount(
      <SubscriptionManager
        subscribe={subscribeAction}
        payload={payload}
        unsubscribe={unsubscribeAction}
       />,
    );

    // Assert
    expect(subscribeAction.called).to.be.true;
    expect(subscribeAction.calledWith(payload)).to.be.true;
  }));

  it('calls the unsubscribe action on componentUnmount', sinon.test(function() {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const subscribeAction = sinon.spy(() => { });
    const payload = {
      id: 1,
    };
    const unsubscribeAction = sinon.spy(() => { });

    // Act
    const component = mount(
      <SubscriptionManager
        subscribe={subscribeAction}
        payload={payload}
        unsubscribe={unsubscribeAction}
       />,
    );

    component.unmount();

    // Assert
    expect(subscribeAction.called).to.be.true;
    expect(subscribeAction.calledWith(payload)).to.be.true;
    expect(unsubscribeAction.called).to.be.true;
    expect(unsubscribeAction.calledWith(payload)).to.be.true;
  }));

  it(`calls the component.unmount() and it does not throw error 
  when it passing unsubscribe equals undefined`, sinon.test(function() {
    // Arrange
    const sinon: sinon.SinonStatic = this;
    const subscribeAction = sinon.spy((payload) => { });
    const payload = {
      id: 1,
    };

    // Act
    const component = mount(
      <SubscriptionManager
        subscribe={subscribeAction}
        payload={payload}
        unsubscribe={undefined}
       />,
    );

    component.unmount();

    // Assert
    expect(subscribeAction.called).to.be.true;
    expect(subscribeAction.calledWith(payload)).to.be.true;
  }));
});
