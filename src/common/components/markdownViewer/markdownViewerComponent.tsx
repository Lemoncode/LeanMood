import * as React from 'react';
import { marksy } from 'marksy';

const compile = marksy({
  // TODO: extract into a new <DynamicLink /> that analyze "href" and render a <Link /> or <a />
  a: ({ target, children, ...other }) => (
    <a target="_self" {...other}>{children}</a>
  ),
});

export interface MarkDownViewerComponentProps {
  content: string;
}

const getMarkDownChildren = (content: string): React.ReactNode => {
  let childrenComponent: React.ReactNode = null;

  if (content) {
    childrenComponent = compile(content).tree;
  }

  return childrenComponent;
};

export const MarkDownViewerComponent: React.StatelessComponent<MarkDownViewerComponentProps> = ({ content }) => {
  return (
    <div>
      {getMarkDownChildren(content)}
    </div>
  );
};

MarkDownViewerComponent.displayName = 'MarkDownViewerComponent';
