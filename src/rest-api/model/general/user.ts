export interface User {
  _id: string;
  email: string;
  name: string;
  lastName: string;
  avatar: string;
  role: string;
  trainings: UserTraining[];
}

interface UserTraining {
  role: string;
  trainingId: string;
}
