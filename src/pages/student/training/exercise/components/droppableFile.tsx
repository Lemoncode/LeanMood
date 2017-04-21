import * as React from 'react';
const styles: any = require('./droppableFile.scss');

interface State {
  uploadedFile: File;
}

interface Props {
  onFileChange(file: File): any;
}

export class DroppableFileComponent extends React.Component<Props, State> {
  private inputFile: HTMLInputElement;

  constructor() {
    super();

    this.state = {
      uploadedFile: null,
    };

    this.setInputRef = this.setInputRef.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  public render() {
    return (
      <div
        className={styles.droppable}
        onDragOver={this.onDragOver}
        onClick={this.onClick}
        onDrop={this.onDrop}
      >
        <span className={`text-center glyphicon glyphicon-download-alt ${styles.icon}`} />
        <span className={`text-center ${styles.text}`}>
          {this.getDroppableText()}
        </span>
        <input type="file" className="hidden" ref={this.setInputRef} onChange={this.onChange} />
      </div>
    );
  }

  private getDroppableText(): string {
    let displayedText = 'Choose a file or drag it here';
    const { uploadedFile } = this.state;

    // TODO: Maybe show file size?
    if (uploadedFile) {
      displayedText = uploadedFile.name;
    }

    return displayedText;
  }

  private setInputRef(inputElement) {
    this.inputFile = inputElement;
  }

  private onClick(event: React.MouseEvent<HTMLDivElement>) {
    this.inputFile.click();
  }

  private onDragOver(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
  };

  private onDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    this.onFileChange(event.dataTransfer.files[0]);
  }

  private onChange(event: React.MouseEvent<HTMLInputElement>) {
    this.onFileChange(event.currentTarget.files[0]);
  }

  private onFileChange(file: File) {
    if (file) {
      this.props.onFileChange(file);
    }
  }

}
