import { expect } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { EditTrainingPageContainer } from '../pageContainer';
import { EditTrainingPage } from '../page';
import { Training} from '../../../../../model/training';
import * as editTrainingActions from '../action/editTrainingRequest';

const createStore = configureStore();

describe('pages/admin/training/edit/pageContainer', () => {
    it('should be defined', sinon.test(() => {
        // Arrange
        const sinon: sinon.SinonStatic = this;
        
        let localEditTraining = new Training();
        localEditTraining.id = 32;
        localEditTraining.name = 'React/redux';
        localEditTraining.isActive = true;
        localEditTraining.start = new Date(2016, 12, 1);
        localEditTraining.end = new Date(2016, 12, 31);

        let mockStore = createStore({
            adminTraining: {
                editTraining: localEditTraining,
            },
        });
        const nonTypeMockStore: any = mockStore;

        let editTrainingRequestStartedStub = sinon.stub(editTrainingActions,
          'editTrainingRequestStarted',() => {
            return {
              type: 'TEST'
            }}
         );

        // Act
        const pageContainer = mount(
            <Provider store={nonTypeMockStore}>
                <EditTrainingPageContainer params={{id: ""}}/>
            </Provider>,
            );

        // Assert
        expect(pageContainer).not.to.be.undefined;
    }).bind(this));

    it('should contain a property called editTraining and be informed', sinon.test(() => {

        // Arrange
        const sinon: sinon.SinonStatic = this;

        let localEditTraining = new Training();
        localEditTraining.id = 32;
        localEditTraining.name = 'React/redux';
        localEditTraining.isActive = true;
        localEditTraining.start = new Date(2016, 12, 1);
        localEditTraining.end = new Date(2016, 12, 31);

        let mockStore = createStore({
            adminTraining: {
                editTraining: localEditTraining,
            },
        });
        const nonTypeMockStore: any = mockStore;

        let editTrainingRequestStartedStub = sinon.stub(editTrainingActions,
          'editTrainingRequestStarted',() => {
            return {
              type: 'TEST'
            }}
         );

        // Act
        const pageContainer = mount(
            <Provider store={nonTypeMockStore}>
                <EditTrainingPageContainer params={{id: "1"}}/>
            </Provider>,
            );

        // Assert
        const pagePresentacionalWrapper = pageContainer.find(EditTrainingPage);
        expect(pagePresentacionalWrapper).not.to.be.undefined;
        expect(pagePresentacionalWrapper.prop('editTraining')).not.to.be.undefined;
        expect(pagePresentacionalWrapper.prop('editTraining')).to.be.eql(localEditTraining);
    }).bind(this));
});
