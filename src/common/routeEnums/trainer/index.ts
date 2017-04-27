const defaultRoute = '/trainer';
const trainingRoute = `${defaultRoute}/training`;

export const trainerRouteEnums = {
  default: defaultRoute,
  dashboard: `${defaultRoute}/dashboard`,
  evaluation: `${defaultRoute}/evaluation`,
  training: {
    edit: `${trainingRoute}/edit`,
    list: `${trainingRoute}/list`,
  },
};
