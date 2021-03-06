import {loginActionEnums} from '../index';

describe('loginActionEnums', () => {
  it('should be defined', () => {
    // Assert
    expect(loginActionEnums).to.be.not.undefined;
  });

  it('should have keys defined and field / value match', () => {
    // Assert
    expect(loginActionEnums.LOGIN_CONTENT_CHANGED).to.equals('LOGIN_CONTENT_CHANGED');
    expect(loginActionEnums.LOGIN_REQUEST_SUCCESS).to.equals('LOGIN_REQUEST_SUCCESS');
    expect(loginActionEnums.LOGIN_REQUEST_ERROR).to.equals('LOGIN_REQUEST_ERROR');
  });
});
