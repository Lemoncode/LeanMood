import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { MarkDownViewerComponent, MarkDownViewerComponentProps } from '../markdownViewerComponent';

describe('MarkdownViewer Component', () => {
  it('should render the content as React components', () => {
    // Arrange
    const props: MarkDownViewerComponentProps = {
      content: [
        '# Main title',
        'Description text with **bold text**',
      ].join('\n'),
    };

    const expectedTitle = <h1 id="main-title">Main title</h1>;
    const expectedParagraph = <p>Description text with <strong>bold text</strong></p>;

    // Act
    const trainingTOCPage = mount(
      <MarkDownViewerComponent {...props} />,
    );

    // Assert
    expect(trainingTOCPage.contains(expectedTitle)).to.be.true;
    expect(trainingTOCPage.contains(expectedParagraph)).to.be.true;
  });

  it('should render nothing when the content is empty', () => {
    // Arrange
    const props: MarkDownViewerComponentProps = {
      content: '',
    };

    // Act
    const trainingTOCPage = shallow(
      <MarkDownViewerComponent {...props} />,
    );

    // Assert
    expect(trainingTOCPage.html()).to.be.equal('<div></div>');
  });

  it('should render nothing when the content is empty', () => {
    // Arrange
    const props: MarkDownViewerComponentProps = {
      content: null,
    };

    // Act
    const trainingTOCPage = shallow(
      <MarkDownViewerComponent {...props} />,
    );

    // Assert
    expect(trainingTOCPage.html()).to.be.equal('<div></div>');
  });
});
