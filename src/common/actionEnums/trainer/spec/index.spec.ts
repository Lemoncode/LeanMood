import {expect} from 'chai';
import {trainerActionEnums} from '../index';

describe('trainerActionEnums', () => {
  it('is defined', () => {
    expect(trainerActionEnums).not.to.be.undefined;
  });

  it('should has keys defined and field / value match', () => {
    expect(trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED).to
      .equal('GET_TRAINING_CONTENT_REQUEST_COMPLETED');
    expect(trainerActionEnums.INITIALIZE_EDITOR).to.equal('INITIALIZE_EDITOR');
    expect(trainerActionEnums.TRAINING_CONTENT_CHANGED).to.equal('TRAINING_CONTENT_CHANGED');
    expect(trainerActionEnums.UPDATE_TRAINING_CONTENT).to.equal('UPDATE_TRAINING_CONTENT');
  });
});
