import { TrainingTOC } from '../../model/student/trainingToc';
import { StudentSummary } from '../../model/studentSummary';

export type GetTOCByTraining = (id: number) => Promise<TrainingTOC>;
export type GetStudentSummaryList = () => Promise<StudentSummary[]>;
