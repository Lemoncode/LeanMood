import * as React from 'react';
import { marksy } from 'marksy';

const compile = marksy();

export interface Props {
  content: string;
}

const getMarkDownChildren = (content: string) : React.ReactNode => {
    let childrenComponent: React.ReactNode = null;

    if (content) {
      childrenComponent = compile(content).tree;
    }

    return childrenComponent;

};

export const MarkDownViewerComponent = ({content}: Props) => {
  return (
    <div>
      {getMarkDownChildren(content)}
    </div>
  );
};
