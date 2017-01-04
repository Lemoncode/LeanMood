import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import { Training } from "../../../../../../model/training";
import { TrainingForm } from "../trainingForm";
import { multilineTrim } from '../../../../../../common/parse/multilineTrim';

describe("pages/admin/training/edit/component/trainingForm", () => {

    let editTraining: Training;
    beforeEach(() => {
        editTraining = new Training();
        editTraining.id = 32;
        editTraining.name = "React/redux";
        editTraining.isActive = true;
        editTraining.start = new Date(2016, 11, 1);
        editTraining.end = new Date(2016, 11, 31);
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

        // Assert
        expect(trainingForm.html()).to.be.equal(multilineTrim(expectedDomTree));
    });

    function buildExpectedDomTreeByTraining(training: Training): string {
        let expectedDomTree: string;

        if (training.isActive) {
            expectedDomTree = `
                <form>
                    <h2>Training form</h2>
                    <span>Name: ${training.name}</span>
                    <input type="checkbox" checked=""/>
                    <span>Start: ${training.start.toLocaleDateString()} - End: ${training.end.toLocaleDateString()}</span>
                </form>`;
        } else {
            expectedDomTree = `
                <form>
                    <h2>Training form</h2>
                    <span>Name: ${training.name}</span>
                    <input type="checkbox" />
                    <span>Start: ${training.start.toLocaleDateString()} - End: ${training.end.toLocaleDateString()}</span>
                </form>`;
        }

        return expectedDomTree;
    }

});
