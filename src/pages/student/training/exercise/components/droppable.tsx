import * as React from 'react';
const styles: any = require('./droppable.scss');

interface State {
  uploadedFile: File;
}

export class DroppableComponent extends React.Component<{}, State> {
  private inputFile: HTMLInputElement;

  constructor() {
    super();

    this.state = {
      uploadedFile: null,
    };

    this.setInputRef = this.setInputRef.bind(this);
    this.onClickDroppable = this.onClickDroppable.bind(this);
    this.onUploadFile = this.onUploadFile.bind(this);
  }

  public render() {
    return (
      <div
        className={styles.droppable}
        onDragOver={this.onDragOver}
        onClick={this.onClickDroppable}
      >
        <span className={`text-center glyphicon glyphicon-download-alt ${styles.icon}`} />
        <span className={`text-center ${styles.text}`}>
          {this.getDroppableText()}
        </span>
        <input type="file" className="hidden" ref={this.setInputRef} onChange={this.onUploadFile} />
      </div>
    );
  }

  private getDroppableText(): string {
    let displayedText = 'Choose a file or drag it here';
    if (this.state.uploadedFile) {
      displayedText = this.state.uploadedFile.name;
    }

    return displayedText;
  }

  private setInputRef(inputElement) {
    this.inputFile = inputElement;
  }

  private onClickDroppable(event: React.MouseEvent<HTMLDivElement>) {
    this.inputFile.click();
  }

  private onDragOver(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
  };

  private onUploadFile(event: React.MouseEvent<HTMLInputElement>) {
    const uploadedFile = event.currentTarget.files[0];
    this.setState({ uploadedFile });
  }
}
