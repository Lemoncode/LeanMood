import {expect} from 'chai';
import {shallow} from 'enzyme';
import * as React from 'react';
import {NotFoundPage} from '../page';
import {multilineTrim} from '../../../../common/parse/multilineTrim';

describe('general/notFound/page', () => {
  it('is defined', () => {
    //Arrange

    //Act
    const page = shallow(
      <NotFoundPage />
    );

    //Assert
    expect(page).not.to.be.undefined;
  });

  it('renders as expected', () => {
    //Arrange

    //Act
    const page = shallow(
      <NotFoundPage />
    );

    //Assert
    const expectedNotFoundHeader = `
      <div class="panel-heading">
        <h3 class="text-center">
          <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> Oops:
          <small>Page not found - <b>404 error</b></small>
        </h3>
      </div>
    `;
    const expectedNotFoundBody = `
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

    const expectedDomTree = `
    <div class="row pageError404">
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-danger">
          ${expectedNotFoundHeader}
          ${expectedNotFoundBody}
        </div>
      </div>
    </div>
      `;

    expect(page.html()).to.be.equal(multilineTrim(expectedDomTree));
  });
});
