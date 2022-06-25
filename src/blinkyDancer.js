var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinkyDancer"></span>');
 };

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
    makeDancer.prototype.step.call(this);
    this.$node.animate({
      width: '+=30px',
      height: '+=30px'
  }, 1000);
}