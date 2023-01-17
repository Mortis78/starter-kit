
class Travler {
    constructor(travlerInfo) {
      this.id = travlerInfo.id
      this.name = travlerInfo.name
      this.travlerType = travlerInfo.travelerType
      
    }
    findTrip(id) {
        const trip = this.trips.find(trip => trip.id === id)
        return trip 
      }

  //  totalSpent(trips,destinations) {
  //   const total = this.trips.reduce((acc, trip) => {

  //     acc += 
  //     return total
  //   }, 0)
  //   return total 
  // }


}

export default Travler

// tripCost(destination) {
//   const destinationCost = Destination.destinationByID(this.destinationID)
//   return destinationCost (this.travelers * destination.estimatedFlightCostPerPerson) + (destination.estimatedLodgingCostPerDay * this.duration) 
// }