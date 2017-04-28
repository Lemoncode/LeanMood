import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router';
import { SelectComponent } from '../../../../common/components/form';
import { DeliveryEvaluation } from '../../../../model/trainer/deliveryEvaluation';
const styles: any = require('./studentDeliveryListRow.scss');

interface Props {
  evaluationInfo: DeliveryEvaluation;
  onGradeChange(evaluationId: number, grade: number): void;
}

export const StudentListRowComponent: React.StatelessComponent<Props> = ({ evaluationInfo, onGradeChange }) => {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <img src={evaluationInfo.student.avatar} alt="Student avatar" />
        <div style={{ paddingTop: '0.4em' }}>{evaluationInfo.student.name}</div>
      </div>
      <div className={styles.col}>
        {getDeliveryStatus(evaluationInfo.delivery.isDelivered)}
        {evaluationInfo.delivery.isDelivered &&
          <div style={{ paddingTop: '0.4em' }}>{moment(evaluationInfo.delivery.deliveryDate).format('DD/MM/YYYY')}</div>
        }
      </div>
      <div className={styles.col}>
        {evaluationInfo.delivery.isDelivered &&
          <Link to={evaluationInfo.delivery.link}>Download</Link>
        }
      </div>
      <div className={styles.col} style={{ alignItems: 'normal' }}>
        <div>Grade</div>
        <SelectComponent
          label=""
          labelClassName="hidden"
          name="grade"
          onChange={onGradeChange}
          value={evaluationInfo.delivery.grade}
        >
          {getGradeOptions()}
        </SelectComponent>
      </div>
    </div>
  );
};

const getDeliveryStatus = (isDelivered: boolean): React.ReactNode => {
  let text = 'Not delivered';
  let className = 'text-danger';

  if (isDelivered) {
    text = 'Delivered';
    className = 'text-success';
  }

  return (
    <div className={className}>{text}</div>
  );
};

const getGradeOptions = () => {
  return ['--', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .map((grade) => typeof grade === 'number' ? (grade + 1) * 10 : grade)
    .map((grade) => <option key={grade} value={grade}>{grade}</option>);
};
