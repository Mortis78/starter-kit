class Trip {
    constructor(tripData) {
      this.id = tripData.id
      this.userID = tripData.userID
      this.destinationID = tripData.destinationID
      this.travelers = tripData.travelers
      this.date = tripData.date
      this.duration = tripData.duration
      this.status = tripData.status
      this.suggestedActivities = tripData.suggestedActivities
    }
    calcTripCost(destRepo) {
        
        const destination = destRepo.findDestByID(this.destinationID);
        return destination ? (this.travelers * destination.estimatedFlightCostPerPerson) + (destination.estimatedLodgingCostPerDay * this.duration) : false;
      }
    
      calcAgentFee(destRepo) {
        const tripCost = this.calcTripCost(destRepo)
        return tripCost ? tripCost * .1: false;
      }
      
      findDestName(destRepo) {
        const destination = destRepo.findDestByID(this.destinationID);
        return destination ? destination.destination : false;
      }

}

export default Trip