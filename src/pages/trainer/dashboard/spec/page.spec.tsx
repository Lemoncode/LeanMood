import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router';
import { multilineTrim } from '../../../../common/parse/multilineTrim';
import { dashboardIcons, DashboardComponent } from '../../../../common/components/dashboard';
import { trainerRouteEnums } from '../../../../common/routeEnums/trainer';
import { DashboardPage } from '../page';
import { NavigationBar } from '../components/navigation';

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

  it('should render a DashboardComponent', () => {
    // Act
    const page = shallow(
      <DashboardPage />,
    );

    // Assert
    expect(page.find(DashboardComponent)).to.have.lengthOf(1);
  });

  it('should render a heading', () => {
    // Arrange
    const expectedHeading = '<h3 class="title">Trainer dashboard</h3>';

    // Act
    const page = shallow(
      <DashboardPage />,
    );

    // Assert
    expect(page.html()).to.contain(expectedHeading);
  });

  it('should render a NavigationBar', () => {
    // Act
    const page = shallow(
      <DashboardPage />,
    );

    // Assert
    expect(page.find(NavigationBar)).to.have.lengthOf(1);
  });
});
