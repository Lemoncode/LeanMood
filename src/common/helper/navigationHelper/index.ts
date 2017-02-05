import { hashHistory } from 'react-router';

class NavigationHelper {
  public navigateToPath = (path: string) => {
    hashHistory.push(`${path}`);
  }
}

export const navigationHelper = new NavigationHelper();
