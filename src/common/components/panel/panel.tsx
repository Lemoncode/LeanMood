import * as React from 'react';
import * as CSSTransitionReplace from 'react-css-transition-replace';
import {IMarkdownEntry} from '../../../model/trainer/markdownEntry';

export class PanelItem {
  public panelId: string;
  public component: (React.ComponentClass<any> | React.StatelessComponent<any>);
}

interface Props {
  activePanelId: string;
  panelList: PanelItem[];
  insertMarkdownEntry?: (markdownEntry: IMarkdownEntry) => void;
}

const renderSelectedComponent = ({ activePanelId, panelList, insertMarkdownEntry }: Props) => {
  let panelItem = <div key={activePanelId} />;
  const panel = panelList.find((currentPanel) => currentPanel.panelId === activePanelId);

  if (panel) {
    const Component = panel.component;
    if (Component) {
      panelItem = <Component key={activePanelId} insertMarkdownEntry={insertMarkdownEntry}/>;
    }
  }

  return (
    <CSSTransitionReplace transitionName="cross-fade" transitionEnterTimeout={150} transitionLeaveTimeout={150}>
      {panelItem}
    </CSSTransitionReplace>
  );
};

export const PanelComponent: React.StatelessComponent<Props> = (props) => {
  return renderSelectedComponent(props);
};

PanelComponent.displayName = 'PanelComponent';
