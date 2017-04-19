import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { TrainingTOCPage, TrainingTOCPageProps } from '../page';
import { TrainingTOC } from '../../../../../model/student/trainingToc';

describe('TrainingTOCPage', () => {
  it('should return a div', () => {
    // Arrange
    const props: TrainingTOCPageProps = {
      fetchTrainingTOC: () => { },
      trainingId: 0,
      trainingTOC: new TrainingTOC(),
    };

    // Act
    const trainingTOCPage = shallow(
      <TrainingTOCPage {...props} />,
    );

    // Assert
    expect(trainingTOCPage.type()).to.be.equals('div');
  });

  it('should call "fetchTrainingTOC" method when mounted', () => {
    // Arrange
    const fetchTrainingTOC = sinon.spy();
    const props: TrainingTOCPageProps = {
      fetchTrainingTOC,
      trainingId: 123,
      trainingTOC: new TrainingTOC(),
    };

    // Act
    mount(
      <TrainingTOCPage {...props} />,
    );

    // Assert
    expect(fetchTrainingTOC.calledOnce).to.be.true;
  });

  it('should call "fetchTrainingTOC" method when updated', () => {
    // Arrange
    const fetchTrainingTOC = sinon.spy();
    const props: TrainingTOCPageProps = {
      fetchTrainingTOC,
      trainingId: 123,
      trainingTOC: new TrainingTOC(),
    };

    // Act
    const trainingTOCPage = mount(
      <TrainingTOCPage {...props} />,
    );
    trainingTOCPage.update();

    // Assert
    expect(fetchTrainingTOC.calledTwice).to.be.true;
  });

  it('should not call "fetchTrainingTOC" method if "trainingId" is 0 or NaN', () => {
    // Arrange
    const fetchTrainingTOC = sinon.spy();
    const props: TrainingTOCPageProps = {
      fetchTrainingTOC,
      trainingId: 0,
      trainingTOC: new TrainingTOC(),
    };

    // Act
    const trainingTOCPage = mount(
      <TrainingTOCPage {...props} />,
    );
    trainingTOCPage.setProps({ trainingId: NaN }).update();

    // Assert
    expect(fetchTrainingTOC.called).to.be.false;
  });

  it('should render the trainingTOC as React components with the training name', () => {
    // Arrange
    const props: TrainingTOCPageProps = {
      fetchTrainingTOC: () => { },
      trainingId: 123,
      trainingTOC: {
        id: 123,
        content: [
          '# Main title',
          'Description text with **bold text**',
        ].join('\n'),
        name: 'Training name',
      },
    };
    const expectedTitle = <h1 id="main-title">Main title</h1>;
    const expectedParagraph = <p>Description text with <strong>bold text</strong></p>;

    // Act
    const trainingTOCPage = shallow(
      <TrainingTOCPage {...props} />,
    );

    // Assert
    expect(trainingTOCPage.find('h2').someWhere((h2) => h2.text() === 'Training name')).to.be.true;
    expect(trainingTOCPage.contains(expectedTitle)).to.be.true;
    expect(trainingTOCPage.contains(expectedParagraph)).to.be.true;
  });

});
