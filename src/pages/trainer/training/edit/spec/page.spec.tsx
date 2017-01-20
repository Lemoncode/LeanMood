import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import * as React from 'react';
import {EditTrainingSummary} from '../../../../../model/editTrainingSummary';
import {EditTrainingPage} from '../page';

describe('trainer/training/edit/page', () => {
  it('is defined', () => {
    // Arrange
    const training = null;
    const dummyFetchTrainingContent = () => {};
    // Act
    const page = shallow(
      <EditTrainingPage
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

    const expectedPage = '<div></div>';
    // Act
    const page = mount(
      <EditTrainingPage
        training={training}
        fetchTrainingContent={fetchTrainingContentSpy}
      />,
    );

    // Assert
    expect(page.html()).to.equal(expectedPage);
  });

  it('calls to fetchTrainingContent', () => {
    // Arrange
    const training = new EditTrainingSummary();
    const fetchTrainingContentSpy = sinon.spy();

    // Act
    const page = mount(
      <EditTrainingPage
        training={training}
        fetchTrainingContent={fetchTrainingContentSpy}
      />,
    );

    // Assert
    expect(fetchTrainingContentSpy.calledOnce).to.be.true;
  });
});
