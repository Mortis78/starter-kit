import Destination from '../src/destination.js';

class Trip {
    constructor(tripData) {
      this.id = tripData.id
      this.userID = tripData.userID
      this.destinationID = tripData.destinationID
      this.travelers = tripData.travelers
      this.date = tripData.date
      this.duration = tripData.duration || 0
      this.status = tripData.status || 'pending'
      this.suggestedActivities = tripData.suggestedActivities
    }
    
    
      
    findDestination(destination) {
        const newDestination = Destination.findDestByID(this.destinationID)
        return newDestination
    }
      

}

export default Trip