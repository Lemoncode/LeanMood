import { EditTrainingPage } from './page';
import { connect } from 'react-redux';
import { IAppState } from '../../../../reducers'

const mapStateToProps = (state: IAppState) => {

};

const mapDispatchToProps = (dispatch) => {

};

export const EditTrainingPageContainer = connect(
        mapStateToProps,
        mapDispatchToProps
)(EditTrainingPage);
