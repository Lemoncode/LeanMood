import * as React from 'react';
import { StudentDeliveryListRowComponent } from './studentDeliveryListRow';
import { exerciseEvaluationMockedData } from '../../../../rest-api/trainer/exerciseEvaluationMockedData';
import { StudentDelivery } from '../../../../model/trainer/deliveryEvaluation';
const styles: any = require('./studentDeliveryList.scss');

interface Props {
  deliveryList: StudentDelivery[];
  onGradeChange(evaluationId: number, grade: number): void;
}

export const StudentDeliveryListComponent: React.StatelessComponent<Props> = (props) => {
  return (
    <div className={styles.container}>
      {props.deliveryList.map((delivery) =>
        <StudentDeliveryListRowComponent
          key={delivery.id}
          studentDelivery={delivery}
          onGradeChange={props.onGradeChange}
        />,
      )}
    </div>
  );
};

StudentDeliveryListComponent.displayName = 'StudentDeliveryListComponent';
