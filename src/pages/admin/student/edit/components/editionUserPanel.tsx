import * as React from 'react';
import { Link } from 'react-router';
import { StudentSummary } from '../../../../../model/studentSummary';

interface Props {
    student: StudentSummary;
}

export const EditionUserPanel: React.StatelessComponent<Props> = (props) => {
  return (
  <div>
   <span>Name: {props.student.fullname}</span>
    <br />
    <span>Email: {props.student.email}</span>
   <br />
   <span>Is Active?: {props.student.isActive ? 'Yes' : 'No'}</span>
  </div>
  );
};

EditionUserPanel.displayName = 'EditionUserPanel';
