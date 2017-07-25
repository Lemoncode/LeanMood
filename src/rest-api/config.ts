const env: any = require('../../env.config');

export const config = {
  useRealAPI: (env.LM_REST_ENV === 'real'),
};
