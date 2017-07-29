import { adminActionEnums } from '../../../../../common/actionEnums/admin';
import { StudentSummary } from '../../../../../model/studentSummary';
import { studentAPI } from '../../../../../rest-api';

export const summaryStudentListRequestStarted = () => {
  return (dispatcher) => {
    const promise = studentAPI.getStudentSummaryList();

    promise.then(
      (data) => dispatcher(summaryStudentListRequestCompleted(data)),
    );

    return promise;
  };
};

export const summaryStudentListRequestCompleted = (studentSummaryList: StudentSummary[]) => ({
  payload: studentSummaryList,
  type: adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED,
});
