
import './css/styles.css';
import Trip from './trips.js';
import Travler from './travler';
import Destination from './destination.js';
import {getAPIData} from './apiCalls.js';

const allTrips = document.querySelector('#all-trips')


window.addEventListener("load", () => {
    AllData()
    
})

let travler
let trips
let destinations

function AllData() {
    Promise.all([getAPIData('travelers'), getAPIData('trips'), getAPIData('destinations')])
      .then((data) => {
        travler = new Travler(data[0].travelers[1])
        trips =  filteredArraysByID(travler.id,'userID',data[1].trips)
        travler.trips = trips.map(e => new Trip(e))
        destinations = data[2].destinations.map(e => new Destination(e))
        displayTripData(travler)
    })
}

function filteredArraysByID(ID,arrayID,filterArray){
    return filterArray.filter(e => e[arrayID] === ID)
    
}

function displayTripData(travler) {
    console.log('traveler = ', travler)
 const tripCards = travler.trips.forEach(e =>{
     allTrips.innerHTML += `
    <div class="trip-card">
        <p>the status of your trip is ${e.status}</P>
        <p>you are leaving ${e.date}</P>
        <p>you will be there for ${e.duration} days</P>
        <p>suggested activities include ${e.suggestedsuggestedActivities}</P>
        
    </div
 `})
  return tripCards
 }







//    allTrips.innerHTML = ``

