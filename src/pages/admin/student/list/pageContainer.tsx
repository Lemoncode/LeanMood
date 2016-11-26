import { connect } from 'react-redux';
import { ListStudentPage } from './page'
import { IAppState } from '../../../../reducers'

const mapStateToProps = (state : IAppState) => {
};

const mapDispatchToProps = (dispatch) => {
};

export const PageContainer = connect(
        mapStateToProps,
        mapDispatchToProps
)(ListStudentPage);
