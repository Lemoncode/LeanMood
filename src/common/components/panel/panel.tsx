import * as React from 'react';

export class PanelItem  {
    public panelId: string;
    public component: (React.ComponentClass<any> | React.StatelessComponent<any>);
}

interface Props {
    activePanelId: string;
    panelList: PanelItem[];
}

const renderSelectedComponent = ({activePanelId, panelList}: Props) => {

  if (!activePanelId || activePanelId === '') {
    return (
      <div/>
    );
  }

  const panel = panelList.find((currentPanel) => currentPanel.panelId === activePanelId);

  if (panel && panel.component) {
    return React.createElement(panel.component as any);
  } else {
    return (
      <div/>
    );
  }

};

export const PanelComponent = (props: Props) => {
  return renderSelectedComponent(props);
};
