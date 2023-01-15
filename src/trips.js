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
    }
    totalTripCost(destination) {
        
        const destination = destination.findDestByID(this.destinationID)
        return destination (this.travelers * destination.estimatedFlightCostPerPerson) + (destination.estimatedLodgingCostPerDay * this.duration) 
      }
    
      agentFee(destination) {
        const tripCost = this.totalTripCost(destination)
        return tripCost  * 0.1
      }
      
      findDestName(destination) {
        const destination = destination.findDestByID(this.destinationID)
        return destination 
      }

}

export default Trip