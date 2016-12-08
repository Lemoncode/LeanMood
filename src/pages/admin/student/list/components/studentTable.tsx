import * as React from 'react';
import { StudentSummary } from '../../../../../model/studentSummary'
import { StudentRowComponent } from './studentRow'

interface Props {
    studentList : StudentSummary[];
}

export const StudentTableComponent = (props : Props = {studentList: []}) => {
    return (
      <table>
        <tbody>
          {
              props.studentList.map((student) =>
                <StudentRowComponent
                  key={student.id}
                  student={student}
                />
              
              )
          }
        </tbody>
      </table>
    );
}
