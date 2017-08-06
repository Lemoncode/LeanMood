import { LoginResponse } from '../../model/login/loginResponse';

export const loginMockResponses: LoginResponse[] = [
  {
    succeded: true,
    userProfile: {
      id: '1',
      fullname: 'Admin',
      role: 'admin',
      email: 'admin',
      avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-64.png',
    },
  },
  {
    succeded: true,
    userProfile: {
      id: '2',
      fullname: 'Trainer',
      role: 'trainer',
      email: 'trainer',
      avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-64.png',
    },
  },
  {
    succeded: true,
    userProfile: {
      id: '3',
      fullname: 'Student',
      role: 'student',
      email: 'student',
      avatar: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/boy-64.png',
    },
  },
];
