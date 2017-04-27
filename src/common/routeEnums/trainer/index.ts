const defaultPath = '/trainer';
const trainingPath = `${defaultPath}/training`;
const trainingResourcePath = `${trainingPath}/:trainingId`;

export const trainerRouteEnums = {
  default: defaultPath,
  training: {
    base: trainingPath,
    list: `${trainingPath}/list`,
    byId: {
      base: trainingResourcePath,
      dashboard: `${trainingResourcePath}/dashboard`,
      evaluation: `${trainingResourcePath}/evaluation`,
      edit: `${trainingResourcePath}/edit`,
    },
  },
};
