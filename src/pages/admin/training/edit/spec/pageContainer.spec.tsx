import { expect } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { EditTrainingPageContainer } from '../pageContainer';

const createStore = configureStore();

describe('pages/admin/training/edit/pageContainer', () => {
    it('should be defined', () => {
        let mockStore = createStore({});
        const nonTypeMockStore: any = mockStore;
        // Arrange
        // Act
        const pageContainer = mount(
            <Provider store={nonTypeMockStore}>
                <EditTrainingPageContainer />
            </Provider>
            );

        // Assert
        expect(pageContainer).not.to.be.undefined;
    });
});