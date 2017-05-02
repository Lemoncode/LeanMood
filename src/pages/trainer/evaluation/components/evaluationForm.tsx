import * as React from 'react';
import { Link } from 'react-router';
import { SelectComponent } from '../../../../common/components/form';
import { Exercise } from '../../../../model/trainer/exercise';
import { ExerciseEvaluation, StudentDelivery } from '../../../../model/trainer/deliveryEvaluation';
import { exerciseEvaluationMockedData } from '../../../../rest-api/trainer/exerciseEvaluationMockedData';
import { StudentDeliveryListComponent } from './studentDeliveryList';
const styles: any = require('./evaluationForm.scss');

interface State {
  selectedExerciseId: number;
  exerciseEvaluationList: ExerciseEvaluation[];
}

// FIXME: Extract exerciseEvaluationList from state to props and change grade using actions.
export class EvaluationFormComponent extends React.Component<{}, State> {
  constructor() {
    super();

    this.state = {
      selectedExerciseId: exerciseEvaluationMockedData[0].id,
      exerciseEvaluationList: exerciseEvaluationMockedData,
    };

    this.onDeliveryChange = this.onDeliveryChange.bind(this);
    this.onGradeChange = this.onGradeChange.bind(this);
  }

  public render() {
    const selectedExercise = this.state.exerciseEvaluationList.find((exercise) => {
      return exercise.id === this.state.selectedExerciseId;
    });

    return (
      <form>
        <SelectComponent
          label=""
          name="exercise"
          onChange={this.onDeliveryChange}
          value={this.state.selectedExerciseId}
        >
          {this.state.exerciseEvaluationList.map((exercise) => (
            <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
          ))}
        </SelectComponent>
        <div className="col-sm-8">
          <StudentDeliveryListComponent
            deliveryList={selectedExercise.studentDelivery}
            onGradeChange={this.onGradeChange}
          />
          <div className="form-group">
            <div className="col-xs-12 text-center">
              <Link to="/trainer/training/1/dashboard" className={`${styles.submitBtn} btn btn-primary`}>Save</Link>
            </div>
          </div>
        </div>
      </form>
    );
  }

  private onDeliveryChange(event: React.FormEvent<HTMLSelectElement>) {
    const selectedExerciseId = Number(event.currentTarget.value);
    this.setState({
      ...this.state,
      selectedExerciseId,
    });
  }

  // FIXME: Let the reducer change the state
  private onGradeChange(deliveryId: number, grade: number) {
    const { exerciseEvaluationList, selectedExerciseId } = this.state;
    const exercisePosition = exerciseEvaluationList.findIndex((exercise) => exercise.id === selectedExerciseId);

    if (exercisePosition > -1) {
      const selectedExercise = exerciseEvaluationList[exercisePosition];
      const deliveryPosition = selectedExercise.studentDelivery.findIndex((delivery) => delivery.id === deliveryId);

      if (deliveryPosition > -1) {
        const changedStudentDelivery: StudentDelivery = {
          ...selectedExercise.studentDelivery[deliveryPosition],
          grade,
        };

        const changedExercise: ExerciseEvaluation = {
          ...selectedExercise,
          studentDelivery: [
            ...selectedExercise.studentDelivery.slice(0, deliveryPosition),
            changedStudentDelivery,
            ...selectedExercise.studentDelivery.slice(deliveryPosition + 1),
          ],
        };

        this.setState({
          ...this.state,
          exerciseEvaluationList: [
            ...this.state.exerciseEvaluationList.slice(0, exercisePosition),
            changedExercise,
            ...this.state.exerciseEvaluationList.slice(exercisePosition + 1),
          ] as ExerciseEvaluation[],
        });
      }
    }

  }

};
