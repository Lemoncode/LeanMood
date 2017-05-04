import * as React from 'react';
import { DroppableFileComponent } from '../../../../../common/components/form/droppableFile/droppableFile';
import { NavigationBar } from './components/navigation';

export class ExerciseDeliveryPage extends React.Component<{}, {}> {
  constructor() {
    super();

    this.attachFile = this.attachFile.bind(this);
  }

  public render() {
    return (
      <div>
        <NavigationBar />
        <h1>Exercise - Build Bootstrap layout</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates vitae beatae ipsum harum optio,
          quidem blanditiis laboriosam! Amet sint nesciunt delectus facilis, vero nemo cupiditate aliquam obcaecati ab,
          quam dolores!
        </p>
        <div className="row">
          <div className="col-md-3">
            <button className="btn btn-primary btn-block">Upload your exercise</button>
          </div>
        </div>
        <DroppableFileComponent />
      </div>
    );
  }

  private attachFile(uploadedFile: File) {
    // TODO: Connect with Redux to not lose current file
  }
}
