import { history } from '../../../history';

class NavigationHelper {
  public navigateToPath = (path: string) => {
    history.push(`${path}`);
  }
}

export const navigationHelper = new NavigationHelper();
