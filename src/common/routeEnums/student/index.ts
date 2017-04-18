const basePath = '/student';
const trainingRoute = `${basePath}/training`;

export const studentRouteEnums = {
  trainingList: `${trainingRoute}/list`,
  trainingTOC: `${trainingRoute}/:trainingId/toc`,
};
