var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it("should multiply 3x5 and get 15", function() {
    calculator.previousTotal = 3
    calculator.multiply(5)

    assert.equal(15, calculator.runningTotal)
  });

  it("should divide 21/7 and get 3", function() {
    calculator.previousTotal = 21
    calculator.divide(7)

    assert.equal(3, calculator.runningTotal)
  });

  it("should add 1+4 and get 5", function() {
    calculator.previousTotal = 1
    calculator.add(4)

    assert.equal(5, calculator.runningTotal)
  });

  it("should subtract 7-4 and get 3", function() {
    calculator.previousTotal = 7
    calculator.subtract(4)

    assert.equal(3, calculator.runningTotal)
  });

  it("should concatenate multiple number button clicks", function() {
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    calculator.numberClick(4)
    calculator.numberClick(5)
    calculator.numberClick(6)

    assert.equal(123456, calculator.runningTotal)
  });

  it("should chain multiple operations together", function() {


    calculator.numberClick(7)
    calculator.operatorClick("-")
    calculator.numberClick(4)
    calculator.operatorClick("+")
    calculator.numberClick(2)
    calculator.operatorClick("*")
    calculator.numberClick(3)
    calculator.operatorClick("=")

    assert.equal(15, calculator.runningTotal)
  });

  it("should clear the running total without affecting the calculation", function() {
    calculator.numberClick(7)
    calculator.operatorClick("+")
    calculator.numberClick(1)
    calculator.clearClick()
    calculator.operatorClick("=")

    assert.equal(7, calculator.runningTotal)
  })


});
