import * as React from 'react';
import { Link } from 'react-router';
import { StudentSummary } from '../../../../../model/studentSummary';
import { InputComponent , CheckboxComponent} from '../../../../../common/components/form';

interface Props {
    student: StudentSummary;
}

export const EditionUserPanel: React.StatelessComponent<Props> = (props) => {
  return (
  <div>
      <InputComponent
            type="text"
            label="Name"
            labelClassName={`col-sm-2 control-label`}
            wrapperClassName="col-sm-8"
            name="Name"
            onChange={newFunction()}
            value={props.student.fullname}
            placeholder="Student name"
          />

          <InputComponent
            type="text"
            label="Email"
            labelClassName={`col-sm-2 control-label`}
            wrapperClassName="col-sm-8"
            name="Email"
            onChange={newFunction()}
            value={props.student.email}
            placeholder="Student email"
          />  

          <CheckboxComponent
            label="Is Active?"
            labelClassName={`col-sm-2 control-label`}
            name="Active"
            wrapperClassName="col-sm-8"
            value={props.student.isActive}
            onChange={newFunction()}
          />  
  </div>
  );
};

EditionUserPanel.displayName = 'EditionUserPanel';
function newFunction(): any {
  // WIP
  return () => { };
}
