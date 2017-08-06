import { User } from '../../model/general';
import { UserProfile } from '../../../model/userProfile';

export const mapUserToModel = (user: User): UserProfile => (
  Boolean(user) ?
    {
      id: user._id,
      email: user.email,
      fullname: `${user.name} ${user.lastName}`,
      role: user.role,
      avatar: user.avatar,
    } :
    new UserProfile()
);
