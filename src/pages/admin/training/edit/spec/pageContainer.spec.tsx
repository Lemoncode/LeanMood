// import { expect } from 'chai';
// import { mount } from 'enzyme';
// import * as React from 'react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import { EditTrainingPageContainer } from '../pageContainer';
// import { EditTrainingPage } from '../page';
// import { TrainingEntity } from '../../../../../model/training';
//
// const createStore = configureStore();
//
// describe('pages/admin/training/edit/pageContainer', () => {
//     it('should be defined', () => {
// 
//         let localEditTraining= new TrainingEntity();
//         localEditTraining.id = 32;
//         localEditTraining.name = 'React/redux';
//         localEditTraining.isActive = true;
//         localEditTraining.start = new Date(2016, 12, 1);
//         localEditTraining.end = new Date(2016, 12, 31);
//
//         let mockStore = createStore({
//             adminTraining: {
//                 editTraining: localEditTraining
//             }
//         });
//         const nonTypeMockStore: any = mockStore;
//         // Arrange
//         // Act
//         const pageContainer = mount(
//             <Provider store={nonTypeMockStore}>
//                 <EditTrainingPageContainer />
//             </Provider>
//             );
//
//         // Assert
//         expect(pageContainer).not.to.be.undefined;
//     });
// //     it('should contain a property called editTraining and be informed', () =>{
// //         let localEditTraining= new TrainingEntity();
// //         localEditTraining.id = 32;
// //         localEditTraining.name = 'React/redux';
// //         localEditTraining.isActive = true;
// //         localEditTraining.start = new Date(2016, 12, 1);
// //         localEditTraining.end = new Date(2016, 12, 31);
// //
// //         let mockStore = createStore({
// //             adminTraining: {
// //                 editTraining: localEditTraining
// //             }
// //         });
// //         const nonTypeMockStore: any = mockStore;
// //         // Arrange
// //         // Act
// //         const pageContainer = mount(
// //             <Provider store={nonTypeMockStore}>
// //                 <EditTrainingPageContainer />
// //             </Provider>
// //             );
// //
// //         // Assert
// //         const pagePresentacionalWrapper = pageContainer.find(EditTrainingPage);
// //         expect(pagePresentacionalWrapper).not.to.be.undefined;
// //         expect(pagePresentacionalWrapper.prop('editTraining')).not.to.be.undefined;
// //         expect(pagePresentacionalWrapper.prop('editTraining')).to.be.eql(localEditTraining);
// //     });
// });
