import * as React from 'react';
import {shallow} from 'enzyme';
import {multilineTrim} from '../../../../../../../common/parse/multilineTrim';
import {iconEnums} from '../icons';
import {ToolbarComponent} from '../toolbar';

describe('ToolbarComponent', () => {
  it('is defined', () => {
    // Arrange
    const selectToolbarCommand = sinon.spy();
    // Act
    const component = shallow(
      <ToolbarComponent
        selectToolbarCommand={selectToolbarCommand}
      />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('renders as expected', () => {
    // Arrange
    const selectToolbarCommand = sinon.spy();

    const expectedHeaderButton = `
      <button type="button" class="btn btn-default">
        <span class="${iconEnums.header}">
        </span>
      </button>
    `;

    const expectedBoldButton = `
      <button type="button" class="btn btn-default">
        <span class="${iconEnums.bold}">
        </span>
      </button>
    `;

    const expectedItalicButton = `
      <button type="button" class="btn btn-default">
        <span class="${iconEnums.italic}">
        </span>
      </button>
    `;

    const expectedCodeButton = `
      <button type="button" class="btn btn-default">
        <span class="${iconEnums.code}">
        </span>
      </button>
    `;

    const expectedLinkButton = `
      <button type="button" class="btn btn-default">
        <span class="${iconEnums.link}">
        </span>
      </button>
    `;

    const expectedImageButton = `
      <button type="button" class="btn btn-default">
        <span class="${iconEnums.image}">
        </span>
      </button>
    `;

    const expectedBulletedListButton = `
      <button type="button" class="btn btn-default">
        <span class="${iconEnums.bulletedList}">
        </span>
      </button>
    `;

    const expectedNumberedListButton = `
      <button type="button" class="btn btn-default">
      <span class="${iconEnums.numberedList}">
      </span>
      </button>
    `;

    const expectedQuoteButton = `
      <button type="button" class="btn btn-default">
        <span class="${iconEnums.quote}">
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
        selectToolbarCommand={selectToolbarCommand}
      />,
    );

    // Assert
    expect(component.html()).to.equal(multilineTrim(expectedComponent));
  });
});
