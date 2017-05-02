import * as React from 'react';
import * as moment from 'moment';
import { Link } from 'react-router';
import { SelectComponent } from '../../../../common/components/form';
import { StudentDelivery } from '../../../../model/trainer/deliveryEvaluation';
const styles: any = require('./studentDeliveryListRow.scss');

interface Props {
  studentDelivery: StudentDelivery;
  onGradeChange(evaluationId: number, grade: number): void;
}

export const StudentDeliveryListRowComponent: React.StatelessComponent<Props> = (props) => {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <img src={props.studentDelivery.student.avatar} alt="Student avatar" />
        <div style={{ paddingTop: '0.4em' }}>{props.studentDelivery.student.fullname}</div>
      </div>
      <div className={styles.col}>
        {getDeliveryStatus(props.studentDelivery.isDelivered)}
        {props.studentDelivery.isDelivered &&
          <div style={{ paddingTop: '0.4em' }}>{moment(props.studentDelivery.deliveryDate).format('DD/MM/YYYY')}</div>
        }
      </div>
      <div className={styles.col}>
        {props.studentDelivery.isDelivered &&
          <Link to={props.studentDelivery.link}>Download</Link>
        }
      </div>
      <div className={styles.col} style={{ alignItems: 'normal' }}>
        <div>Grade</div>
        <SelectComponent
          label=""
          labelClassName="hidden"
          name="grade"
          onChange={onGradeChange(props)}
          disabled={!props.studentDelivery.isDelivered}
          value={props.studentDelivery.grade}
        >
          {getGradeOptions()}
        </SelectComponent>
      </div>
    </div>
  );
};

StudentDeliveryListRowComponent.displayName = 'StudentDeliveryListRowComponent';

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

const onGradeChange = (props: Props) => (event: React.FormEvent<HTMLSelectElement>) => {
  const grade = Number(event.currentTarget.value);
  props.onGradeChange(props.studentDelivery.id, grade);
};

const getGradeOptions = () => {
  return ['--', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map((grade, index) => typeof grade === 'number' ? grade * 10 : grade)
    .map((grade) => <option key={grade} value={Number(grade) || null}>{grade}</option>);
};
