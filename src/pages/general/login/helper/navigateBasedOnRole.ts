import { hashHistory } from 'react-router';

class NavigateToHomeBasedOnROLE {
  navigateToHomeBasedOnRole = (pathRole: string) => {
    hashHistory.push(`${pathRole}`);
  }
}

export const NavigateToHomeBasedOnRole = new NavigateToHomeBasedOnROLE();
