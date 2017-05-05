import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { PanelComponent } from '../panel';

describe('PanelComponent', () => {
  it('should be defined', () => {
    // Arrange
    // Act
    const panelComponent = shallow(
      <PanelComponent panelList={[]} activePanelId={''} />,
    );

    // Assert
    expect(panelComponent).not.to.be.undefined;
  });

  it('should render empty div when there is no panel ids matching activePanelId', () => {
    // Arrange
    // Act
    const panelComponent = shallow(
      <PanelComponent panelList={[]} activePanelId={''} />,
    );

    // Assert
    const expectedDomTree = `<div></div>`;
    expect(panelComponent.html()).to.contain(expectedDomTree);
  });

  it('should render only the panel matching its id with activePanelId', () => {
    // Arrange
    const innerComponentA = () => <div><span>Inner Component A</span></div>;
    const innerComponentB = () => <div><span>Inner Component B</span></div>;
    const activePanelId = 'panel B';
    const panelList = [
      { panelId: 'panel A', component: innerComponentA },
      { panelId: 'panel B', component: innerComponentB },
    ];

    // Act
    const panelComponent = shallow(
      <PanelComponent panelList={panelList} activePanelId={activePanelId} />,
    );

    // Assert
    expect(panelComponent.html()).to.contain('<div><span>Inner Component B</span></div>');
    expect(panelComponent.html()).to.not.contain('<div><span>Inner Component A</span></div>');
  });
});
