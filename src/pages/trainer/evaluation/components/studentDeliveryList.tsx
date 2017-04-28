import * as React from 'react';
import { StudentListRowComponent } from './studentDeliveryListRow';
import { exerciseEvaluationMockedData } from '../../../../rest-api/trainer/exerciseEvaluationMockedData';
const styles: any = require('./studentDeliveryList.scss');

interface Props {
  onGradeChange(evaluationId: number, grade: number): void;
}

export const StudentDeliveryListComponent: React.StatelessComponent<Props> = (props) => {
  return (
    <div className={styles.container}>
      {deliveryEvaluationMockedData.map((deliveryInfo) =>
        <StudentListRowComponent
          key={deliveryInfo.student.id}
          evaluationInfo={deliveryInfo}
          onGradeChange={props.onGradeChange}
        />,
      )}
    </div>
  );
};
