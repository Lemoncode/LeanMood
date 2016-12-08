import { connect } from 'react-redux';
import { ListStudentPage } from './page'
import { IAppState } from '../../../../reducers'
import { summaryStudentListRequestStarted } from './actions/summaryStudentListRequest'

const mapStateToProps = (state : IAppState) => ({
    studentList :   state.adminStudent.studentSummaryList
});

const mapDispatchToProps = (dispatch) => ({
  fetchStudents : () => dispatch(summaryStudentListRequestStarted())
});

export const ListStudentPageContainer = connect(
        mapStateToProps,
        mapDispatchToProps
)(ListStudentPage);
