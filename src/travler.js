
class Travler {
    constructor(travlerInfo, trips) {
      this.id = travlerInfo.id
      this.name = travlerInfo.name
      this.travlerType = travlerInfo.travelerType
      this.trips = trips
    }
    findTrip(id) {
        const trip = this.trips.find(trip => trip.id === id)
        return trip 
      }

  calcTotalSpent(destRepo) {
    const total = this.trips?.reduce((acc, trip) => {
      acc+= trip.calcTripCost(destRepo) + trip.calcAgentFee(destRepo)
      return total
    }, 0)
    return total 
  }


}

export default Travler