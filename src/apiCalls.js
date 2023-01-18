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
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(response => console.log(response))
}
export { getAPIData, newTrip }