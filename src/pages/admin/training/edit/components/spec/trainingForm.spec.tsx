import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import { Training } from '../../../../../../model/training';
import { TrainingForm } from '../trainingForm';
import { multilineTrim } from '../../../../../../common/parse/multilineTrim';

describe('pages/admin/training/edit/component/trainingForm', () => {

    let editTraining: Training;
    beforeEach(() => {
        editTraining = new Training();
        editTraining.id = 32;
        editTraining.name = 'React/redux';
        editTraining.isActive = true;
        editTraining.start = new Date(2016, 11, 1);
        editTraining.end = new Date(2016, 11, 31);
    });

    it('should be defined', () => {
        // Arrange
        // Act
        const editTrainingPage = shallow(
            <TrainingForm training={editTraining}/>,
        );
        // Assert
        expect(TrainingForm).not.to.be.undefined;
    });

    it('should display a form with basic training data', () => {
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
                <div class="col-md-8 col-md-offset-2">
                  <h2>Training form</h2>
                  <div class="panel nav-tabs">
                    <div class="panel-heading">
                      <ul class="nav nav-tabs">
                        <li class="active"><a href="#tabmain" data-toggle="tab">Main</a></li>
                      </ul>
                    </div>
                    <div class="panel-body">
                      <div class="tab-content">
                        <div class="tab-pane fade in active" id="tabmain">
                          <form class="form-horizontal">
                            <div class="form-group">
                              <label class="control-label col-md-1 col-xs-12">name</label>
                              <div class="col-md-11 col-xs-12">
                                <input type="text" class="form-control" id="name" value="${training.name}"/>
                              </div>
                            </div>
                            <input type="checkbox" checked=""/>
                            <span>Start: ${training.start.toLocaleDateString()} - End: ${
                                training.end.toLocaleDateString()}</span>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
        } else {
            expectedDomTree = `
                <div class="col-md-8 col-md-offset-2">
                  <h2>Training form</h2>
                  <div class="panel nav-tabs">
                    <div class="panel-heading">
                      <ul class="nav nav-tabs">
                        <li class="active"><a href="#tabmain" data-toggle="tab">Main</a></li>
                      </ul>
                    </div>
                    <div class="panel-body">
                      <div class="tab-content">
                        <div class="tab-pane fade in active" id="tabmain">
                          <form class="form-horizontal">
                          <div class="form-group">
                              <label class="control-label col-md-1 col-xs-12">name</label>
                              <div class="col-md-11 col-xs-12">
                                <input type="text" class="form-control" id="name" value="${training.name}"/>
                              </div>
                            </div>
                            
                            <input type="checkbox" />
                            <span>Start: ${training.start.toLocaleDateString()} - End: ${
                              training.end.toLocaleDateString()}</span>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>`;
        }

        return expectedDomTree;
    }

});
