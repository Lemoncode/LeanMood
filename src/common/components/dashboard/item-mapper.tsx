/**
 * Util to map dashboard items to its icon representation
 */
export enum DashboardIcons {
  "EDIT",
  "EVALUATE",
  "BROWSE",
};

export function mapOptionToIcon (icon: DashboardIcons) {
  return dashboardMapOptionToIcon[icon];
};

const dashboardMapOptionToIcon: { [id: number]: string; } = {
  [DashboardIcons.EDIT]: "fa fa-pencil-square-o fa-5x",
  [DashboardIcons.EVALUATE]: "fa fa-star-half-o fa-5x",
  [DashboardIcons.BROWSE]: "fa fa-eye fa-5x",
};
