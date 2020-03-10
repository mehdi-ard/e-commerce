export const convertObjectToQueryString = obj => {
  const queryString = [];
  for (let prop in obj)
    if (obj.hasOwnProperty(prop))
      if (obj[prop] instanceof Array)
        obj[prop].forEach(value =>
          queryString.push(
            encodeURIComponent(prop) + '=' + encodeURIComponent(value)
          )
        );
      else
        queryString.push(
          encodeURIComponent(prop) + '=' + encodeURIComponent(obj[prop])
        );
  return queryString.join('&');
};
