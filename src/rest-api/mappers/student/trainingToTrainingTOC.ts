import { Training } from '../../model/student';
import { TrainingTOC } from '../../../model/student/trainingToc';

export const mapTrainingToTrainingTOC = (training: Training): TrainingTOC => (
  Boolean(training) ?
    {
      id: training._id,
      name: training.name,
      content: training.markdownContent,
    } :
    null
);
