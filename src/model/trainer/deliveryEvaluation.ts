export interface ExerciseEvaluation {
  id: number;
  name: string;
  studentDelivery: StudentDelivery[];
}

export interface StudentDelivery {
  id: number;
  isDelivered: boolean;
  deliveryDate: Date;
  link: string;
  grade: number;
  student: {
    id: number;
    avatar: string;
    fullname: string;
  };
}
