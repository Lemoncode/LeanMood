import * as React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {IAppState} from '../../../../../../reducers';
import * as trainingContentChanged from '../../actions/trainingContentChanged';
import * as initializeEditor from '../../actions/initializeEditor';
import * as updateTrainingContent from '../../actions/updateTrainingContent';
import {EditorComponent} from '../editor';
import {EditorContainerComponent} from '../editorContainer';

const createStore = configureStore();

describe('EditorContainerComponent', () => {
  it('should be defined', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const mockStore: any = createStore({
      trainer: {
        training: {
          content: '',
        },
      },
    });

    const trainingContentChangedStartStub = sinon.stub(trainingContentChanged,
      'trainingContentChangedStartAction', () => {
        return { type: 'dummy' };
      });

    const initializeEditorStub = sinon.stub(initializeEditor,
      'initializeEditorAction', () => {
        return { type: 'dummy' };
      });

    const updateTrainingContentStub = sinon.stub(updateTrainingContent,
      'updateTrainingContentStartAction', () => {
        return { type: 'dummy' };
      });

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <EditorContainerComponent />
      </Provider>,
    );

    // Assert
    expect(container).not.to.be.undefined;
  }).bind(this));
});
