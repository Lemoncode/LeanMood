import * as React from 'react';
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
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
        fetchTrainingContent={dummyFetchTrainingContent}
      />,
    );
    // Arrange
    expect(page).not.to.be.undefined;
  });

  it('renders a EditorContainerComponent', () => {
    // Arrang
    const fetchTrainingContentSpy = sinon.spy();

    // Act
    const page = shallow(
      <EditTrainingPage
        trainingId={0}
        fetchTrainingContent={fetchTrainingContentSpy}
      />,
    );

    // Assert
    expect(page.find(EditorContainerComponent)).to.have.lengthOf(1);
  });

  it('calls to fetchTrainingContent with expected trainingId', () => {
    // Arrange
    const trainingId = 1;
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
          trainingId={trainingId}
          fetchTrainingContent={fetchTrainingContentSpy}
        />
      </Provider>,
    );

    // Assert
    expect(fetchTrainingContentSpy.calledOnce).to.be.true;
    expect(fetchTrainingContentSpy.calledWith(trainingId)).to.be.true;
  });
});
