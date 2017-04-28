import * as React from 'react';
import { SelectComponent } from '../../../../common/components/form';
import { Exercise } from '../../../../model/trainer/exercise';
import { StudentDeliveryListComponent } from './studentDeliveryList';
import { exerciseEvaluationMockedData } from '../../../../rest-api/trainer/exerciseEvaluationMockedData';
import { ExerciseEvaluation, StudentDelivery } from '../../../../model/trainer/deliveryEvaluation';
const styles: any = require('./evaluationForm.scss');

interface State {
  selectedExerciseId: number;
  exerciseEvaluation: ExerciseEvaluation[];
}

export class EvaluationFormComponent extends React.Component<{}, State> {
  constructor() {
    super();

    this.state = {
      selectedExerciseId: exerciseEvaluationMockedData[0].id,
      exerciseEvaluation: exerciseEvaluationMockedData,
    };

    this.onDeliveryChange = this.onDeliveryChange.bind(this);
    this.onGradeChange = this.onGradeChange.bind(this);
  }

  public render() {
    return (
      <form>
        <SelectComponent
          label=""
          name="exercise"
          onChange={this.onDeliveryChange}
          value={this.state.selectedExerciseId}
        >
          {this.state.exerciseEvaluation.map((exercise) => (
            <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
          ))}
        </SelectComponent>
        <div className="col-sm-8">
          <StudentDeliveryListComponent deliveryList={this.state.exerciseEvaluation} onGradeChange={this.onGradeChange} />
          <div className="form-group">
            <div className="col-xs-12 text-center">
              <button type="submit" className={`${styles.submitBtn} btn btn-primary`}>Save</button>
            </div>
          </div>
        </div>
      </form>
    );
  }

  public onDeliveryChange(event: React.FormEvent<HTMLSelectElement>) {
    const { value } = event.currentTarget;
    this.setState({
      ...this.state,
      selectedExerciseId: Number(value),
    });
  }

  public onGradeChange(deliveryId: number, grade: number) {
    const selectedEvaluation = this.state.exerciseEvaluation[this.state.selectedExerciseId];
    const index = selectedEvaluation.studentDelivery.findIndex((delivery) => delivery.id === deliveryId);
    if (index > -1) {
      const newStudentDelivery: StudentDelivery = { ...selectedEvaluation.studentDelivery[index] };
      newStudentDelivery.grade = grade;

      this.setState({
        ...this.state,
        deliveryEvaluations: [
          ...this.state.exerciseEvaluation.slice(0, index),
          newStudentDelivery,
          ...this.state.exerciseEvaluation.slice(index + 1),
        ],
      });
    }
  }
};
