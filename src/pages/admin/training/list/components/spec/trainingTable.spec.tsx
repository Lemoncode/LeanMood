import { shallow, mount } from 'enzyme';
import * as React from 'react';
import { Table } from 'react-virtualized';
import { multilineTrim } from '../../../../../../common/parse/multilineTrim';
import { TrainingSummary } from '../../../../../../model/trainingSummary';
import { TrainingTableComponent } from '../trainingTable';
import { TrainingRowComponent } from '../trainingRow';

describe('TrainingTableComponent', () => {
  it('Should not be undefined', () => {
    // Arrange
    const trainingList = [];
    const width = 0;

    // Act
    const trainingTableComponent = shallow(
      <TrainingTableComponent width={width} trainingList={trainingList}/>,
    );

    // Assert
    expect(trainingTableComponent).not.to.be.undefined;

  });

  it('Should return a react-virtualized Table', () => {
     // Arrange
    const trainingList = [];
    const width = 0;

    // Act
    const trainingTableComponent = shallow(
      <TrainingTableComponent width={width} trainingList={trainingList}/>,
    );

    // Asser
    expect(trainingTableComponent.type()).to.be.equals(Table);
  });

  describe('header tests', () => {
    it('should render an header column to show the "isActive" training property', () => {
       // Arrange
      const trainingList = [];
      const width = 100;

      // Act
      const trainingTableComponent = shallow(
      <TrainingTableComponent width={width} trainingList={trainingList}/>,
      );
      const headerColumns = trainingTableComponent.children();

      // Assert
      expect(headerColumns.length).to.be.equals(3);
      expect(headerColumns.at(0).prop('label')).to.be.equals('Active');
      expect(headerColumns.at(0).prop('dataKey')).to.be.equals('isActive');
      expect(headerColumns.at(0).prop('width')).to.be.equals(10);
    });

    it('should render an header column to show the "name" training property', () => {
       // Arrange
      const trainingList = [];
      const width = 100;

      // Act
      const trainingTableComponent = shallow(
      <TrainingTableComponent width={width} trainingList={trainingList}/>,
      );
      const headerColumns = trainingTableComponent.children();

      // Assert
      expect(headerColumns.length).to.be.equals(3);
      expect(headerColumns.at(1).prop('label')).to.be.equals('Name');
      expect(headerColumns.at(1).prop('dataKey')).to.be.equals('name');
      expect(headerColumns.at(1).prop('width')).to.be.equals(70);
    });

    it('should render an header column to show the "action" training property', () => {
       // Arrange
      const trainingList = [];
      const width = 100;

      // Act
      const trainingTableComponent = shallow(
      <TrainingTableComponent width={width} trainingList={trainingList}/>,
      );
      const headerColumns = trainingTableComponent.children();

      // Assert
      expect(headerColumns.length).to.be.equals(3);
      expect(headerColumns.at(2).prop('label')).to.be.undefined;
      expect(headerColumns.at(2).prop('dataKey')).to.be.equals('');
      expect(headerColumns.at(2).prop('width')).to.be.equals(20);
    });

    describe('rows tests', () => {
      it('should use TrainingRowComponent to render rows', () => {
         // Arrange
        const trainingList = [];
        const width = 100;

        // Act
        const trainingTableComponent = shallow(
        <TrainingTableComponent width={width} trainingList={trainingList}/>,
        );

        // Assert
        expect(trainingTableComponent.prop('rowRenderer')).to.be.equals(TrainingRowComponent);
      });

      it('Should render as many rows as trainigs', () => {
        // Arrange
        const trainings: TrainingSummary[] = [
          {
            id: 2,
            isActive: true,
            name: 'John Doe',
            start: new Date(),
            end: new Date(),
          },
          {
            id: 3,
            isActive: false,
            name: 'Mark Somez',
            start: new Date(),
            end: new Date(),
          },
        ];

        const width = 600;

        // Act
        const trainingTableComponent = mount(
          <TrainingTableComponent width={width} trainingList={trainings}/>,
        );

        // Assert
        expect(trainingTableComponent.find('.ReactVirtualized__Table__row').length).to.be.equals(2);
      });

    });
  });
});
