const fetchData = (type) => {
    return fetch(`http://localhost:3001/api/v1/${type}`)
        .then((singleTravler) => singleTravler.json()),

}
  // console.log('I will be a fetch request!', fetchUserDat())
  
  export default fetchData