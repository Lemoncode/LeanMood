import * as React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'react-router';
import {multilineTrim} from '../../../../parse/multilineTrim';
import {DashboardItemComponent, IDashboardItem} from '../dashboardItem';

describe('DashboardItemComponent', () => {
  it('should be defined', () => {
    // Arrange
    const item: IDashboardItem = {
      icon: '',
      name: '',
      linkTo: '',
    };

    // Act
    const component = shallow(
      <DashboardItemComponent
        item={item}
      />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('should render item as expected', () => {
    // Arrange
    const item: IDashboardItem = {
      icon: 'test icon',
      name: 'test name',
      linkTo: 'test/link',
    };

    const expectedDomTree = `
      <a class="btn btn-default item">
        <i class="${item.icon}"></i>
        <h4 class="name">${item.name}</h4>
      </a>
    `;

    // Act
    const component = shallow(
      <DashboardItemComponent
        item={item}
      />,
    );

    // Assert
    expect(component.html()).to.be.equal(multilineTrim(expectedDomTree));

    // NOTE: html() does not render Link.to property as href
    expect(component.type()).to.be.equal(Link);
    expect(component.prop('to')).to.be.equal(item.linkTo);
  });

  it('should render styles as expected', () => {
    // Arrange
    const item: IDashboardItem = {
      icon: '',
      name: '',
      linkTo: '',
    };

    const styles = {
      color: 'test',
    };

    const expectedDomTree = `
      <a class="btn btn-default item" style="color:test;">
        <i class=""></i>
        <h4 class="name"></h4>
      </a>
    `;

    // Act
    const component = shallow(
      <DashboardItemComponent
        item={item}
        style={styles}
      />,
    );

    // Assert
    expect(component.html()).to.be.equal(multilineTrim(expectedDomTree));
  });
});
