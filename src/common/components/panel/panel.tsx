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

  const panel = this.props.panels.find((currentPanel) => currentPanel.panelId === this.props.activePanelId);

  if (panel && panel.component) {
    return React.createElement(panel.component);
  } else {
    return (
      <div/>
    );
  }

};

export const PanelComponent = (props: Props) => {
  return renderSelectedComponent(props);
};
