import { FieldValidationResult } from 'lc-form-validation';
import { adminActionEnums } from '../../../../../common/actionEnums/admin';
import { Student } from '../../../../../model/student/student';
import { editStudentValidation } from '../components/editStudent.validation';

export const editStudentContentChangedStartedAction = (viewModel: Student, fieldName: string, value: string) => {
  return (dispatcher) => {
    const promise = editStudentValidation.validateField(viewModel, fieldName, value);

    promise.then((fieldValidationResult) => {
      dispatcher(editStudentContentChangedCompletedAction(fieldName, value, fieldValidationResult));
    });

    return promise;
  };
};

export interface IEditStudentContentChangedCompletedPayload {
  fieldName: string;
  value: any;
  fieldValidationResult: FieldValidationResult;
}

export const editStudentContentChangedCompletedAction =
  (fieldName: string, value: string, fieldValidationResult: FieldValidationResult) => ({
    type: adminActionEnums.EDIT_STUDENT_CONTENT_CHANGED,
    payload: {
      fieldName,
      value,
      fieldValidationResult,
    },
  });