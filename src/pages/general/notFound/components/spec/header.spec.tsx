import {expect} from "chai";
import {shallow} from "enzyme";
import * as React from "react";
import {multilineTrim} from "../../../../../common/parse/multilineTrim";
import {NotFoundHeader} from "../header";

describe("general/notFound/components/header", () => {
  it("is defined", () => {
    // Arrange

    // Act
    const component = shallow(
      <NotFoundHeader />,
    );

    // Assert
    expect(component).not.to.be.undefined;
  });

  it("renders as expected", () => {
    // Arrange

    // Act
    const component = shallow(
      <NotFoundHeader />,
    );

    // Assert

    const expectedDomTree = `
      <div class="panel-heading dangerHeading">
        <h3 class="text-center">
          <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span> Oops:
          <small>Page not found - <b>404 error</b></small>
        </h3>
      </div>
    `;

    expect(component.html()).to.be.equal(multilineTrim(expectedDomTree));
  });
});
