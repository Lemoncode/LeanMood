import * as React from 'react';
import { Link } from 'react-router';
import { adminRouteEnums } from '../../../../common/routeEnums/admin';
import { StudentSummary } from '../../../../model/studentSummary';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { TabContainer , EditionUserPanel , EditionUserTrainingsPanel} from './components';
const styles: any = require('./pageStyles.scss');

interface Props {
  student: StudentSummary;
  getStudent: (id: string) => void;
  studentId: string;
}

interface State {
  value: number;
}

export class EditStudentPage extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  public componentDidMount() {
    const studentId: string = this.props.studentId;
    this.props.getStudent(studentId);
  }

  private handleChange = (event, value) => {
    this.setState({ value });
  }

  public render() {
    const { value } = this.state;

    return (
      <div>
          <h1>{this.props.student.fullname}</h1>
        <div>
          <AppBar className={styles.tabHeader}>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Main" />
              <Tab label="Trainings" />
            </Tabs>
          </AppBar>
          {value === 0 &&
            <TabContainer>
              <EditionUserPanel student={this.props.student}/>
            </TabContainer>}
          {value === 1 &&
          <TabContainer>
              <EditionUserTrainingsPanel />
          </TabContainer>}
        </div>
        <br />
        <div className="form-group">
            <div className="saveButton col-sm-10">
              <button className="btn btn-primary" type="submit">Save</button>
            </div>
          </div>

        <br />
        
        <Link to={adminRouteEnums.student.list}>Back to student list</Link>
        <Link to={adminRouteEnums.default}>Back to Dashboard</Link>

      </div>
    );
  }
}
