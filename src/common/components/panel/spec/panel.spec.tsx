import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { PanelComponent } from '../panel';

describe('PanelComponent', () => {
  it('should be defined', () => {
    // Arrange
    // Act
    const panelComponent = shallow(
      <PanelComponent panelList={[]} activePanelId={''}/>,
    );

    // Assert
    expect(panelComponent).not.to.be.undefined;
  });

  it('should render empty div when empty panel is selected', () => {
    // Arrange
    // Act
    const panelComponent = shallow(
      <PanelComponent panelList={[]} activePanelId={''}/>,
    );

    // Assert
    const expectedDomTree = `<div></div>`;
    expect(panelComponent.html()).to.be.equals(expectedDomTree);
  });

  it('should render an inner component a given panel is selected', () => {
    // Arrange
    const innerComponent = () => <div><span>dummy component</span></div>;

    // Act
    const panelComponent = shallow(
      <PanelComponent panelList={[{panelId: 'mypanel', component: innerComponent}]} activePanelId={'mypanel'}/>,
    );

    // Assert
    const expectedDomTree = `<div><span>dummy component</span></div>`;
    expect(panelComponent.html()).to.be.equals(expectedDomTree);
  });

  it('should render an empty div if no a given panel is selected and there are elements', () => {
    // Arrange
    const innerComponent = () => <div><span>dummy component</span></div>;

    // Act
    const panelComponent = shallow(
      <PanelComponent panelList={[{panelId: '', component: innerComponent}]} activePanelId={'mypanel'}/>,
    );

    // Assert
    const expectedDomTree = `<div></div>`;
    expect(panelComponent.html()).to.be.equals(expectedDomTree);
  });

  it('should render an second innercomponent when thwo inners and second panel id selected', () => {
    // Arrange
    const innerComponentA = () => <div><span>inner A</span></div>;
    const innerComponentB = () => <div><span>inner B</span></div>;
    const panelList = [{
                        panelId: 'a',
                        component: innerComponentA,
                       },
                       {
                        panelId: 'b',
                        component: innerComponentB,
                       },
                      ];
    // Act
    const panelComponent = shallow(
      <PanelComponent panelList={panelList} activePanelId={'b'}/>,
    );

    // Assert
    const expectedDomTree = `<div><span>inner B</span></div>`;
    expect(panelComponent.html()).to.be.equals(expectedDomTree);
  });
  it('should render an first innercomponent when thwo inners and first panel id selected', () => {
    // Arrange
    const innerComponentA = () => <div><span>inner A</span></div>;
    const innerComponentB = () => <div><span>inner B</span></div>;
    const panelList = [{
                        panelId: 'a',
                        component: innerComponentA,
                       },
                       {
                        panelId: 'b',
                        component: innerComponentB,
                       },
                      ];
    // Act
    const panelComponent = shallow(
      <PanelComponent panelList={panelList} activePanelId={'a'}/>,
    );

    // Assert
    const expectedDomTree = `<div><span>inner A</span></div>`;
    expect(panelComponent.html()).to.be.equals(expectedDomTree);
  });
  it('should render an empty div when thwo inners and selectin points to garbage', () => {
    // Arrange
    const innerComponentA = () => <div><span>inner A</span></div>;
    const innerComponentB = () => <div><span>inner B</span></div>;
    const panelList = [{
                        panelId: 'a',
                        component: innerComponentA,
                       },
                       {
                        panelId: 'b',
                        component: innerComponentB,
                       },
                      ];
    // Act
    const panelComponent = shallow(
      <PanelComponent panelList={panelList} activePanelId={'whatever'}/>,
    );

    // Assert
    const expectedDomTree = `<div></div>`;
    expect(panelComponent.html()).to.be.equals(expectedDomTree);
  });
});
