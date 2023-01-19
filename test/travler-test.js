import chai from 'chai';
const expect = chai.expect;

import Travler from '../src/travler';
import travlerTestData from './travler-test-data';
import Trip from '../src/trips';
import tripTestData from './trip-test-data';

describe('Travler', () => {
    let travler
    
    beforeEach(() => {
        travler = new Travler(travlerTestData[0].travelers[0])
        
    })
    it('Should be a function', function() {
        expect(travler).to.be.an.instanceOf(Travler)
      });
    
    it('should have an id', () => {
        expect(travler.id).to.equal(1);
    });

    it('should have an  name', () => {
        expect(travler.name).to.equal('Ham Leadbeater');
    });

    it('Should have a traveler type', function () {
        expect(travler.travlerType).to.equal("relaxer")
      })
});
