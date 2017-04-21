const defaultPath = '/student';
const trainingPath = `${defaultPath}/training`;
const trainingResourcePath = `${trainingPath}/:trainingId`;

export const studentRouteEnums = {
  default: defaultPath,
  training: {
    base: trainingPath,
    list: `${trainingPath}/list`,
    id: {
      base: trainingResourcePath,
      toc: `${trainingResourcePath}/toc`,
    },
  },
};
