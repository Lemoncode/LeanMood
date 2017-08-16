import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { Link } from 'react-router';
import { studentRouteEnums } from '../../../../../common/routeEnums/student/';
import { TrainingTOCPage, TrainingTOCPageProps } from '../page';
import { TrainingTOC } from '../../../../../model/student/trainingToc';
import { MarkDownViewerComponent } from '../../../../../common/components/markdownViewer/';

describe('TrainingTOCPage', () => {
  it('should return a div', () => {
    // Arrange
    const props: TrainingTOCPageProps = {
      fetchTrainingTOC: () => { },
      trainingId: '0',
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
    const trainingId = '123';
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
      trainingId: '123',
      trainingTOC: {
        id: '123',
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
      trainingId: '123',
      trainingTOC: {
        id: '123',
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
      trainingId: '',
      trainingTOC: new TrainingTOC(),
    };

    // Act
    const trainingTOCPage = mount(
      <TrainingTOCPage {...props} />,
    );
    trainingTOCPage.setProps({ trainingId: '' });

    // Assert
    expect(fetchTrainingTOC.called).to.be.false;
  });

  it('should render a MarkDownViewerComponent passing the trainingTOC content', () => {
    // Arrange
    const content = [
      '# Main title',
      'Description text with **bold text**',
    ].join('\n');
    const props: TrainingTOCPageProps = {
      fetchTrainingTOC: () => { },
      trainingId: '123',
      trainingTOC: {
        id: '123',
        content,
        name: 'Training name',
      },
    };

    // Act
    const trainingTOCPage = shallow(
      <TrainingTOCPage {...props} />,
    );
    const markdownComponent = trainingTOCPage.find(MarkDownViewerComponent);

    // Assert
    expect(markdownComponent).to.have.lengthOf(1);
    expect(markdownComponent.prop('content')).to.be.equals(content);
  });

  it('should render trainingTOC name in a h2', () => {
    // Arrange
    const trainingTOCName = 'Training name';
    const props: TrainingTOCPageProps = {
      fetchTrainingTOC: () => { },
      trainingId: '123',
      trainingTOC: {
        id: '123',
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

});
