
import './css/styles.css';
import Trip from './trips.js';
import Travler from './travler';
import Destination from './destination.js';
import {getAPIData, newTrip} from './apiCalls.js';

const loginErr = document.querySelector('#login-err')
const loginPage = document.querySelector('#login')
const topSection = document.querySelector('#top-section')
const bottomSection = document.querySelector('#bottom-section')
const loginUsername = document.querySelector('#user-name')
const loginPassword = document.querySelector('#user-password')
const loginButton = document.querySelector('#user-log-in')
const costEst = document.querySelectorAll('#cost-est')
const start = document.querySelector('#start')
const duration = document.querySelector('#duration')
const travlers = document.querySelector('#travler')
const locations = document.querySelector('#locations')
const allTrips = document.querySelector('#all-trips')
const totalAmount  = document.querySelector('#total-amount')
const submitButton = document.querySelector('#sub-button')
const travlerName = document.querySelector("#travler-name")


loginButton.addEventListener('click', userLogin)
submitButton.addEventListener('click',function(){
    console.log('fired')
    bookNewTrip()
})
// window.addEventListener("load", () => {
   
//     // displayTotalAmount(travler.trips)
// }) 


let travler
let trips
let destinations




function AllData() {
    Promise.all([getAPIData('travelers'), getAPIData('trips'), getAPIData('destinations')])
      .then((data) => {
          travler = new Travler(data[0].travelers[7])
          trips =  filteredArraysByID(travler.id,'userID',data[1].trips)
        travler.trips = trips.map(e => new Trip(e))
        destinations = data[2].destinations.map(e => new Destination(e))
        displayTripData(travler)
        addLocationToMenu(destinations)
        displayTravlerName(travler)
        console.log(travler)
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
    console.log('duration value =',parseInt(duration.value))
   const newTripData = {
        id: parseInt(Date.now()),  
        userID: travler.id,
        destinationID: parseInt(locations.value),
        travelers: parseInt(travlers.value),
        date:start.value.split('-').join('/'),
        duration: parseInt(duration.Value),
        status: "pending",
        suggestedActivities: [],
    }
    console.log(newTripData)
    costEst.innerHTML = `estimated cost with the 10% agent fee is`  
    newTrip(newTripData)
    // clearForm()
}
    
function displayTravlerName(travler){
    travlerName.innerHTML = travler.name
}
// function clearForm(){
//     location.value = ''
//     start.value = ''
//     duration.value = ''
//     travlers.value = ''
// }


function hideLogin() {
    console.log('hide log')
    loginPage.classList.add('hidden')
    topSection.classList.remove('hidden')
    bottomSection.classList.remove('hidden')
}


//   /check for corect info
//   / username = travler${id}
//   /password = travel
function userLogin(event){
    event.preventDefault()
    console.log('user log in1')
    if (loginUsername.value === 'traveler8' && loginPassword.value === 'traveler') {
        console.log('user log in2')
        hideLogin()
        AllData()
    }
    // else{
    //     loginErr.innerHTML = 'im sorry some your username or password did not match'
    // }
}

//query select all imput fields  {done}
//captur the value of each value  {done}
//event listner on submit button    {done}
//creat new object form input //format should be the same as trip {done}
//post new object to api
//call api again to update api info for trips
// {
    
    
