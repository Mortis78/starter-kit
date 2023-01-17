
import './css/styles.css';
import Trip from './trips.js';
import Travler from './travler';
import Destination from './destination.js';
import {getAPIData, newTrip} from './apiCalls.js';

const costEst = document.querySelectorAll('#cost-est')
const start = document.querySelector('#start')
const duration = document.querySelector('#duration')
const travlers = document.querySelector('#travler')
const locations = document.querySelector('#locations')
const allTrips = document.querySelector('#all-trips')
const totalAmount  = document.querySelector('#total-amount')
const submitButton = document.querySelector('#sub-button')
const travlerName = document.querySelector("#travler-name")

submitButton.addEventListener('click',function(){
    console.log('fired')
    bookNewTrip()
})
window.addEventListener("load", () => {
    AllData()
    // displayTotalAmount(travler.trips)
}) 



let newTripID
let travler
let trips
let destinations




function AllData() {
    Promise.all([getAPIData('travelers'), getAPIData('trips'), getAPIData('destinations')])
      .then((data) => {
          travler = new Travler(data[0].travelers[7],[])
          trips =  filteredArraysByID(travler.id,'userID',data[1].trips)
        travler.trips = trips.map(e => new Trip(e))
        destinations = data[2].destinations.map(e => new Destination(e))
        displayTripData(travler)
        addLocationToMenu(destinations)
        displayTravlerName(travler)
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
    return locationOptions.map(e =>{
        console.log(e.destinations.id)
        locations.innerHTML += `
        <option id="${e.destinations.id}" value="${e.destinations.id}">${e.destinations.destination}</option>`
    })
}


function bookNewTrip(){
    // console.log('trips = ',trips)
    // let newTripID = trips.length + 1
    console.log(location)
   const newTripData = {
        id: Date.now(),  
        userID: travler.id,
        destinationID: locations.value,
        travelers: travlers.value,
        date: start.value,
        duration: duration.ariaValueMax,
        status: "pending",
        suggestedActivities: [],
    }
    console.log(newTripData)
    costEst.innerHTML = `estimated cost with the 10% agent fee is${45}`  
   
        newTrip(newTripData)
      
    //    setTimeout(function(){
    //     AllData()
    //     // clearForm()
    // }, 1000) 
}
// function clearForm(){
//     location.value = ''
//     start.value = ''
//     duration.value = ''
//     travlers.value = ''
// }







//query select all imput fields  {done}
//captur the value of each value  {done}
//event listner on submit button    {done}
//creat new object form input //format should be the same as trip {done}
//post new object to api
//call api again to update api info for trips
// {



function displayTravlerName(travler){
    travlerName.innerHTML = travler.name
}