function getAPIData(info) {
  const url = `http://localhost:3001/api/v1/${info}`;
  return fetch(url)
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw Promise.reject(response)
      }
    })
}

export { getAPIData}