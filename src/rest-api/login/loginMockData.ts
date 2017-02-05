import {LoginResponse} from '../../model/loginResponse';

export const loginMockResponses: LoginResponse[] = [
  { succeded: true, userProfile: { id: 1, fullname: 'Admin', role: 'admin', email: 'admin'} },
  { succeded: true, userProfile: { id: 2, fullname: 'Trainer', role: 'trainer', email: 'trainer'} },
  { succeded: true, userProfile: { id: 3, fullname: 'Student', role: 'student', email: 'student'} },
];
