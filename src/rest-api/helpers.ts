const methodBase = {
  mode: 'cors' as RequestMode,
  credentials: 'include' as RequestCredentials,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
};

export const formatURL = (url) => (`${process.env.API_URL}${url}`);

export const post: Partial<RequestInit> = {
  ...methodBase,
  method: 'POST',
};

export const get: Partial<RequestInit> = {
  ...methodBase,
  method: 'GET',
};
