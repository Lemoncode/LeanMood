import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { DroppableFileComponent } from '../droppableFile';
import { multilineTrim } from '../../../../parse/multilineTrim';

describe('DroppableFileComponent', () => {
  it('should render a div wrapping a input file', () => {
    // Arrange
    const expectedDOM = multilineTrim(`
      <div class="droppable">
        <span class="text-center glyphicon glyphicon-download-alt icon"></span>
        <span class="text-center text">
          Choose a file or drag it here
        </span>
        <input type="file" class="hidden"/>
      </div>
    `);

    // Act
    const droppable = shallow(
      <DroppableFileComponent />,
    );

    // Assert
    expect(droppable.html()).to.be.equals(expectedDOM);
  });

  it('should set the added file to state', () => {
    // Arrange
    const uploadedFile = new File([''], 'file.txt');
    const event = { currentTarget: { files: [uploadedFile] } };

    // Act
    const droppable = shallow(
      <DroppableFileComponent />,
    );
    const inputFile = droppable.find('input[type="file"]');
    inputFile.simulate('change', event);

    // Assert
    expect(droppable.state()).to.have.property('uploadedFile').that.is.deep.equals(uploadedFile);
  });

  it('should show the file name from the added file if uploaded', () => {
    // Arrange
    const fileName = 'file.txt';
    const uploadedFile = new File([''], fileName);

    // Act
    const droppable = shallow(
      <DroppableFileComponent />,
    );
    droppable.setState({ uploadedFile });

    // Assert
    expect(droppable.find('span').someWhere((span) => span.text() === fileName)).to.be.true;
  });

  it('should trigger the file click when wrapper div is clicked', () => {
    // Arrange
    const clickInput = sinon.spy(HTMLInputElement.prototype, 'click');

    // Act
    const droppable = mount(
      <DroppableFileComponent />,
    );
    droppable.simulate('click');

    // Assert
    expect(clickInput.calledOnce).to.be.true;
  });

  it('should add file to state when dropped in the div', () => {
    // Arrange
    const uploadedFile = new File([''], 'file.txt');
    const event = {
      dataTransfer: { files: [uploadedFile] },
      preventDefault: () => { },
    };

    // Act
    const droppable = shallow(
      <DroppableFileComponent />,
    );
    droppable.simulate('drop', event);

    // Assert
    expect(droppable.state()).to.have.property('uploadedFile').that.is.deep.equals(uploadedFile);
  });

  it('should fire onChange function passed in props when a file is added', () => {
    // Arrange
    const onFileChange = sinon.spy();
    const uploadedFile = new File([''], 'file.txt');
    const event = {
      dataTransfer: { files: [uploadedFile] },
      preventDefault: () => { },
    };

    // Act
    const droppable = shallow(
      <DroppableFileComponent onFileChange={onFileChange} />,
    );
    droppable.simulate('drop', event);

    // Assert
    expect(onFileChange.calledWithExactly(uploadedFile)).to.be.true;
  });
});
