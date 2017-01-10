import { adminActionEnums } from '../../../../../common/actionEnums/admin';
import { Student } from '../../../../../model/student';
import { studentApi } from '../../../../../rest-api';

export const studentFetchRequestStarted = (studentId) => {
  return (dispatcher) => {
    const promise = studentApi.getStudentById(studentId);

    promise.then(
      (data) => dispatcher(studentFetchRequestCompleted(data)),
    );

    return promise;
  };
};

export const studentFetchRequestCompleted = (student: Student) => ({
  type: adminActionEnums.GET_STUDENT_REQUEST_COMPLETED,
  payload: student,
});
