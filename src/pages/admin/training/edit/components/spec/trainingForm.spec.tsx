import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import { Training } from "../../../../../../model/training";
import { TrainingForm } from "../trainingForm";

describe("pages/admin/training/edit/component/trainingForm", () => {

    let editTraining: Training;
    beforeEach(() => {
        editTraining = new Training();
        editTraining.id = 32;
        editTraining.name = "React/redux";
        editTraining.isActive = true;
        editTraining.start = new Date(2016, 12, 1);
        editTraining.end = new Date(2016, 12, 31);
    });

    it("should be defined", () => {
        // Arrange
        // Act
        const editTrainingPage = shallow(
            <TrainingForm training={editTraining}/>
        )
        // Assert
        expect(TrainingForm).not.to.be.undefined;
    });

    it("should display a form with basic training data", () => {
        // Arrange
        // Act
        const trainingForm = shallow(<TrainingForm training={editTraining}/>);
        const expectedDomTree = buildExpectedDomTreeByTraining(editTraining);
        const expectedPlainDomTree = expectedDomTree.split(/(?:\r\n|\r|\n)/g).map((line) => line.trim()).join("");

        // Assert
        expect(trainingForm.html()).to.be.equal(expectedPlainDomTree);
    });

    function buildExpectedDomTreeByTraining(training: Training): string {
        let expectedDomTree: string;

        if (training.isActive) {
            expectedDomTree = `
                <form>
                    <h2>Training form</h2>
                    <br/>
                    <span>Name: ${training.name}</span>
                    <br/>
                    <input type="checkbox" checked=""/> Active
                    <br/>
                    <span>Start: ${training.start.toDateString()} - End: ${training.end.toDateString()}</span>
                </form>`;
        } else {
            expectedDomTree = `
                <form>
                    <h2>Training form</h2>
                    <br/>
                    <span>Name: ${training.name}</span>
                    <br/>
                    <input type="checkbox" /> Active
                    <br/>
                    <span>Start: ${training.start.toDateString()} - End: ${training.end.toDateString()}</span>
                </form>`;
        }

        return expectedDomTree;
    }

});