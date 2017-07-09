interface Config {
  useRealAPI: boolean;
};

console.log('**************************');
console.log(process.env.REST_SRC);
console.log('**************************');

// Default values
export const config: Config = {
  useRealAPI: false,
};

if (process.env.REST_SRC === 'real') {
  config.useRealAPI = true;
};
