import {expect} from 'chai';
import {trainerActionEnums} from '../../../common/actionEnums/trainer';
import {TrainerState, trainerReducer} from '../index';

describe('trainerReducer', () => {
  it('is defined', () => {
    //Arrange
    expect(trainerReducer).not.to.be.undefined;
  });

  it('should return initial state when passing undefined state', () => {
    //Arrange
    const originalState = undefined;
    const action = {};

    const expectedState = new TrainerState();

    //Act
    const nextState = trainerReducer(originalState, action);

    //Assert
    expect(nextState).not.to.be.undefined;
    expect(nextState.training.content).to.equal(expectedState.training.content);
  });

  it('should return original state when passing not expected action type', () => {
    //Arrange
    const originalState = new TrainerState();
    const action = {
      type: 'NOT_EXPECTED_ACTION'
    };

    //Act
    Object.freeze(originalState);
    const nextState = trainerReducer(originalState, action);

    //Assert
    expect(nextState).not.to.be.undefined;
    expect(nextState).to.equal(originalState);
    expect(originalState).to.be.frozen;
  });

  it('should return next state when passing action type equals GET_TRAINING_CONTENT_REQUEST_COMPLETED', () => {
    //Arrange
    const originalState = new TrainerState();
    const action = {
      type: trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED,
      payload: 'Test content'
    };

    //Act
    Object.freeze(originalState);
    const nextState = trainerReducer(originalState, action);

    //Assert
    expect(nextState.training.content).to.equal(action.payload);
    expect(originalState).to.be.frozen;
  });
});
