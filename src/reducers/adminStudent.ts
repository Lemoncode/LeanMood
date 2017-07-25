import { adminActionEnums } from '../common/actionEnums/admin';
import { StudentSummary } from '../model/student/studentSummary';
import { Student } from '../model/student/student';
import { IEditStudentErrors } from '../model/student/editStudentErrors';
import {FieldValidationResult} from 'lc-form-validation';

export class AdminStudentState {
  public studentSummaryList: StudentSummary[];
  public editingStudent: Student;
  public editingStudentErrors: IEditStudentErrors;

  public constructor() {
    this.studentSummaryList = [];
    this.editingStudent = new Student();
    this.editingStudentErrors = {
      fullname: new FieldValidationResult(),
      email: new FieldValidationResult(),
    };
  }
}

export const adminStudentReducer = (state: AdminStudentState = new AdminStudentState(), action) => {
  switch (action.type) {
    case adminActionEnums.GET_SUMMARY_STUDENT_REQUEST_COMPLETED:
      return handleGetSummaryStudentRequestCompleted(state, action.payload);
    case adminActionEnums.GET_STUDENT_REQUEST_COMPLETED:
      return handleGetStudentRequestCompleted(state, action.payload);
    case adminActionEnums.POST_STUDENT_REQUEST_COMPLETED:
      return handlePostStudentRequestCompleted(state, action.payload);
    default:
      return state;
  }
};

const handleGetSummaryStudentRequestCompleted = (state: AdminStudentState, payload: StudentSummary[]) => {
  return {
    ...state,
    studentSummaryList: payload,
  };
};

const handleGetStudentRequestCompleted = (state: AdminStudentState, payload: Student) => {
    return {
      ...state,
      editingStudent: payload,
    };
  };

const handlePostStudentRequestCompleted = (state: AdminStudentState, payload: boolean) => {
    return state;
  };
