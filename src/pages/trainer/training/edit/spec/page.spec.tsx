import * as React from 'react';
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {EditTrainingSummary} from '../../../../../model/editTrainingSummary';
import {EditorContainerComponent} from '../components/editorContainer';
import {EditTrainingPage} from '../page';

const createStore = configureStore();

describe('trainer/training/edit/page', () => {
  it('is defined', () => {
    // Arrange
    const training = null;
    const dummyFetchTrainingContent = () => {};
    // Act
    const page = shallow(
      <EditTrainingPage
        trainingId={0}
        training={training}
        fetchTrainingContent={dummyFetchTrainingContent}
      />,
    );
    // Arrange
    expect(page).not.to.be.undefined;
  });

  it('renders a div', () => {
    // Arrange
    const training = new EditTrainingSummary();
    const fetchTrainingContentSpy = sinon.spy();

    // Act
    const page = shallow(
      <EditTrainingPage
        trainingId={0}
        training={training}
        fetchTrainingContent={fetchTrainingContentSpy}
      />,
    );

    // Assert
    expect(page.type()).to.equal('div');
    expect(page.childAt(0).type()).to.equal(EditorContainerComponent);
    expect(page.childAt(1).type()).to.be.null;
  });

  it('calls to fetchTrainingContent', () => {
    // Arrange
    const training = new EditTrainingSummary();
    const fetchTrainingContentSpy = sinon.spy();

    const mockStore: any = createStore({
      trainer: {
        training: {
          content: '',
        },
      },
    });

    // Act
    const page = mount(
      <Provider store={mockStore}>
        <EditTrainingPage
          trainingId={0}
          training={training}
          fetchTrainingContent={fetchTrainingContentSpy}
        />
      </Provider>,
    );

    // Assert
    expect(fetchTrainingContentSpy.calledOnce).to.be.true;
  });
});
