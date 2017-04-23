import * as React from 'react';
import { MarkDownViewerComponent } from '../../../../../../common/components/markdownViewer';
interface Props {
  content: string;
}

export const PreviewComponent = ({content}: Props) => {
  return (
      <MarkDownViewerComponent content={content}/>
  );
};
