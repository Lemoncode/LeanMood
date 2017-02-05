import { connect } from 'react-redux';
import { IAppState } from '../../../../reducers';
import { studentFetchRequestStarted, studentSaveRequestStarted } from './actions/studentFetchRequest';
import { EditStudentPage } from './page';
import { Student } from '../../../../model/student';

const mapStateToProps = (state: IAppState) => ({
  student: state.adminStudent.editingStudent,
});

const mapDispatchToProps = (dispatch) => ({
  getStudent: (id: number) => dispatch(studentFetchRequestStarted(id)),
  saveStudent: (student: Student) => dispatch(studentSaveRequestStarted(student)),
});

export const EditStudentPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditStudentPage);
