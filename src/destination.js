class Destination {
    constructor(destinations) {
      this.destinations = destinations;
    };
  
    DestinationByID(id) {
      const destination = this.destinations.find(destination => destination.id ===id);
      return destination ? destination : false;
    };
  
  
  };
  
  export default Destination;