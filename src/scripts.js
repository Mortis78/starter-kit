
import './css/styles.css';
import Trip from './trips.js';
import Travler from './travler';
import Destination from './destination.js';
import {getAPIData} from './apiCalls.js';

const start = document.querySelector('#start')
const duration = document.querySelector('#duration')
const travlers = document.querySelector('#travlers')
const locations = document.querySelector('#locations')
const allTrips = document.querySelector('#all-trips')
const totalAmount  = document.querySelector('#total-amount')
const submitButton = document.querySelector('#sub-button')

submitButton.addEventListener('click', () => {

})

window.addEventListener("load", () => {
    AllData()
    displayTotalAmount(travler.trips)
    bookNewTrip(travler,destinations)
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
        addLocationToMenu(destinations)
        
    })
}

function filteredArraysByID(ID,arrayID,filterArray){
    return filterArray.filter(e => e[arrayID] === ID)
    
}

function displayTripData(travler) {
 const tripCards = travler.trips.forEach(e =>{
     allTrips.innerHTML += `
    <div class="trip-card">
        <p> the status of your trip is ${e.status}</P>
        <p> you are leaving ${e.date}</P>
        <p> you will be there for ${e.duration} days</P>
    </div
 `})
  return tripCards
 }

 function displayTotalAmount(trips){
    totalAmount.innerHTML =  totalPlusAgentFee(trips)
 }


function addLocationToMenu(locationOptions){
    console.log('destinations = ',locationOptions )
    return locationOptions.map(e =>{
        console.log(e.destinations.id)
        locations.innerHTML += `
        <option id="${e.destinations.id}" value="${e.destinations.destination}">${e.destinations.destination}</option>`
    })
}


function bookNewTrip(travler,destinations){
trips.push({
    id: destinations.id,
    userID: travler.userID,
    destinationID: destination.value,
    travelers: travlers.value,
    date: date.value.toString(),
    duration: duration.ariaValueMax,
    status: "pending",
    suggestedActivities: [ ]
})

}

//query select all imput fields  done
//captur the value of each value  query.value
//event listner on submit button
//creat new object form input //format should be the same as trip
//post new object to api
//call api again to update api info for trips
// {
//     id: 2,
//     userID: 35,
//     destinationID: 25,
//     travelers: 5,
//     date: "2022/10/04",
//     duration: 18,
//     status: "approved",
//     suggestedActivities: [ ]
//     },