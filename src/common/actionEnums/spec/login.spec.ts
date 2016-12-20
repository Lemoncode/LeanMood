import { expect } from 'chai';
import {} from 'mocha';
import {} from 'core-js';
import { loginActionEnums } from '../login';

describe('loginActionEnums', () => {
  it('should be defined', () => {
    expect(loginActionEnums).to.be.not.undefined;
  });

  it('should have key USERPROFILE_UPDATE_EDITING_LOGIN defined and field / value match', () => {
    expect(loginActionEnums.USERPROFILE_UPDATE_EDITING_LOGIN).to.be.not.undefined;
    expect(loginActionEnums.USERPROFILE_UPDATE_EDITING_LOGIN).to.be.a('string');
    expect(loginActionEnums.USERPROFILE_UPDATE_EDITING_LOGIN).equals('USERPROFILE_UPDATE_EDITING_LOGIN');
  })

  it('should have key USERPROFILE_PERFORM_LOGIN defined and field / value match', () => {
    expect(loginActionEnums.USERPROFILE_PERFORM_LOGIN).to.be.not.undefined;
    expect(loginActionEnums.USERPROFILE_PERFORM_LOGIN).to.be.a('string');
    expect(loginActionEnums.USERPROFILE_PERFORM_LOGIN).equals('USERPROFILE_PERFORM_LOGIN');
  })
})