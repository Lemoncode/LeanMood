import { adminActionEnums } from '../../../../../common/actionEnums/admin'
import { StudentSummary} from '../../../../../model/studentSummary'
import { studentApi } from '../../../../../rest-api'

export const summaryStudentListRequestStarted = () => {
  return function(dispatcher) {
    const promise = studentApi.getSummaryStudentList();

    promise.then(
      data => dispatcher(summaryStudentListRequestCompleted(data))
    )

    return promise;
  }
}

export const summaryStudentListRequestCompleted = (studentSummaryList : StudentSummary[]) => ({
    type: adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED,
    payload: studentSummaryList
});
