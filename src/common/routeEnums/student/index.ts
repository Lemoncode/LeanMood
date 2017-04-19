const defaultPath = '/student';
const trainingRoute = `${defaultPath}/training`;

export const studentRouteEnums = {
  defaultPath,
  trainingRoute,
  trainingList: `${trainingRoute}/list`,
  trainingTOC: `${trainingRoute}/:trainingId/toc`,
};
