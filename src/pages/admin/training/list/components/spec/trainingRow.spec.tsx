import { shallow } from 'enzyme';
import * as React from 'react';
import { Link } from 'react-router';
import { adminRouteEnums } from '../../../../../../common/routeEnums/admin';
import { multilineTrim } from '../../../../../../common/parse/multilineTrim';
import { TrainingSummary } from '../../../../../../model/trainingSummary';
import { TrainingRowComponent } from './../trainingRow';
import { TableRowComponent } from '../../../../../../common/components/virtualized/tableRow';

describe('TrainingRowComponent', () => {

  it('should be defined', () => {
    // Arrange
    const training = new TrainingSummary();
    const props = {
      className: '',
      columns: [],
      index: 0,
      isScrolling: false,
      rowData: training,
      style: {},
    };

    // Act
    const trainingRowComponent = shallow(
      <TrainingRowComponent {...props} />,
    );
    // Assert
    expect(trainingRowComponent).not.to.be.undefined;
  });

  it('should return a TableRowComponent', () => {
    // Arrange
    const trainingSummary = new TrainingSummary();
    trainingSummary.id = '1';
    trainingSummary.name = 'React';
    trainingSummary.isActive = true;
    const props = {
      className: 'rowClassName',
      columns: [],
      index: 0,
      isScrolling: false,
      rowData: trainingSummary,
      style: { color: 'red' },
    };

    // Act
    const tableRowComponent = shallow(
      <TrainingRowComponent {...props} />,
    );

    // Assert
    expect(tableRowComponent.type()).to.be.equals(TableRowComponent);
  });

  it('should pass its properties to TableRowComponent', () => {
    // Arrange
    const trainingSummary = new TrainingSummary();
    trainingSummary.id = '1';
    trainingSummary.name = 'React';
    trainingSummary.isActive = true;
    const props = {
      className: 'rowClassName',
      columns: [],
      index: 0,
      isScrolling: false,
      rowData: trainingSummary,
      style: { color: 'red' },
    };

    // Act
    const trainingRowComponent = shallow(
      <TrainingRowComponent {...props} />,
    );

    // Assert
    expect(trainingRowComponent.hasClass('rowClassName')).to.be.true;
    expect(trainingRowComponent.prop('columns')).to.be.deep.equals([]);
    expect(trainingRowComponent.prop('index')).to.be.equals(0);
    expect(trainingRowComponent.prop('isScrolling')).to.be.false;
    expect(trainingRowComponent.prop('rowData')).to.be.equals(trainingSummary);
    expect(trainingRowComponent.prop('style')).to.be.deep.equals({ color: 'red' });
  });
});

