import chai from 'chai';
const expect = chai.expect;
import Destination from '../src/destination';
import destinationTestData from './destination-test-data';


describe('Destination', () => {
    let destination
    
    beforeEach(() => {
        destination = new Destination(destinationTestData[0])
        console.log('destination.id = ', destination[0])
    })

    it('Should be a function', function () {
        expect(destination).to.be.an.instanceOf(Destination)
    })

    // it('Should have a destination id', function () {
    //     expect(destination.to.equal('Lima, Peru'))
    // })



    
}) 



