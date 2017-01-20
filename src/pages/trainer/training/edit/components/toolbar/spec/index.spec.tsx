import {expect} from 'chai';
import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../common/parse/multilineTrim';
import {ToolbarComponent} from '../index';

describe('ToolbarComponent', () => {
  it('is defined', () => {
    // Arrange
    const textArea: HTMLTextAreaElement = null;
    const updateTextArea = sinon.spy();
    // Act
    const component = shallow(
      <ToolbarComponent
        textArea={textArea}
        updateTextArea={updateTextArea}
      />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('renders as expected', () => {
    // Arrange
    const textArea: HTMLTextAreaElement = null;
    const updateTextArea = sinon.spy();

    const expectedHeaderButton = `
      <button type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-header">
        </span>
      </button>
    `;

    const expectedComponent = `
      <div class="btn-toolbar">
        <div class="btn-group">
          ${expectedHeaderButton}
        </div>
      </div>
    `;

    // Act
    const component = shallow(
      <ToolbarComponent
        textArea={textArea}
        updateTextArea={updateTextArea}
      />,
    );

    // Assert
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });
});
