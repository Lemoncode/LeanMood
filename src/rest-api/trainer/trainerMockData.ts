import {EditTrainingSummary} from '../../model/trainer/editTrainingSummary';

export const trainingContentMockData: EditTrainingSummary[] = [
  {
    id: 1,
    content: `
## Login

![login](https://raw.githubusercontent.com/wiki/MasterLemon2016/LeanMood/blob/leLogin.png)

## Lecturers trainings

![trainings](https://github.com/MasterLemon2016/LeanMood/wiki/blob/leLecturerTrainings.png)

## Training Dashboard

![dashboard](https://github.com/MasterLemon2016/LeanMood/wiki/blob/leTrainingDashboard.png)

## Main Toc Raw

![Main toc raw](https://github.com/MasterLemon2016/LeanMood/wiki/blob/leMainTocRaw.png)

## Main Toc Preview

![Main toc preview](https://github.com/MasterLemon2016/LeanMood/wiki/blob/leMainToc%20Preview.png)

## Upload File

This ui mock needs an update:

- It should follow the panel approach (no modal dialog).
- It should display a list of files already uploaded where the user can pick or let the user upload a new file.

![upload](https://github.com/MasterLemon2016/LeanMood/wiki/blob/leUpload%20file.png)

## Add delivery

This ui mock needs an update:

- It should display a list of delveries already defined, and let the user create a new one if needed.

![Add Delivery](https://github.com/MasterLemon2016/LeanMood/wiki/blob/leAddDelivery.png)

## Evaluate delivery

![Evaluate Delivery](https://github.com/MasterLemon2016/LeanMood/wiki/blob/leEvaluate.png)
    `,
  },
  {
    id: 2,
    content: 'This is a test markdown sample using a **bold text**',
  },
];
