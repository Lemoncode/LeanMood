import { expect } from 'chai';
import {} from 'core-js';
import {} from 'mocha';
import { adminActionEnums } from '../admin';

describe('adminActionEnums', () => {
  it('should be defined', () => {
    expect(adminActionEnums).to.be.not.undefined;
  });

  it('should have keys defined and field / value match', () => {
    expect(adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED).not.to.be.undefined;
    expect(adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED).to.be.a('string');
    expect(adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED).equals('GET_SUMMARY_STUDENT_REQUEST_COMPLETED');

    expect(adminActionEnums.GET_TRAINING_REQUEST_COMPLETED).not.to.be.undefined;
    expect(adminActionEnums.GET_TRAINING_REQUEST_COMPLETED).to.be.a('string');
    expect(adminActionEnums.GET_TRAINING_REQUEST_COMPLETED).equals('GET_TRAINING_REQUEST_COMPLETED');

    expect(adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED).equal('GET_SUMMARY_STUDENT_REQUEST_COMPLETED');
    expect(adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED).not.to.be.undefined;
    expect(adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED).to.be.a('string');
    expect(adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED).equal('GET_SUMMARY_TRAINING_REQUEST_COMPLETED');
  });
});
