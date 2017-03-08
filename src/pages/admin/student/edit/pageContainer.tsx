import { connect } from 'react-redux';
import { IAppState } from '../../../../reducers';
import { studentFetchRequestStarted, studentSaveRequestStarted } from './actions/studentFetchRequest';
import { editStudentContentChangedStartedAction } from './actions/editStudentContentChanged';
import { EditStudentPage } from './page';
import { Student } from '../../../../model/student/student';

const mapStateToProps = (state: IAppState, ownProps) => ({
  studentId: Number(ownProps.params.studentId) || 0,
  student: state.adminStudent.editingStudent,
  editStudentError: state.adminStudent.editingStudentErrors,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStudent: (id: number) => dispatch(studentFetchRequestStarted(id)),
  updateStudent: (viewModel: Student, fieldName: string, value: string) =>
    (dispatch(editStudentContentChangedStartedAction(viewModel, fieldName, value))),
  saveStudent: (student: Student) => dispatch(studentSaveRequestStarted(student)),
});

export const EditStudentPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditStudentPage);
