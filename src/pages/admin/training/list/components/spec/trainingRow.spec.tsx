import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import { multilineTrim } from "../../../../../../common/parse/multilineTrim";
import { TrainingSummary } from "../../../../../../model/trainingSummary";
import { TrainingRowComponent } from "./../trainingRow";

describe("TrainingRowComponent", () => {

  it("should be defined", () => {
    // Arrange
    const training = new TrainingSummary();
    training.id = 1;
    training.name = "john";
    training.isActive = true;

    // Act
    const trainingRowComponent = shallow(
            <TrainingRowComponent training={training}/>,
    );
    // Assert
    expect(trainingRowComponent).not.to.be.undefined;
  });

  it("should render the student name", () => {
    // Arrange
    const trainingSummary = new TrainingSummary();
    trainingSummary.id = 1;
    trainingSummary.name = "john";
    trainingSummary.isActive = true;

    // Act
    const trainingRowComponent = shallow(
      <TrainingRowComponent training={trainingSummary}/>,
    );

    // Assert
    const expectedDomTree = `
      <tr>
        <td>
          <span>
            1
          </span>
        </td>
        <td>
          <span>
            john
          </span>
        </td>
      </tr>
      `;

    expect(trainingRowComponent.html()).to.be.equal(multilineTrim(expectedDomTree));
  });

});
