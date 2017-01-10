import * as React from 'react';
import { StudentSummary } from '../../../../../model/studentSummary';

interface IProps {
  student: StudentSummary;
}

export const StudentRowComponent = (props: IProps) => {
  return (
    <tr>
      <td>
        <span>{props.student.fullname}</span>
      </td>
      <td>
        <span>{props.student.email}</span>
      </td>
    </tr>
  );
};
