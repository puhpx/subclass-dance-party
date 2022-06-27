var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinkyDancer"></span>');
  this.setPosition(top, left);
  $('.blinkyDancer').click(function(event) {
    var back = ['red', 'blue', 'yellow', 'navy', 'orange', 'green', 'aqua'];
    var rand = back[Math.floor(Math.random() * back.length)];
    $(event.target).css('border-color', rand);
  });
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle(100);
};