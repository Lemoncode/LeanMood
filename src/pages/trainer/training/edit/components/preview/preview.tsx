import * as React from 'react';
import { MarkDownViewerComponent } from '../../../../../../common/components/markdownViewer';

interface Props {
  content: string;
  className?: string;
}

export const PreviewComponent: React.StatelessComponent<Props> = ({ content, className = '' }) => {
  return (
    <MarkDownViewerComponent className={className} content={content} />
  );
};

PreviewComponent.displayName = 'PreviewComponent';
