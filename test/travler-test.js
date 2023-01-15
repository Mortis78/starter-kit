import chai from 'chai';
const expect = chai.expect;

import Travler from '../src/travler';
import travlerTestData from './travler-test-data';
import Trip from '../src/trips';
import tripTestData from './trip-test-data';

describe('Travler', () => {
    let travlerData
    let travler
    let trips
    beforeEach(() => {
        travlerData = travlerTestData[0].travelers[0]
        trips = tripTestData[0].trips.filter(trip => trip.userID === travler.id)
        console.log('trips = ',trips)
        travler = new Travler(travlerData, trips)
    })
    
    it('should have an id and name', () => {
    console.log('travler  = ', travler)
        expect(travler.id).to.equal(1);
        expect(travler.name).to.equal('Ham Leadbeater');
    });

    it('should have a travelType property and a trips property', () => {
        expect(travler.travlerType).to.equal('relaxer');
        expect(travler.trips.length).to.equal(0)
        
    });
     
      
   
});
