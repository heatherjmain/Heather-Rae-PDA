var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it("number buttons work to update the display of the running total", function() {
    runningTotal = element(by.css("#running_total"))
    element(by.css("#number8")).click();
    expect(running_total.getAttribute("value")).to.eventually.equal("8")
  })

  it("the arithmetical operation * should work to update the display with the result of the operation", function() {
    runningTotal = element(by.css("#running_total"))
    element(by.css("#number3")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_equals")).click()
    expect(running_total.getAttribute("value")).to.eventually.equal("12")
  });

  it("the arithmetical operation - should work to update the display with the result of the operation", function() {
    runningTotal = element(by.css("#running_total"))
    element(by.css("#number3")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click()
    expect(running_total.getAttribute("value")).to.eventually.equal("1")
  });

  it("the arithmetical operation + should work to update the display with the result of the operation", function() {
    runningTotal = element(by.css("#running_total"))
    element(by.css("#number3")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_equals")).click()
    expect(running_total.getAttribute("value")).to.eventually.equal("7")
  });

  it("the arithmetical operation / should work to update the display with the result of the operation", function() {
    runningTotal = element(by.css("#running_total"))
    element(by.css("#number6")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_equals")).click()
    expect(running_total.getAttribute("value")).to.eventually.equal("3")
  });

  it("should be able to chain multiple operations together", function() {
    runningTotal = element(by.css("#running_total"))
    element(by.css("#number3")).click();
    element(by.css("#operator_multiply")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_add")).click();
    element(by.css("#number2")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number1")).click();
    element(by.css("#operator_equals")).click()
    expect(running_total.getAttribute("value")).to.eventually.equal("13")
  });

  it("should work for positive numbers", function() {
    runningTotal = element(by.css("#running_total"))
    element(by.css("#number6")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number1")).click();
    element(by.css("#operator_equals")).click()
    expect(running_total.getAttribute("value")).to.eventually.equal("5")
  });

  it("should work for negative numbers", function() {
    runningTotal = element(by.css("#running_total"))
    element(by.css("#number6")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number1")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_equals")).click()
    expect(running_total.getAttribute("value")).to.eventually.equal("-4")
  });

  it("should work for decimal numbers", function() {
    runningTotal = element(by.css("#running_total"))
    element(by.css("#number6")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number4")).click();
    element(by.css("#operator_equals")).click()
    expect(running_total.getAttribute("value")).to.eventually.equal("1.5")
  });

  it("should work for large numbers", function() {
    runningTotal = element(by.css("#running_total"))
    element(by.css("#number6")).click();
    element(by.css("#number6")).click();
    element(by.css("#number6")).click();
    element(by.css("#number6")).click();
    element(by.css("#number6")).click();
    element(by.css("#number6")).click();
    element(by.css("#number6")).click();
    element(by.css("#operator_subtract")).click();
    element(by.css("#number1")).click();
    element(by.css("#number1")).click();
    element(by.css("#number1")).click();
    element(by.css("#number1")).click();
    element(by.css("#number1")).click();
    element(by.css("#number1")).click();
    element(by.css("#number1")).click();
    element(by.css("#operator_equals")).click()
    expect(running_total.getAttribute("value")).to.eventually.equal("5555555")
  });

  it("should return an error when dividing by 0", function() {
    runningTotal = element(by.css("#running_total"))
    element(by.css("#number6")).click();
    element(by.css("#operator_divide")).click();
    element(by.css("#number0")).click();
    element(by.css("#operator_equals")).click()
    expect(running_total.getAttribute("value")).to.eventually.equal("Cannot divide by 0")
  });

});
