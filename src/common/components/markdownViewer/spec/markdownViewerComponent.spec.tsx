import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { MarkDownViewerComponent, MarkDownViewerComponentProps } from '../markdownViewerComponent';

describe('MarkdownViewer Component', () => {
  it('should render the content as HTML components', () => {
    // Arrange
    const props: MarkDownViewerComponentProps = {
      content: [
        '# Main title',
        'Description text with **bold text**',
      ].join('\n'),
    };

    // Act
    const trainingTOCPage = mount(
      <MarkDownViewerComponent {...props} />,
    );

    // Assert
    expect(trainingTOCPage.html()).to.match(/<h1.*>Main title<\/h1>/);
    expect(trainingTOCPage.html()).to.match(/<p.*>Description text with <strong>bold text<\/strong><\/p>/);
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
    expect(trainingTOCPage.html()).to.match(/<div.*><\/div>/);
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
    expect(trainingTOCPage.html()).to.match(/<div.*><\/div>/);
  });
});
