import { hashHistory } from 'react-router';

class NavigationHelper {
  navigateToHomeBasedOnRole = (pathRole: string) => {
    hashHistory.push(`${pathRole}`);
  }
}

export const navigationHelper = new NavigationHelper();
