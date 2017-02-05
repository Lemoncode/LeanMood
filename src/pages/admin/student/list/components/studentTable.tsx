import * as React from 'react';
import { StudentSummary } from '../../../../../model/studentSummary';
import { StudentRowComponent } from './studentRow';

interface IProps {
  studentList: StudentSummary[];
}

export const StudentTableComponent = (props: IProps = {studentList: []}) => {
  return (
    <table>
      <tbody>
        {
          props.studentList.map((student) =>
            <StudentRowComponent
              key={student.id}
              student={student}
            />,
          )
        }
      </tbody>
    </table>
  );
};
