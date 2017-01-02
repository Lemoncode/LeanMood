import { expect } from "chai";
import {} from "core-js";
import {} from "mocha";
import {StudentSummary} from "../studentSummary";
import {TrainerSummary} from "../trainerSummary";
import {Training} from "../training";

describe("Training", () => {
  let training: Training = null;

  beforeEach(() => {
    training = new Training();
  });

  it("Is instantiated and exists", () => {
    // Assert
    expect(training).not.to.be.undefined;
    expect(training).not.to.be.null;
  });

  describe("#constructor", () => {
    it("Is initialized with the expected values on properties", () => {
      expect(training.id).to.be.equal(-1);
      expect(training.name).to.be.equal("");
      expect(training.isActive).to.be.false;
      // TODO: Temporary workaround issues with deepfreeze an dates
      expect(training.start).to.be.null;
      expect(training.end).to.be.null;
      // expect(training.start.getDay()).to.be.equal(new Date().getDay());
      // expect(training.start.getMonth()).to.be.equal(new Date().getMonth());
      // expect(training.start.getFullYear()).to.be.equal(new Date().getFullYear());
      // expect(training.end.getDay()).to.be.equal(new Date().getDay());
      // expect(training.end.getMonth()).to.be.equal(new Date().getMonth());
      // expect(training.end.getFullYear()).to.be.equal(new Date().getFullYear());
      expect(training.trainers).to.have.lengthOf(0);
      expect(training.students).to.have.lengthOf(0);
  });
});

});
