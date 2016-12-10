import { expect } from 'chai';
import * as deepFreeze from 'deep-freeze';
import { adminActionEnums } from './../../common/actionEnums/admin';
import { TrainingSummary } from './../../model/trainingSummary';
import { adminTrainingReducer, AdminTrainingState } from './../adminTraining';

    describe('adminTrainigReducer', () => {

    let originalState: AdminTrainingState = null;

    beforeEach(() => {
        originalState = new AdminTrainingState();
        deepFreeze(originalState);
    });

    

    it('is defined', () => {
        //Arrange
        //Act
        //Assert
        expect(adminTrainingReducer).not.to.be.undefined;
    });

    it('return the same state with a not valid action', () =>{
        //Arrange
        const action = {
            type: "NOT_EXPECTED_ACTION_12345678"
        } 
        //Act
        const newState = adminTrainingReducer(originalState, action); 
        //Assert
        expect(newState).equal(originalState);
    });

    it('return list', () => {
        //Arrange
        const trainings: TrainingSummary[] = [
            {
                id: 2,
                name: 'Jaime Doe',
                isActive: true
            },
            {
                id: 3,
                name: 'Braulio Somez',
                isActive: true
            }
        ];

        const actionResult = {
            type: adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED,
            payload: trainings
        };
        //Act
        const newState: AdminTrainingState = adminTrainingReducer(originalState, actionResult);
        //Assert
        expect(newState.trainingSummaryList).equal(trainings);
    });
});