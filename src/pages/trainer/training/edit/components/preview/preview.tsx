import * as React from 'react';
import { MarkDownViewerComponent } from '../../../../../../common/components/markdownViewer';

interface Props {
  content: string;
  className?: string;
}

export const PreviewComponent: React.StatelessComponent<Props> = ({ content, className = '' }) => {
  return (
    <MarkDownViewerComponent className={className} content={[
      '# Main title',
      'Description text with **bold text**',
    ].join('\n')} />
  );
};

PreviewComponent.displayName = 'PreviewComponent';
