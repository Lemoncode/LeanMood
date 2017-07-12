import { connect } from 'react-redux';
import { IAppState } from '../../../../reducers';
import { EditStudentPage } from './page';
import { summaryStudentByIdRequestStarted } from './actions/summaryStudentRequest';

const mapStateToProps = (state: IAppState, ownProps) => ({
  studentId: Number(ownProps.params.id) || 0,
  student: state.adminStudent.editingStudentSummary,
});

const mapDispatchToProps = (dispatch) => ({
  getstudent: (studentId: number) => dispatch(summaryStudentByIdRequestStarted(studentId)),
});

export const EditStudentPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditStudentPage);
