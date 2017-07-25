export const testAction = () => {
  return (dispatch) => {
    console.log('API login POST call starts');
    fetch('/api/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ loginName: 'jai', password: 'test' }),
        credentials: 'include',
      },
    )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
  };
};
