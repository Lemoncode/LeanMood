import * as React from 'react';

interface Props extends React.Props<StChild> {
}

export class StChild extends React.Component<Props, {}> {
   public render() {
       return (
         <div>
           <span> *** Sample child control under students: *** </span>
         </div>
        );
  }
}
