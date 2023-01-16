import Destination from '../src/destination.js';

class Trip {
    constructor(tripData) {
      this.id = tripData.id
      this.userID = tripData.userID
      this.destinationID = tripData.destinationID
      this.travelers = tripData.travelers
      this.date = tripData.date
      this.duration = tripData.duration
      this.status = tripData.status || 'pending'
      this.suggestedActivities = tripData.suggestedActivities
      console.log('trip data  = ',tripData)
    }
    
    totalTripCost(destination) {
        const destinationCost = Destination.destinationByID(this.destinationID)
        return destinationCost (this.travelers * destination.estimatedFlightCostPerPerson) + (destination.estimatedLodgingCostPerDay * this.duration) 
    }
    
    agentFee(destination) {
        const agentCost = this.totalTripCost(destination)
        return agentCost  * 0.1
    }
      
    findDestination(destination) {
        const newDestination = Destination.findDestByID(this.destinationID)
        return newDestination
    }
      

}

export default Trip