describe('when passing columns to TableRowComponent', () => {
  it('should pass as 1st child a disabled checkbox with the checked property according to training.isActive', () => {
    // Arrange
    const trainingSummary = new TrainingSummary();
    trainingSummary.id = '1';
    trainingSummary.name = 'React';
    trainingSummary.isActive = true;
    const props = {
      className: 'rowClassName',
      columns: [],
      index: 0,
      isScrolling: false,
      rowData: trainingSummary,
      style: { color: 'red' },
    };

    // Act
    const trainingRowComponent = shallow(
      <TrainingRowComponent {...props} />,
    );

    const checkbox = trainingRowComponent.childAt(0);

    // Assert
    expect(checkbox.type()).to.be.equals('input');
    expect(checkbox.prop('type')).to.be.equals('checkbox');
    expect(checkbox.prop('disabled')).to.be.true;
    expect(checkbox.prop('checked')).to.be.true;

  });

  it('should pass as 2nd child a span showing the training.name', () => {
    // Arrange
    const trainingSummary = new TrainingSummary();
    trainingSummary.id = '1';
    trainingSummary.name = 'React';
    trainingSummary.isActive = true;
    const props = {
      className: 'rowClassName',
      columns: [],
      index: 0,
      isScrolling: false,
      rowData: trainingSummary,
      style: { color: 'red' },
    };

    // Act
    const trainingRowComponent = shallow(
      <TrainingRowComponent {...props} />,
    );

    const span = trainingRowComponent.childAt(1);

    // Assert
    expect(span.type()).to.be.equals('span');
    expect(span.text()).to.be.equals('React');
  });

  it('should pass as 3th child a div with three childs', () => {
    // Arrange
    const trainingSummary = new TrainingSummary();
    trainingSummary.id = '1';
    trainingSummary.name = 'React';
    trainingSummary.isActive = true;
    const props = {
      className: 'rowClassName',
      columns: [],
      index: 0,
      isScrolling: false,
      rowData: trainingSummary,
      style: { color: 'red' },
    };

    // Act
    const trainingRowComponent = shallow(
      <TrainingRowComponent {...props} />,
    );

    const div = trainingRowComponent.childAt(2);

    // Assert
    expect(div.type()).to.be.equals('div');
    expect(div.prop('className')).to.be.equals('btn-group');
    expect(div.children().length).to.be.equals(3);
  });

  describe('action button tests', () => {
    it('should have as a 1st child a link to edit the trining', () => {
      // Arrange
      const trainingSummary = new TrainingSummary();
      trainingSummary.id = '1';
      trainingSummary.name = 'React';
      trainingSummary.isActive = true;
      const props = {
        className: 'rowClassName',
        columns: [],
        index: 0,
        isScrolling: false,
        rowData: trainingSummary,
        style: { color: 'red' },
      };

      // Act
      const trainingRowComponent = shallow(
        <TrainingRowComponent {...props} />,
      );
      const div = trainingRowComponent.childAt(2);
      const link = div.childAt(0);
      const icon = link.childAt(0);

      // Assert
      expect(link.type()).to.be.equals(Link);
      expect(link.prop('className')).to.be.equals('btn btn-primary');
      expect(link.prop('to')).to.be.equals(`${adminRouteEnums.training.edit}/1`);
      expect(icon.type()).to.be.equals('i');
      expect(icon.prop('className')).to.be.equals('glyphicon glyphicon-pencil');
    });
  });

  it('should have as a 2nd child a button to clone the trining', () => {
    // Arrange
    const trainingSummary = new TrainingSummary();
    trainingSummary.id = '1';
    trainingSummary.name = 'React';
    trainingSummary.isActive = true;
    const props = {
      className: 'rowClassName',
      columns: [],
      index: 0,
      isScrolling: false,
      rowData: trainingSummary,
      style: { color: 'red' },
    };

    // Act
    const trainingRowComponent = shallow(
      <TrainingRowComponent {...props} />,
    );
    const div = trainingRowComponent.childAt(2);
    const button = div.childAt(1);
    const icon = button.childAt(0);

    // Assert
    expect(button.type()).to.be.equals('button');
    expect(button.prop('className')).to.be.equals('btn btn-warning');
    expect(icon.type()).to.be.equals('i');
    expect(icon.prop('className')).to.be.equals('glyphicon glyphicon-duplicate');
  });

  it('should have as a 3nd child a button to delete the training', () => {
    // Arrange
    const trainingSummary = new TrainingSummary();
    trainingSummary.id = '1';
    trainingSummary.name = 'React';
    trainingSummary.isActive = true;
    const props = {
      className: 'rowClassName',
      columns: [],
      index: 0,
      isScrolling: false,
      rowData: trainingSummary,
      style: { color: 'red' },
    };

    // Act
    const trainingRowComponent = shallow(
      <TrainingRowComponent {...props} />,
    );
    const div = trainingRowComponent.childAt(2);
    const button = div.childAt(2);
    const icon = button.childAt(0);

    // Assert
    expect(button.type()).to.be.equals('button');
    expect(button.prop('className')).to.be.equals('btn btn-danger');
    expect(icon.type()).to.be.equals('i');
    expect(icon.prop('className')).to.be.equals('glyphicon glyphicon-trash');
  });
});
