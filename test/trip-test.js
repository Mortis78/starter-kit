import chai from 'chai';
const expect = chai.expect;
import tripTestData from './tripdata.js';
import Trip from '../src/trips.js';
import destinationTestData from './destination-test-data.js'

describe('Trip', () => {
    let trip1
    let trip2
    let trip3
    beforeEach(() => {
        trip1 = new Trip(tripTestData[4])
        trip2 = new Trip(tripTestData[10])
        trip3 = new Trip(tripTestData[3])
    })
    
    it('Should have an id for each trip', function () {
        expect(trip1.id).to.equal(5)
    })
}