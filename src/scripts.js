
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
const totalAmountSpent  = document.querySelector('#total-amount')
const submitButton = document.querySelector('#sub-button')
const travlerName = document.querySelector("#travler-name")


loginButton.addEventListener('click', userLogin)
submitButton.addEventListener('click',function(){
    bookNewTrip()
})
// window.addEventListener("load", () => {
   
//     // displayTotalAmount(travler.trips)
// }) 


let travler
let trips
let destinations
let amountSpent




function AllData() {
    Promise.all([getAPIData('travelers'), getAPIData('trips'), getAPIData('destinations')])
      .then((data) => {
          travler = new Travler(data[0].travelers[4])
          console.log('travler',travler)
          trips =  filteredArraysByID(travler.id,'userID',data[1].trips)
        travler.trips = trips.map(e => new Trip(e))
        destinations = data[2].destinations
        displayTripData(travler)
        addLocationToMenu(destinations)
        displayTravlerName(travler)
        updateAmountSpent()
        console.log('total trips', trips.length)
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



function addLocationToMenu(locationOptions){
    return locationOptions.map(e =>{
        locations.innerHTML += `
        <option id="${e.id}" value="${e.id}">${e.destination}</option>`
    })
}


function bookNewTrip(){
    console.log('duration', duration.value)
   const newTripData = {
        id: parseInt(Date.now()),  
        userID: travler.id,
        destinationID: parseInt(locations.value),
        travelers: parseInt(travlers.value),
        duration: parseInt(duration.value),
        date:start.value.split('-').join('/'),
        status: "pending",
        suggestedActivities: [],
    }
    console.log(newTripData)
    newTrip(newTripData)                 
    costEst.innerHTML = `estimated cost with the 10% agent fee is`  
    clearForm()
    AllData()
}
    
function displayTravlerName(travler){
    travlerName.innerHTML = travler.name
}
function clearForm(){
    location.value = ''
    start.value = ''
    duration.value = ''
    travlers.value = ''
}


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
    if (loginUsername.value === 'traveler5' && loginPassword.value === 'traveler') {
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
    


//iterate over trip array
//compare trip array against destination array
//if destinationID === id
// motiply total cost by the number of people

    function totalAmount(){
       const totalCost = trips.reduce((acc,trip)=>{
           destinations.forEach(dest => {
                 if(dest.id === trip.destinationID && trip.userID === travler.id){    
                    acc += (dest.estimatedLodgingCostPerDay * trip.duration)
                    acc += dest.estimatedFlightCostPerPerson * trip.travelers
                }
            })

            return acc 
        },0)
        amountSpent = `you have spent $${totalCost + (totalCost * .1).toFixed(2)}`
        return totalCost
    }


    function updateAmountSpent(){
        console.log('1')
        totalAmount()
        totalAmountSpent.innerHTML = amountSpent
    }