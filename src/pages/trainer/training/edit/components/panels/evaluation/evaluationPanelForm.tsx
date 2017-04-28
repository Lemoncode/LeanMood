import * as React from 'react';
import { InputComponent, SelectComponent } from '../../../../../../../common/components/form';
import { Exercise } from '../../../../../../../model/trainer/exercise';

interface Props {
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  exercises: Exercise[];
}

interface State {
  title: string;
  selectedExercise: number;
}

export class EvaluationFormComponent extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      title: '',
      selectedExercise: NaN,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSelectExercise = this.onSelectExercise.bind(this);
  }

  public render() {
    return (
      <form onSubmit={this.props.onSubmit} className="form-horizontal">
        <fieldset>
          <SelectComponent
            label="Exercise"
            labelClassName={`col-sm-2 control-label`}
            wrapperClassName="col-sm-8"
            name="exercise"
            onChange={this.onSelectExercise}
            value={this.state.selectedExercise}
          >
            {this.props.exercises.map(this.renderOption)}
          </SelectComponent>
          <InputComponent
            type="text"
            label="Title"
            labelClassName={`col-sm-2 control-label`}
            wrapperClassName="col-sm-8"
            name="title"
            onChange={this.onTitleChange}
            value={this.state.title}
            placeholder="Evaluation link title"
          />
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-primary" type="submit">Add evaluation</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }

  private renderOption(exercise: Exercise, index: number): React.ReactElement<HTMLOptionElement> {
    return (
      <option value={exercise.id} key={index}>{exercise.name}</option>
    );
  }

  private onTitleChange(event: React.FormEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    this.setState({
      ...this.state,
      title: value,
    });
  }

  private onSelectExercise(event: React.FormEvent<HTMLSelectElement>) {
    const { value } = event.currentTarget;
    this.setState({
      ...this.state,
      selectedExercise: Number(value),
    });
  }
}
