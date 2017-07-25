import { adminActionEnums } from '../../../../../common/actionEnums/admin';
import { StudentSummary } from '../../../../../model/studentSummary';
import { studentApi } from '../../../../../rest-api';

export const summaryStudentByIdRequestStarted  = (studentId: number) => {
  return function(dispatcher) {
    const promise = studentApi.getStudentById(studentId);

    promise.then(
      (data) => {
        dispatcher(summaryStudentByIdRequestCompleted(data));
      },
    );

    return promise;
  };
};

export const summaryStudentByIdRequestCompleted  = (student: StudentSummary) => {
  return {
      payload: student,
      type: adminActionEnums.GET_SUMMARY_STUDENT_BY_ID_REQUEST_COMPLETED,
    };
};
