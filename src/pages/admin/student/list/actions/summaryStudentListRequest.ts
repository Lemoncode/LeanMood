import { adminActionEnums } from '../../../../../common/actionEnums/admin'
import { StudentSummary} from '../../../../../model/studentSummary'

export const summaryStudentListRequestCompleted = (studentSummaryList : StudentSummary[]) => ({
    type: adminActionEnums.GET_SUMMARY_TRAINING_REQUEST_COMPLETED,
    payload: studentSummaryList
});
