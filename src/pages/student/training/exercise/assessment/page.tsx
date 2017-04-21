import * as React from 'react';
import { ProgressBarComponent } from '../../../../../common/components/progressBar/progressBarComponent';
const styles: any = require('./styles.scss');

export const ExerciseAssessmentPage: React.StatelessComponent<never> = () => {
  return (
    <div>
      <h1>Asessment - Layout exercise</h1>
      <h3 className={`text-center ${styles.assessmentPercentage}`}>90%</h3>
      <ProgressBarComponent min={0} max={100} current={90} />
      <div className={styles.commentsSummary}>
        <h4>Trainer comments</h4>
        <div className={styles.comment}>
          <h6>Braulio Díez - April 8 2017 at 13:42</h6>
          <p>
            <em>
              Really good work! Keep it the good work!
            </em>
          </p>
        </div>
        <div className={styles.comment}>
          <h6>Jaime Salas - April 8 2017 at 17:02</h6>
          <p>
            <em>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem assumenda doloribus, minus magni sequi sint vel possimus perspiciatis dolorem, quis perferendis, odit culpa laboriosam voluptates nemo quaerat quo sed aspernatur.
            </em>
          </p>
        </div>
        <div className={styles.comment}>
          <h6>Jaime Salas - April 9 2017 at 09:12</h6>
          <p>
            <em>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed doloremque adipisci blanditiis fuga aperiam illum voluptates eligendi quam nostrum libero culpa, officia cumque recusandae dolorum porro, rerum animi ullam. Quas!
            </em>
          </p>
        </div>
      </div>
    </div>
  );
};
