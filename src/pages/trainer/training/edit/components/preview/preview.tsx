import * as React from 'react';
import { MarkDownViewerComponent } from '../../../../../../common/components/markdownViewer';

interface Props {
  content: string;
}

export const PreviewComponent: React.StatelessComponent<Props> = ({ content }) => {
  return (
    <MarkDownViewerComponent content={content} />
  );
};

PreviewComponent.displayName = 'PreviewComponent';
