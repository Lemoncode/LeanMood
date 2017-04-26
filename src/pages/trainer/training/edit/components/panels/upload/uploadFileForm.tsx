import * as React from 'react';
import { InputComponent } from '../../../../../../../common/components/form';
import { DroppableFileComponent } from '../../../../../../../common/components/form/droppableFile/droppableFile';

interface Props {
  togglePanel(): void;
}

interface State {
  title: string;
  file: File;
}

// TODO: Refactor to container component and connect with Redux
export class UploadFileFormComponent extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      title: '',
      file: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
  }

  public render() {
    return (
      <form onSubmit={this.onSubmit} className="form-horizontal">
        <fieldset>
          <InputComponent
            type="text"
            label="Title"
            labelClassName={`col-sm-1 control-label`}
            wrapperClassName="col-sm-8"
            name="title"
            onChange={this.onTitleChange}
            value={this.state.title}
            placeholder="Custom title"
          />
          <div className="row">
            <div className="col-sm-3">
              <button type="submit" className="btn btn-primary btn-block">Upload your file</button>
            </div>
          </div>
          <DroppableFileComponent onFileChange={this.onFileChange} />
        </fieldset>
      </form>
    );
  }

  private onTitleChange(event: React.KeyboardEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;

    this.setState({
      ...this.state,
      title: value,
    });
  }

  private onFileChange(file: File) {
    this.setState({
      ...this.state,
      file,
    });
  }

  private onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.togglePanel();
  }
}
