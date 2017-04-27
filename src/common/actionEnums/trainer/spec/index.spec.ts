import { trainerActionEnums } from '../index';

describe('trainerActionEnums', () => {
  it('should be an object', () => {
    expect(trainerActionEnums).to.be.an('object').not.null;
  });

  it('should has keys defined and field / value match', () => {
    expect(trainerActionEnums.GET_TRAINING_CONTENT_REQUEST_COMPLETED).to
      .equal('TRAINER_MODULE/GET_TRAINING_CONTENT_REQUEST_COMPLETED');
    expect(trainerActionEnums.TRAINING_CONTENT_CHANGED).to.equal('TRAINER_MODULE/TRAINING_CONTENT_CHANGED');
    expect(trainerActionEnums.UPDATE_EDITOR_CURSOR).to.equal('TRAINER_MODULE/UPDATE_EDITOR_CURSOR');
    expect(trainerActionEnums.TOGGLE_EDITOR_PREVIEW).to.equal('TRAINER_MODULE/TOGGLE_EDITOR_PREVIEW');
    expect(trainerActionEnums.SET_ACTIVE_PANEL).to.equal('TRAINER_MODULE/SET_ACTIVE_PANEL');
    expect(trainerActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED)
      .to.be.equals('TRAINER_MODULE/GET_SUMMARY_TRAINING_REQUEST_COMPLETED');
  });
});
