const defaultRoute = '/admin';
const studentRoute = `${defaultRoute}/student`;
const trainingRoute = `${defaultRoute}/training`;
const studentByIdRoute = `${studentRoute}/:id`;

export const adminRouteEnums = {
  default: defaultRoute,
  student: {
    base: studentRoute,
    list: `${studentRoute}/list`,
    edit: `${studentByIdRoute}/edit`,
  },
  training: {
    list: `${trainingRoute}/list`,
    edit: `${trainingRoute}/edit`,
  },
};
