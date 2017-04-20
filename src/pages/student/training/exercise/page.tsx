import * as React from 'react';
import { DroppableComponent } from './components/droppable';

export class ExerciseDeliveryPage extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <h1>Exercise - Build Bootstrap layout</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates vitae beatae ipsum harum optio,
          quidem blanditiis laboriosam! Amet sint nesciunt delectus facilis, vero nemo cupiditate aliquam obcaecati ab,
          quam dolores!
        </p>
        <p>
          <a href="#">Download Exercise definition</a>
        </p>
        <div className="btn btn-primary">Upload your exercise</div>
        <DroppableComponent />
      </div>
    );
  }
}
