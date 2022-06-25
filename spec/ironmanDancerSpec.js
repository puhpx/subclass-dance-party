describe('ironmanDancer', function() {

  var ironmanDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ironmanDancer = new makeIronmanDancer(20, 40, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(ironmanDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(ironmanDancer.$node, 'toggle');
    ironmanDancer.step();
    expect(ironmanDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(ironmanDancer, 'step');
      expect(ironmanDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(ironmanDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(ironmanDancer.step.callCount).to.be.equal(2);
    });
  });
});
