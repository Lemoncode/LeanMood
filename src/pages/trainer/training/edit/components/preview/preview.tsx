import * as React from 'react';
import { MarkDownViewerComponent } from '../../../../../../common/components/markdownViewer';

interface Props {
  content: string;
  scrollSourceLine?: number;
  onScrollSourceLine?: (sourceLine) => any;
  className?: string;
}

export const PreviewComponent: React.StatelessComponent<Props> = (props) => {
  const { content, className = '', scrollSourceLine, onScrollSourceLine } = props;
  return (
    <MarkDownViewerComponent className={className}
      content={content}
      onScrollSourceLine={onScrollSourceLine}
      scrollSourceLine={scrollSourceLine}
    />
  );
};

PreviewComponent.displayName = 'PreviewComponent';
