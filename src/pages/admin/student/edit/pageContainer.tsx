import { connect } from 'react-redux';
import { IAppState } from '../../../../reducers';
import { EditStudentPage } from './page';
import { summaryStudentByIdRequestStarted } from './actions/summaryStudentRequest';

const mapStateToProps = (state : IAppState) => ({
  student: state.adminStudent.editingStudentSummary
});

const mapDispatchToProps = (dispatch) => ({
  getstudent: (id : number) => dispatch(summaryStudentByIdRequestStarted(id)),
});

export const EditStudentPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditStudentPage);
