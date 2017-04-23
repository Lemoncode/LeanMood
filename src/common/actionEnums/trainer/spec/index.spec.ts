import {trainerActionEnums} from '../index';

describe('trainerActionEnums', () => {
  it('is defined', () => {
    expect(trainerActionEnums).not.to.be.undefined;
  });

  it('should has keys defined and field / value match', () => {
    expect(trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED).to
      .equal('TRAINING_MODULE/GET_TRAINING_CONTENT_REQUEST_COMPLETED');
    expect(trainerActionEnums.TRAINING_CONTENT_CHANGED).to.equal('TRAINING_MODULE/TRAINING_CONTENT_CHANGED');
    expect(trainerActionEnums.UPDATE_EDITOR_CURSOR).to.equal('TRAINING_MODULE/UPDATE_EDITOR_CURSOR');
    expect(trainerActionEnums.TOGGLE_EDITOR_PREVIEW).to.equal('TRAINING_MODULE/TOGGLE_EDITOR_PREVIEW');
  });
});
