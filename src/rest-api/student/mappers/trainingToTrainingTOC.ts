import { Training } from '../../../model/student/training';
import { TrainingTOC } from '../../../model/student/trainingToc';

export const mapTrainingToTrainingTOC = (training: Training): TrainingTOC => (
  Boolean(training) ?
    {
      id: training.id,
      name: training.name,
      content: training.markdownContent,
    } as TrainingTOC :
    null
);
