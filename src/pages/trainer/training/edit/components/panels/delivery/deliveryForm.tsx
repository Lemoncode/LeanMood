import * as React from 'react';
import {
  InputComponent,
  TextAreaComponent,
} from '../../../../../../../common/components/form';
const styles: any = require('./styles.scss');

interface Props {
  togglePanel(): void;
}

interface State {
  title: string;
  description: string;
}

// TODO: Refactor to Stateless component and connect with Redux
export class DeliveryFormComponent extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      title: '',
      description: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  public render() {
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset className="form-horizontal">
          <InputComponent
            type="text"
            label="Title"
            labelClassName={`${styles.title} col-sm-1 control-label`}
            wrapperClassName="col-sm-8"
            name="title"
            onChange={this.onChange}
            value={this.state.title}
            placeholder="Delivery title"
          />
        </fieldset>
        <fieldset className="row">
          <TextAreaComponent
            label="Description"
            className={styles.textarea}
            labelClassName="col-sm-2 control-label"
            name="description"
            wrapperClassName="col-sm-12"
            onChange={this.onChange}
            value={this.state.description}
            placeholder="Delivery description"
            rows={5}
          />
        </fieldset>
        <fieldset>
          <div className="form-group">
            <div className="row">
              <div className={`${styles.btnContainer} col-md-2 col-sm-6`}>
                <button type="submit" className="btn btn-block btn-primary">Save</button>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }

  private onChange(event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.currentTarget;

    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  private onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.togglePanel();
  }
}
