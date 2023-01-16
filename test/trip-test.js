import chai from 'chai';
const expect = chai.expect;
import tripTestData from './trip-test-data.js';
import Trip from '../src/trips.js';
import destinationTestData from './destination-test-data.js'
import Destination from '../src/destination.js';

describe('Trip', () => {
    let trip
    let destination
    beforeEach(() => {
        trip = new Trip(tripTestData[0].trips[0])
        destination = new Destination(destinationTestData[0].destinations[0])
    })
    
    it('Should have an id for each trip', function () {
        expect(trip.id).to.equal(1)
        
    })
    
})