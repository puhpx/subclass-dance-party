var makeThorDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="thorDancer"> <img src="pic/thor2.png" alt="Thor" width="100" height="100"></span>');
  this.setPosition(top, left);
  $('.thorDancer').hover(function(event) {
    $(event.target).attr('src', 'pic/thor1_thunder.png');
  }, function(event) {
    $(event.target).attr('src', 'pic/thor2.png');
  });
};

makeThorDancer.prototype = Object.create(makeDancer.prototype);
makeThorDancer.prototype.constructor = makeThorDancer;

makeThorDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  setTimeout(function() { $('.thorDancer').css('transform', 'rotate(-0.5deg)') }, 953);
  // setTimeout(function() { $('.thorDancer').css('transform', 'rotate(0deg)') }, 2000);
  setTimeout(function() { $('.thorDancer').css('transform', 'rotate(0.5deg)') }, 1331);
  // setTimeout(function() { $('.thorDancer').css('transform', 'rotate(0deg)') }, 2000);
};

