import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../parse/multilineTrim';
import {IDashboardItem} from '../components/dashboardItem';
import {DashboardComponent} from '../dashboard';

describe('DashboardComponent', () => {
  it('should be defined', () => {
    // Arrange

    // Act
    const component = shallow(
      <DashboardComponent
        items={[]}
      />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('should render one item as expected', () => {
    // Arrange
    const items: IDashboardItem[] = [
      {icon: 'test icon', name: 'test name', linkTo: 'test/link'},
    ];

    const expectedDashboardItem = `
      <a class="btn btn-default item" style="flex-basis:100%;">
        <i class="${items[0].icon}"></i>
        <h4 class="name">${items[0].name}</h4>
      </a>
    `;

    const expectedComponent = `
      <div class="dashboard">
        <div class="dashboardItems">
          ${expectedDashboardItem}
        </div>
      </div>
    `;

    // Act
    const component = shallow(
      <DashboardComponent
        items={items}
      />,
    );

    // Assert
    expect(component.html()).to.be.equal(multilineTrim(expectedComponent));
  });

  it('should render two items as expected', () => {
    // Arrange
    const items: IDashboardItem[] = [
      {icon: 'test icon1', name: 'test name1', linkTo: 'test/link1'},
      {icon: 'test icon2', name: 'test name2', linkTo: 'test/link2'},
    ];

    const expectedDashboardItemOne = `
      <a class="btn btn-default item" style="flex-basis:50%;">
        <i class="${items[0].icon}"></i>
        <h4 class="name">${items[0].name}</h4>
      </a>
    `;

    const expectedDashboardItemTwo = `
      <a class="btn btn-default item" style="flex-basis:50%;">
        <i class="${items[1].icon}"></i>
        <h4 class="name">${items[1].name}</h4>
      </a>
    `;

    const expectedComponent = `
      <div class="dashboard">
        <div class="dashboardItems">
          ${expectedDashboardItemOne}
          ${expectedDashboardItemTwo}
        </div>
      </div>
    `;

    // Act
    const component = shallow(
      <DashboardComponent
        items={items}
      />,
    );

    // Assert
    expect(component.html()).to.be.equal(multilineTrim(expectedComponent));
  });

  it('should render three items as expected', () => {
    // Arrange
    const items: IDashboardItem[] = [
      {icon: 'test icon1', name: 'test name1', linkTo: 'test/link1'},
      {icon: 'test icon2', name: 'test name2', linkTo: 'test/link2'},
      {icon: 'test icon3', name: 'test name3', linkTo: 'test/link3'},
    ];

    const expectedFlexBasis = 100 / 3;
    const expectedDashboardItemOne = `
      <a class="btn btn-default item" style="flex-basis:${expectedFlexBasis}%;">
        <i class="${items[0].icon}"></i>
        <h4 class="name">${items[0].name}</h4>
      </a>
    `;

    const expectedDashboardItemTwo = `
      <a class="btn btn-default item" style="flex-basis:${expectedFlexBasis}%;">
        <i class="${items[1].icon}"></i>
        <h4 class="name">${items[1].name}</h4>
      </a>
    `;

    const expectedDashboardItemThree = `
      <a class="btn btn-default item" style="flex-basis:${expectedFlexBasis}%;">
        <i class="${items[2].icon}"></i>
        <h4 class="name">${items[2].name}</h4>
      </a>
    `;

    const expectedComponent = `
      <div class="dashboard">
        <div class="dashboardItems">
          ${expectedDashboardItemOne}
          ${expectedDashboardItemTwo}
          ${expectedDashboardItemThree}
        </div>
      </div>
    `;

    // Act
    const component = shallow(
      <DashboardComponent
        items={items}
      />,
    );

    // Assert
    expect(component.html()).to.be.equal(multilineTrim(expectedComponent));
  });

  it('should render more than three items as expected', () => {
    // Arrange
    const items: IDashboardItem[] = [
      {icon: 'test icon1', name: 'test name1', linkTo: 'test/link1'},
      {icon: 'test icon2', name: 'test name2', linkTo: 'test/link2'},
      {icon: 'test icon3', name: 'test name3', linkTo: 'test/link3'},
      {icon: 'test icon4', name: 'test name4', linkTo: 'test/link4'},
      {icon: 'test icon5', name: 'test name5', linkTo: 'test/link5'},
    ];

    const expectedFlexBasis = 100 / 3;
    const expectedDashboardItemOne = `
      <a class="btn btn-default item" style="flex-basis:${expectedFlexBasis}%;">
        <i class="${items[0].icon}"></i>
        <h4 class="name">${items[0].name}</h4>
      </a>
    `;

    const expectedDashboardItemTwo = `
      <a class="btn btn-default item" style="flex-basis:${expectedFlexBasis}%;">
        <i class="${items[1].icon}"></i>
        <h4 class="name">${items[1].name}</h4>
      </a>
    `;

    const expectedDashboardItemThree = `
      <a class="btn btn-default item" style="flex-basis:${expectedFlexBasis}%;">
        <i class="${items[2].icon}"></i>
        <h4 class="name">${items[2].name}</h4>
      </a>
    `;

    const expectedDashboardItemFour = `
      <a class="btn btn-default item" style="flex-basis:${expectedFlexBasis}%;">
        <i class="${items[3].icon}"></i>
        <h4 class="name">${items[3].name}</h4>
      </a>
    `;

    const expectedDashboardItemFive = `
      <a class="btn btn-default item" style="flex-basis:${expectedFlexBasis}%;">
        <i class="${items[4].icon}"></i>
        <h4 class="name">${items[4].name}</h4>
      </a>
    `;

    const expectedComponent = `
      <div class="dashboard">
        <div class="dashboardItems">
          ${expectedDashboardItemOne}
          ${expectedDashboardItemTwo}
          ${expectedDashboardItemThree}
          ${expectedDashboardItemFour}
          ${expectedDashboardItemFive}
        </div>
      </div>
    `;

    // Act
    const component = shallow(
      <DashboardComponent
        items={items}
      />,
    );

    // Assert
    expect(component.html()).to.be.equal(multilineTrim(expectedComponent));
  });
});
