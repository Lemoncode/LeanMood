import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router';
import { multilineTrim } from '../../../../common/parse/multilineTrim';
import { dashboardIcons, DashboardComponent } from '../../../../common/components/dashboard';
import { trainerRouteEnums } from '../../../../common/routeEnums/trainer';
import { DashboardPage } from '../page';

describe('Trainer DashboardPage', () => {
  it('should return a div', () => {
    // Arrange

    // Act
    const component = shallow(
      <DashboardPage />,
    );

    // Assert
    expect(component.type()).to.be.equals('div');
  });

  it('should render as expected', () => {
    // Arrange
    const flexBasis = 100 / 2;
    const expectedDashboardItemOne = `
      <a class="btn btn-default item" style="flex-basis:${flexBasis}%;">
        <i class="${dashboardIcons.evaluation}"></i>
        <h4 class="name">Student evaluation</h4>
      </a>
    `;

    const expectedDashboardItemTwo = `
      <a class="btn btn-default item" style="flex-basis:${flexBasis}%;">
        <i class="${dashboardIcons.training}"></i>
        <h4 class="name">Edit training content</h4>
      </a>
    `;

    const expectedComponent = `
      <div class="container">
        <a>Go back to training list</a>
        <h3 class="title">Trainer dashboard</h3>
        <div class="dashboard">
          <div class="dashboardItems">
            ${expectedDashboardItemOne}
            ${expectedDashboardItemTwo}
          </div>
        </div>
      </div>
    `;

    // Act
    const component = shallow(
      <DashboardPage />,
    );

    // Assert
    expect(component.html()).to.be.equal(multilineTrim(expectedComponent));

    // NOTE: html() does not render Link.to property as href
    expect(component.find(DashboardComponent).prop('items')[0].linkTo)
      .to.be.equal(`${trainerRouteEnums.training.base}/1/evaluation`);
    expect(component.find(DashboardComponent).prop('items')[1].linkTo).to.be
      .to.be.equal(`${trainerRouteEnums.training.base}/1/edit`);
  });
});
