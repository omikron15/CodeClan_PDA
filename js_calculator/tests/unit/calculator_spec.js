var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it can add 1 and 5', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+')
    calculator.numberClick(5);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 6)
  })

  it('it can subtract 4 from 7', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-')
    calculator.numberClick(4);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 3)
  })

  it('it can multiply 3 and 5', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*')
    calculator.numberClick(5);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 15)
  })

  it('it can divide 21 by 7', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/')
    calculator.numberClick(7);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 3)
  })

  it('it can select a number', function(){
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 5)
  })

  //unsure how to test operator selection ?
  //this is tested in all other tests anyways?

  // it('it can select an operator', function(){
  //   assert.equal(false, true)
  // })

  it('it can clear the selected number', function(){
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0)
  })

});
