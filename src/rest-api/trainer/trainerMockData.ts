export interface TrainingContent {
  trainingId: number;
  content: string;
}

export const trainingContentMockData: Array<TrainingContent> = [
  {
    trainingId: 1,
    content: "This is a test markdown sample using # H1"
  },
  {
    trainingId: 2,
    content: "This is a test markdown sample using a **bold text**"
  },
]
