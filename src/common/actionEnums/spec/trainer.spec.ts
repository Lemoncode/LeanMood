import {expect} from 'chai';
import {trainerActionEnums} from '../trainer';

describe('trainerActionEnums', () => {
  it('is defined', () => {
    expect(trainerActionEnums).not.to.be.undefined;
  });

  it('should has keys defined and field / value match', () => {
    expect(trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED).to
      .equal('GET_TRAINING_CONTENT_REQUEST_COMPLETED');
  });
});
