import { expect } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { PageContainer } from '../pageContainer'

const createStore = configureStore();

describe('pageContainer', () => {
  it('Should be defined', () => {

    let mockStore = createStore({
    });


    const nonTypedMockStore : any = mockStore;
    const pageContainer = mount(
                            <Provider store={nonTypedMockStore}>
                              <PageContainer/>
                            </Provider>
                          );

    expect(pageContainer).not.to.be.undefined;
  });
});
