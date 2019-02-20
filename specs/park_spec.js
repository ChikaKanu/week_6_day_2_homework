const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;

  beforeEach(function () {
    park = new Park ('Theme_park', 25, 0);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('s-rex', 'carnivore', 20);
    dinosaur3 = new Dinosaur('m-rex', 'herbivore', 30);
    dinosaur4 = new Dinosaur('x-rex', 'omnivore', 10);
  });

   it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Theme_park');
  });

  it('should have a ticket price', function () {
   const actual = park.ticket_price;
   assert.strictEqual(actual, 25);
  });

 it('should have a collection of dinosaur', function () {
  const actual = park.dinosaurs;
  assert.strictEqual(actual, 0);
  });

  it('should add dinosaur to its collection', function () {
    park.addToCollection(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
   });


   it('should remove dinosaur from its collection', function () {
     park.addToCollection(dinosaur1)
     park.addToCollection(dinosaur2)
     park.removeFromCollection(dinosaur1)
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
    });


    it('should find dinosaur with highest attraction per day', function () {
      park.addToCollection(dinosaur1)
      park.addToCollection(dinosaur2)
      park.addToCollection(dinosaur3)
      const actual = 'dinosaur1';
      assert.strictEqual(actual, park.maxGuestAttractedPerDay());
    });

    it('should find dinosaur of particular specie', function () {
      park.addToCollection(dinosaur1)
      park.addToCollection(dinosaur2)
      park.addToCollection(dinosaur3)
      park.addToCollection(dinosaur4)
      const actual = ['dinosaur1', 'dinosaur2'];
      assert.strictEqual(actual, park.findparticularSpecie('carnivore'));
    });

    it('should remove dinosaur of particular specie', function () {
      park.addToCollection(dinosaur1)
      park.addToCollection(dinosaur2)
      park.addToCollection(dinosaur3)
      park.addToCollection(dinosaur4)
      const actual = ['dinosaur1', 'dinosaur2', 'dinosaur3'];
      assert.strictEqual(actual, park.removeParticularSpecie('omnivore'));
    });

});
