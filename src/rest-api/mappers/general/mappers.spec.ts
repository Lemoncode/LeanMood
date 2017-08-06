import { User } from '../../model/general';
import { UserProfile } from '../../../model/userProfile';
import { mapUserToModel } from './mappers';

describe('rest-api/general mappers', () => {
  describe('mapUserToModel', () => {
    it('should be a function', () => {
      // Assert
      expect(mapUserToModel).to.be.a('function');
    });

    it('should return empty values when model is undefined', () => {
      // Arrange
      const model: User = undefined;

      // Act
      const result = mapUserToModel(model);
      // Assert
      expect(result).to.deep.equal(new UserProfile());
    });

    it('should return empty values when model is null', () => {
      // Arrange
      const model: User = null;

      // Act
      const result = mapUserToModel(model);
      // Assert
      expect(result).to.deep.equal(new UserProfile());
    });

    it('should return empty values when model has empty values', () => {
      // Arrange
      const model: User = {
        _id: '',
        email: '',
        name: '',
        lastName: '',
        role: '',
        avatar: '',
        trainings: [],
      };

      // Act
      const result = mapUserToModel(model);
      // Assert
      expect(result.id).to.be.empty;
      expect(result.email).to.be.empty;
      expect(result.fullname).to.equal(' ');
      expect(result.role).to.be.empty;
      expect(result.avatar).to.be.empty;
    });

    it('should return values when model has values', () => {
      // Arrange
      const model: User = {
        _id: 'test id',
        email: 'test email',
        name: 'test name',
        lastName: 'test lastName',
        role: 'test role',
        avatar: 'test avatar',
        trainings: [],
      };

      // Act
      const result = mapUserToModel(model);
      // Assert
      expect(result.id).to.equal('test id');
      expect(result.email).to.equal('test email');
      expect(result.fullname).to.equal('test name test lastName');
      expect(result.role).to.equal('test role');
      expect(result.avatar).to.equal('test avatar');
    });
  });
});
