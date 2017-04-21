import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router';
import { studentRouteEnums } from '../../../../../common/routeEnums/student/';
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
    const trainingId = 123;
    const props: TrainingTOCPageProps = {
      fetchTrainingTOC,
      trainingId,
      trainingTOC: new TrainingTOC(),
    };

    // Act
    mount(
      <TrainingTOCPage {...props} />,
    );

    // Assert
    expect(fetchTrainingTOC.calledWithExactly(trainingId)).to.be.true;
  });

  it('should not call "fetchTrainingTOC" on update if trainingId and trainingTOC id are the same', () => {
    // Arrange
    const fetchTrainingTOC = sinon.spy();
    const props: TrainingTOCPageProps = {
      fetchTrainingTOC,
      trainingId: 123,
      trainingTOC: {
        id: 123,
        name: 'Training name',
        content: 'Training content',
      },
    };

    // Act
    const trainingTOCPage = mount(
      <TrainingTOCPage {...props} />,
    );

    // Trigger componentDidUpdate
    trainingTOCPage.update();

    // Assert
    expect(fetchTrainingTOC.calledOnce).to.be.true;
  });

  it('should call "fetchTrainingTOC" on update when trainingId and trainingTOC id are differents', () => {
    // Arrange
    const fetchTrainingTOC = sinon.spy();
    const props: TrainingTOCPageProps = {
      fetchTrainingTOC,
      trainingId: 123,
      trainingTOC: {
        id: 123,
        name: 'Training name',
        content: 'Training content',
      },
    };

    // Act
    const trainingTOCPage = mount(
      <TrainingTOCPage {...props} />,
    );

    // Change trainingId
    trainingTOCPage.setProps({ trainingId: 124 });

    // Assert (that fetchTraining is called on componentDidMount and componentDidUpdate)
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
    trainingTOCPage.setProps({ trainingId: NaN });

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
    expect(trainingTOCPage.contains(expectedTitle)).to.be.true;
    expect(trainingTOCPage.contains(expectedParagraph)).to.be.true;
  });

  it('should render trainingTOC name in a h2', () => {
    // Arrange
    const trainingTOCName = 'Training name';
    const props: TrainingTOCPageProps = {
      fetchTrainingTOC: () => { },
      trainingId: 123,
      trainingTOC: {
        id: 123,
        content: '',
        name: trainingTOCName,
      },
    };

    // Act
    const trainingTOCPage = shallow(
      <TrainingTOCPage {...props} />,
    );

    // Assert
    expect(trainingTOCPage.find('h2').someWhere((h2) => h2.text() === trainingTOCName)).to.be.true;
  });

  it('should have a link to redirect back to training list', () => {
    // Arrange
    const props: TrainingTOCPageProps = {
      fetchTrainingTOC: () => { },
      trainingId: 123,
      trainingTOC: new TrainingTOC(),
    };

    // Act
    const trainingTOCPage = shallow(
      <TrainingTOCPage {...props} />,
    );
    const links = trainingTOCPage.find(Link);

    // Assert
    expect(links).to.have.lengthOf(1);
    expect(links.someWhere((link) => link.prop('to') === studentRouteEnums.training.list)).to.be.true;
  });

});
