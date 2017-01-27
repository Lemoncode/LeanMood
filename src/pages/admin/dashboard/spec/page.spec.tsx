import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {Link} from 'react-router';
import {multilineTrim} from '../../../../common/parse/multilineTrim';
import {dashboardIcons} from '../../../../common/components/dashboard';
import {adminRouteEnums} from '../../../../common/routeEnums/admin';
import {DashboardPage} from '../page';

describe('Admin DashboardPage', () => {
  it('should be defined', () => {
    // Arrange

    // Act
    const component = shallow(
      <DashboardPage />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('should render as expected', () => {
    // Arrange
    const expectedDashboardItemOne = `
      <a class="btn btn-default item" style="flex-basis:50%;">
        <i class="${dashboardIcons.students}"></i>
        <h4 class="name">Manage students</h4>
      </a>
    `;

    const expectedDashboardItemTwo = `
      <a class="btn btn-default item" style="flex-basis:50%;">
        <i class="${dashboardIcons.trainings}"></i>
        <h4 class="name">Manage trainings</h4>
      </a>
    `;

    const expectedComponent = `
      <div>
        <h3 class="title">Admin dashboard</h3>
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
    expect(component.find('DashboardComponent').prop('items')[0].linkTo).to.be.equal(adminRouteEnums.student.list);
    expect(component.find('DashboardComponent').prop('items')[1].linkTo).to.be.equal(adminRouteEnums.training.list);
  });
});
