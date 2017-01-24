import {shallow} from 'enzyme';
import * as React from 'react';
import {multilineTrim} from '../../../../../common/parse/multilineTrim';
import {NotFoundBody} from '../body';

describe('general/notFound/components/body', () => {
  it('is defined', () => {
    // Arrange

    // Act
    const component = shallow(
      <NotFoundBody />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it('renders as expected', () => {
    // Arrange

    // Act
    const component = shallow(
      <NotFoundBody />,
    );

    // Assert

    /* tslint:disable */
    const expectedDomTree = `
      <div class="panel-body">
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please try the following:</p>
        <ul class="list-group">
          <li class="list-group-item">Make sure that the Web site address displayed in the address bar of your browser is spelled and formatted correctly.</li>
          <li class="list-group-item">If you reached this page by clicking a link,
            <a href="mailTo://info@lemoncode.net"><b>contact us</b></a> to alert us that the link is incorrectly formatted.</li>
          <li class="list-group-item">Forget that this ever happened, and go <a>our <b>Home</b> page</a> :)</li>
        </ul>
      </div>
    `;
    /* tslint:enable */

    expect(component.html()).to.be.equal(multilineTrim(expectedDomTree));
  });
});
