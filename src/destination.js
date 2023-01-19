class Destination {
    constructor(destinations) {
      this.id = destinations.id
      this.destination = destinations.destination
      this.lodgingCostPerDay = destinations.estimatedLodgingCostPerDay
      this.estimatedFlightCostPerPerson = destinations.estimatedFlightCostPerPerson
      this.image = destinations.image 
      this.alt = destinations.alt
   }
    

  }

  // {calculateTripCost()
  //   const lodgingEst = this.destination.lodgingCost * this.duration
  //   const flightEst = this.destination.flightCost * this.travelers
  //   return (lodgingEst + flightEst).toFixed(2)
  // }

  

export default Destination