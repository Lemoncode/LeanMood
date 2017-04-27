import * as React from 'react';
import {shallow, mount} from 'enzyme';
import {Link} from 'react-router';
import {multilineTrim} from '../../../../common/parse/multilineTrim';
import {dashboardIcons} from '../../../../common/components/dashboard';
import {trainerRouteEnums} from '../../../../common/routeEnums/trainer';
import {DashboardPage} from '../page';

describe('Trainer DashboardPage', () => {
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
    const flexBasis = 100 / 3;
    const expectedDashboardItemOne = `
      <a class="btn btn-default item" style="flex-basis:${flexBasis}%;">
        <i class="${dashboardIcons.evaluation}"></i>
        <h4 class="name">Student evaluation</h4>
      </a>
    `;

    const expectedDashboardItemTwo = `
      <a class="btn btn-default item" style="flex-basis:${flexBasis}%;">
        <i class="${dashboardIcons.trainings}"></i>
        <h4 class="name">Trainings</h4>
      </a>
    `;

    const expectedDashboardItemThree = `
      <a class="btn btn-default item" style="flex-basis:${flexBasis}%;">
        <i class="${dashboardIcons.training}"></i>
        <h4 class="name">Edit training content</h4>
      </a>
    `;

    const expectedComponent = `
      <div>
        <h3 class="title">Trainer dashboard</h3>
        <div class="dashboard">
          <div class="dashboardItems">
            ${expectedDashboardItemOne}
            ${expectedDashboardItemTwo}
            ${expectedDashboardItemThree}
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
    expect(component.find('DashboardComponent').prop('items')[0].linkTo).to.be.equal(trainerRouteEnums.evaluation);
    expect(component.find('DashboardComponent').prop('items')[1].linkTo).to.be.equal(trainerRouteEnums.training.list);
    expect(component.find('DashboardComponent').prop('items')[2].linkTo).to.be
      .equal(`${trainerRouteEnums.training.edit}/1`);
  });
});
