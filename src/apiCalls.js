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
function newTrip(data)  {
  return fetch('http://localhost:3001/api/v1/trips', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => response.json())
  .then(response => console.log(response))
}
export { getAPIData, newTrip }