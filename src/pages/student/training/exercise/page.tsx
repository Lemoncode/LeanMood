import * as React from 'react';
import { DroppableFileComponent } from './components/droppableFile';

export class ExerciseDeliveryPage extends React.Component<{}, {}> {
  constructor() {
    super();

    this.state = {
      uploadedFile: null,
    };

    this.attachFile = this.attachFile.bind(this);
  }

  public render() {
    return (
      <div>
        <h1>Exercise - Build Bootstrap layout</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates vitae beatae ipsum harum optio,
          quidem blanditiis laboriosam! Amet sint nesciunt delectus facilis, vero nemo cupiditate aliquam obcaecati ab,
          quam dolores!
        </p>
        <div className="btn btn-primary">Upload your exercise</div>
        <DroppableFileComponent
          onFileChange={this.attachFile}
        />
      </div>
    );
  }

  private attachFile(uploadedFile: File) {
    // TODO: Connect with Redux to not lose current file
  }
}
