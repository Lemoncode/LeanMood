import * as React from 'react';
import { EvaluationFormComponent } from './evaluationPanelForm';
import { Exercise } from '../../../../../../../model/trainer/exercise';

const exercises: Exercise[] = [
  { id: 1, name: 'Exercise 1' },
  { id: 2, name: 'Exercise 2' },
  { id: 3, name: 'Exercise 3' },
];

interface Props {
  togglePanel(): void;
}

export const EvaluationPanelComponent: React.StatelessComponent<Props> = (props) => {
  return (
    <div>
      <h4>Evaluation Component</h4>
      <EvaluationFormComponent exercises={exercises} togglePanel={props.togglePanel} />
    </div>
  );
};

EvaluationPanelComponent.displayName = 'EvaluationPanelComponent';
