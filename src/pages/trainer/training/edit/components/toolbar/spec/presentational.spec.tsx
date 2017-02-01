import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../common/parse/multilineTrim';
import {ToolbarComponent} from '../presentational';

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

    const expectedBoldButton = `
      <button type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-bold">
        </span>
      </button>
    `;

    const expectedItalicButton = `
      <button type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-italic">
        </span>
      </button>
    `;

    const expectedCodeButton = `
      <button type="button" class="btn btn-default">
        <div>
          <span class="glyphicon glyphicon-menu-left">
          </span>
          <span class="glyphicon glyphicon-menu-right">
          </span>
        </div>
      </button>
    `;

    const expectedLinkButton = `
      <button type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-link">
        </span>
      </button>
    `;

    const expectedImageButton = `
      <button type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-picture">
        </span>
      </button>
    `;

    const expectedBulletedListButton = `
      <button type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-th-list">
        </span>
      </button>
    `;

    const expectedNumberedListButton = `
      <button type="button" class="btn btn-default">
        <div>
          <span class="glyphicon glyphicon-sort-by-order">
          </span>
          <span class="glyphicon glyphicon-menu-hamburger">
          </span>
        </div>
      </button>
    `;

    const expectedQuoteButton = `
      <button type="button" class="btn btn-default">
        <span class="glyphicon glyphicon-menu-right">
        </span>
      </button>
    `;

    const expectedComponent = `
      <div class="btn-toolbar">
        <div class="btn-group">
          ${expectedHeaderButton}
          ${expectedBoldButton}
          ${expectedItalicButton}
        </div>
        <div class="btn-group">
          ${expectedCodeButton}
          ${expectedLinkButton}
          ${expectedImageButton}
        </div>
        <div class="btn-group">
          ${expectedBulletedListButton}
          ${expectedNumberedListButton}
          ${expectedQuoteButton}
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
