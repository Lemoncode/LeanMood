const methodBase = {
  mode: 'cors' as RequestMode,
  credentials: 'include' as RequestCredentials,
  headers: new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }),
};

export const formatURL = (url) => (`${process.env.BASE_API_URL}${url}`);

export const post: Partial<RequestInit> = {
  ...methodBase,
  method: 'POST',
};
