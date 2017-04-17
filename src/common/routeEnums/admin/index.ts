const defaultRoute = '/admin';
const studentRoute = `${defaultRoute}/student`;
const trainingRoute = `${defaultRoute}/training`;

export const adminRouteEnums = {
  default: defaultRoute,
  student: {
    list: `${studentRoute}/list`,
    edit: `${studentRoute}/edit`,
  },
  training: {
    list: `${trainingRoute}/list`,
    edit: `${trainingRoute}/edit`,
  },
};
