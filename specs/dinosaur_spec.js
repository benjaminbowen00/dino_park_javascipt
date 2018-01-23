const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur', function(){

  let tyrannosaurus;

  beforeEach(function(){
    tyrannosaurus = new Dinosaur("Tyrannosaurus", 3);
  })

  it('can get dino type', function(){
    assert.strictEqual(tyrannosaurus.type, "Tyrannosaurus");
  })






})
