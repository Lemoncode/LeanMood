import { connect } from 'react-redux';
import { IAppState } from '../../../../reducers';
import { editTrainingRequestStarted } from './action/editTrainingRequest';
import { EditTrainingPage } from './page';

const mapStateToProps = (state: IAppState, ownProps) => {
    return {
        editTraining: state.adminTraining.editTraining,
        trainingId: ownProps.params.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTraining: (id: number) => dispatch(editTrainingRequestStarted(id)),
    };
};

export const EditTrainingPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EditTrainingPage);
