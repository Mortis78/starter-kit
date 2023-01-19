import chai from 'chai';
const expect = chai.expect;
import tripTestData from './trip-test-data.js';
import Trip from '../src/trips.js';
import destinationTestData from './destination-test-data.js'
import Destination from '../src/destination.js';

describe('Trip', () => {
    let newTrip
    let destination
    beforeEach(() => {
        newTrip = new Trip(tripTestData[0].trips[0])
        destination = new Destination(destinationTestData[0].destinations[0])
    })
    
    it('Should have an id for each trip', function () {
        expect(newTrip.id).to.equal(1)
    })
    it('Should have a user id for each trip', function () {
        expect(newTrip.userID).to.equal(44)
    })
    it('Should have a destination id for each trip', function () {
        expect(newTrip.destinationID).to.equal(49)
    })
    it('Should have a number of travelers per trip', function () {
        expect(newTrip.travelers).to.equal(1)
    })
    it('Should have a date for each trip', function () {
        expect(newTrip.date).to.equal("2022/09/16")
    })
    it('Should have a duration for each trip', function () {
        expect(newTrip.duration).to.equal(8)
    })
    
})